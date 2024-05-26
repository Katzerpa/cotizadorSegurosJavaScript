//=======================================================================
// Gestor del Usuario
//=======================================================================

class UserData {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName.toUpperCase();
        this.lastName = lastName.toUpperCase();
        this.birthDate = birthDate;

    }

}

function showUserData() {
    const userDataJSON = localStorage.getItem('userData');
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        const formattedBirthDate = new Date(userData.birthDate).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
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
            gravity: "bottom",
            duration: 1000
        }).showToast();
    }
}


function showUserDataForm() {
    const userDataJSON = localStorage.getItem('userData');
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        const formattedBirthDate = new Date(userData.birthDate).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const firstNameInput = document.getElementById('firstNameForm');
        const lastNameInput = document.getElementById('lastNameForm');
        const birthDateInput = document.getElementById('birthDateForm');
        firstNameInput.value = userData.firstName;
        lastNameInput.value = userData.lastName;
        birthDateInput.value = userData.birthDate;
        firstNameInput.disabled = true;
        lastNameInput.disabled = true;
        birthDateInput.disabled = true;
    } else {

        Toastify({
            text: 'No se encontraron detalles del Cliente para Mostrar! \n Intenta nuevamente',
            close: true,
            className: 'toast-danger',
            position: "center",
            gravity: "bottom",
            duration: 1000
        }).showToast();
    }
}

