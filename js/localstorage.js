function saveUserData() {
    // Obtener los valores del formulario
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;

    // Validar la edad
    const isValidAge = calculateAge(birthDate);
    if (isValidAge) {
        const userData = new UserData(firstName, lastName, birthDate);
        localStorage.setItem('userData', JSON.stringify(userData));
        setTimeout(()=>{
        Toastify({
            text: 'Tus datos se enviaron correctamente!',
            close: true,
            className: 'toast-success',
            position: "center", 
            gravity: "bottom", // `top` or `bottom`
            stopOnFocus: true,
            duration: 1000
        }).showToast();
          },800); // delay ficticio  
    } 
}

// Escuchar el evento click del formulario
document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    saveUserData();
});

//let policyDetails; // Definición en el ámbito global

function saveDetailsPolicy(policyDetails) {
    if (policyDetails) {
        localStorage.setItem('policyDetails', JSON.stringify(policyDetails));
    }
}

// Función para recuperar los detalles de la póliza
function getDetailsPolicy() {
    const storedPolicyDetails = localStorage.getItem('policyDetails');
    return storedPolicyDetails ? JSON.parse(storedPolicyDetails) : null;
}

// Escuchar el evento click del botón de cotización
document.getElementById('bnt-cotizar').addEventListener('click', function (event) {
    event.preventDefault();
    saveDetailsPolicy();
});
