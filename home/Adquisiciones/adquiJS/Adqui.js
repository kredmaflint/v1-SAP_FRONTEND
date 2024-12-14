document.addEventListener('DOMContentLoaded', function() {
    // Se agrega el event listener para el formulario de materiales
    document.querySelector('#materialForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Recopilamos los datos del formulario
        const descripcion = document.getElementById('descripcion').value;
        const tipoMaterial = document.getElementById('tipoMaterial').value;
        const costoPromedioUnidad = document.getElementById('costoPromedioUnidad').value;
        const existencia = document.getElementById('existencia').value;

        const formData = {
            'Descripcion': descripcion,
            'TipoMaterial': tipoMaterial,
            'CostoPromedioUnidad': costoPromedioUnidad,
            'Existencia': existencia
        };

        // Enviamos los datos del formulario al servidor usando fetch
        fetch('http://localhost:8000/Adquisiciones/adquisiciones.php?accion=insertar', {
            method: 'POST',
            body: new URLSearchParams(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Material registrado correctamente');
                loadTableData(); // Actualiza la tabla después de un registro exitoso
            } else {
                alert('Error al registrar el material: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al registrar el material');
        });
    });

    // Función para cargar los datos en la tabla
    function loadTableData() {
        fetch('http://localhost:8000/Adquisiciones/adquisiciones.php?tabla=material')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.querySelector('#partidasTable tbody');
                tableBody.innerHTML = ''; // Limpiar tabla antes de agregar nuevos datos
                data.forEach(row => {
                    const rowElement = document.createElement('tr');
                    rowElement.innerHTML = `
                        <td>${row.ClaveMaterial}</td>
                        <td>${row.Descripcion}</td>
                        <td>${row.TipoMaterial}</td>
                        <td>${row.CostoPromedioUnidad}</td>
                        <td>${row.Existencia}</td>
                    `;
                    tableBody.appendChild(rowElement);
                });
            })
            .catch(error => console.error('Error loading table data:', error));
    }

    // Cargar datos iniciales de la tabla cuando se carga la página
    loadTableData();
});