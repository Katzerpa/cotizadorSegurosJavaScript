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
        console.log('No se encontraron datos almacenados en localStorage.');
    }
}

