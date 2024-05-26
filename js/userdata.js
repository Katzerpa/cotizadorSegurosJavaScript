class UserData {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName.toUpperCase();
        this.lastName = lastName.toUpperCase();
        this.birthDate = birthDate;

    }

}

function showUserData() {
    // Obtener los datos almacenados en localStorage
    const userDataJSON = localStorage.getItem('userData');

    // Verificar si hay datos almacenados
    if (userDataJSON) {
        // Convertir los datos de JSON a objeto UserData
        const userData = JSON.parse(userDataJSON);
        const formattedBirthDate = new Date(userData.birthDate).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        // Mostrar los datos del usuario en un resumen
        document.getElementById('clientData').innerHTML = `
        <p>Nombre: ${userData.firstName}</p>
        <p>Apellido: ${userData.lastName}</p>
        <p>Fecha de Nacimiento: ${formattedBirthDate}</p>
    `;
    } else {

        Toastify({
            text: 'No se encontraron detalles del Cliente para Mostrar! \n Intenta nuevamente',
            close: true,
            className: 'toast-danger',
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 1000
        }).showToast();
    }
}


function showUserDataForm() {
    // Obtener los datos almacenados en localStorage
    const userDataJSON = localStorage.getItem('userData');

    // Verificar si hay datos almacenados
    if (userDataJSON) {
        // Convertir los datos de JSON a objeto UserData
        const userData = JSON.parse(userDataJSON);
        const formattedBirthDate = new Date(userData.birthDate).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });

        const firstNameInput = document.getElementById('firstNameForm');
        const lastNameInput = document.getElementById('lastNameForm');
        const birthDateInput = document.getElementById('birthDateForm');
        // Establecer los valores de los input
        firstNameInput.value = userData.firstName;
        lastNameInput.value = userData.lastName;
        birthDateInput.value = userData.birthDate;

        // Deshabilitar los input
        firstNameInput.disabled = true;
        lastNameInput.disabled = true;
        birthDateInput.disabled = true;
    } else {

        Toastify({
            text: 'No se encontraron detalles del Cliente para Mostrar! \n Intenta nuevamente',
            close: true,
            className: 'toast-danger',
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 1000
        }).showToast();
    }
}

