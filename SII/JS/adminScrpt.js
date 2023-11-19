document.getElementById('adminForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const data = {
        nombre: document.getElementById('nombre').value,
        apellidoPaterno: document.getElementById('apellidoPaterno').value,
        // ... otros campos ...
    };

    // Guardar en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(data);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Usuario registrado correctamente.');
    // Puedes redirigir a la página de inicio o realizar otras acciones aquí
});
