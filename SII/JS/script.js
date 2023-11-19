// Función para abrir el modal según el tipo
function openModal(modalType) {
    var modalId = modalType + 'Modal';
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Función para cerrar el modal según el tipo
function closeModal(modalType) {
    var modalId = modalType + 'Modal';
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Añade lógica para mostrar y cerrar modales según el botón
document.getElementById('adminBtn').addEventListener('click', function() {
    openModal('admin');
});

document.getElementById('teacherBtn').addEventListener('click', function() {
    openModal('teacher');
});

document.getElementById('studentBtn').addEventListener('click', function() {
    openModal('student');
});


function login(userType) {
    // Lógica adicional aquí si es necesario antes de redirigir

    // Obtén los valores de usuario y contraseña (aquí debes agregar la lógica para validar)
    var username, password;

    if (userType === 'teacher') {
        username = document.getElementById('nip').value;
        password = document.getElementById('password').value;
    } else if (userType === 'admin') {
        username = document.getElementById('adminUsername').value;
        password = document.getElementById('adminPassword').value;
    } else if (userType === 'student') {
        username = document.getElementById('studentId').value;
        password = document.getElementById('studentPassword').value;
    }

    // Redirige según el tipo de usuario
    if (userType === 'teacher' && validateTeacherCredentials(username, password)) {
        window.location.href = 'Pages/Maestro.html';
    } else if (userType === 'admin' && validateAdminCredentials(username, password)) {
        window.location.href = 'Pages/Admin.html';
    } else if (userType === 'student' && validateStudentCredentials(username, password)) {
        window.location.href = 'Pages/Alumnos.html';
    } else {
        alert('Credenciales incorrectas'); 
    }
}

// Funciones de validación para cada tipo de usuario
function validateTeacherCredentials(nip, password) {
    // Agrega la lógica de validación para maestros
    return true;
}

function validateAdminCredentials(username, password) {
    // Agrega la lógica de validación para administradores
    return true;
}

function validateStudentCredentials(studentId, password) {
    // Agrega la lógica de validación para estudiantes
    return true;
}


// Función para obtener el ID del modal activo
function getActiveModalId() {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (modals[i].style.display === 'block') {
            return modals[i].id;
        }
    }
    return null;
}

// Función para cerrar el modal según el tipo
function closeModal(modalType) {
    var modalId = modalType + 'Modal';
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Añade un evento de clic a los elementos de cierre (X) en cada modal
document.querySelectorAll('.close').forEach(function (closeElement) {
    closeElement.addEventListener('click', function () {
        var modalType = this.getAttribute('data-modal-type');
        closeModal(modalType);
    });
});









// Función para dar de alta a un estudiante
function registerStudent() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const curp = document.getElementById('curp').value;
    const noControl = document.getElementById('noControl').value;
    const carrera = document.getElementById('carrera').value;
    const semestre = document.getElementById('semestre').value;

    // Validar que todos los campos estén completos (debes mejorar esta validación)
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !fechaNacimiento || !curp || !noControl || !carrera || !semestre) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Enviar datos al servidor (puedes usar AJAX, Fetch, etc.)
    const data = {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        fechaNacimiento,
        curp,
        noControl,
        carrera,
        semestre
    };

    // Ejemplo básico usando Fetch para enviar datos al servidor
    fetch('tu_servidor/guardar_datos.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert('Usuario registrado correctamente.');
        } else {
            alert('Error al registrar el usuario. Por favor, inténtalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error al enviar datos al servidor:', error);
    });
}