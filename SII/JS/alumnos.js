        // Recupera datos de LocalStorage y muestra en la lista
        window.onload = function () {
            const studentList = document.getElementById('studentList');
            const welcomeMessage = document.getElementById('welcomeMessage');

            // Verifica si LocalStorage es compatible con el navegador
            if (typeof (Storage) !== "undefined") {
                // Obtiene datos guardados en LocalStorage
                const storedData = JSON.parse(localStorage.getItem('alumnos')) || [];

                // Muestra el nombre del primer alumno en el título
                if (storedData.length > 0) {
                    welcomeMessage.textContent = `Bienvenido, ${storedData[0].nombre}`;
                }

                // Muestra los datos en la lista
                storedData.forEach(student => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `Nombre: ${student.nombre}, Carrera: ${student.carrera}, Semestre: ${student.semestre}`;
                    studentList.appendChild(listItem);
                });
            } else {
                alert('LocalStorage no es compatible con este navegador.');
            }
        }
