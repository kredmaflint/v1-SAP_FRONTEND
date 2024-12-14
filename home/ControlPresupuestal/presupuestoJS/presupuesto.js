document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#partidaForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const claveDepartamento = document.getElementById('claveDepartamento').value;
        const claveConcepto = document.getElementById('claveConcepto').value;
        const disponibilidadAnual = document.getElementById('disponibilidadAnual').value;
        const conceptosAutorizados = document.getElementById('conceptosAutorizados').value;

        const formData = {
            'ClaveDepartamento': claveDepartamento,
            'ClaveConcepto': claveConcepto,
            'DisponibilidadAnual': disponibilidadAnual,
            'DisponibilidadMensual': (disponibilidadAnual / 12),
            'ConceptosAutorizados': conceptosAutorizados
        };

        fetch('http://localhost:8000/Presupuesto/control.php?accion=insertar', {
            method: 'POST',
            body: new URLSearchParams(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Partida registrada correctamente');
                loadTableData();
            } else {
                alert('Error al registrar la partida: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al registrar la partida');
        });
    });

    function loadTableData() {
        fetch('http://localhost:8000/Presupuesto/control.php?tabla=asignacionPresupuestal')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#partidasTable tbody');
                tableBody.innerHTML = '';
                data.forEach(row => {
                    const rowElement = document.createElement('tr');
                    rowElement.innerHTML = `
                        <td>${row.ClaveAsignacionPresupuestal}</td>
                        <td>${row.ClaveDepartamento}</td>
                        <td>${row.ClaveConcepto}</td>
                        <td>${row.DisponibilidadAnual}</td>
                        <td>${row.DisponibilidadMensual}</td>
                    `;
                    tableBody.appendChild(rowElement);
                });
            })
            .catch(error => console.error('Error loading table data:', error));
    }

    loadTableData();
});