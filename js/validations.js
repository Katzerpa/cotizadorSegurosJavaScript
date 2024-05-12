
let fdateBirthDate = document.getElementById("birthDate");
let x = 0;
let alertPlaceholder = document.getElementById('alertaFechaInvalida')
let alertTrigger = document.getElementById('submit')

alertTrigger.addEventListener('click', function () {
    search_message();
})

// Habilitar el botón cuando se completan todos los campos requeridos
document.getElementById('formulario').addEventListener('input', function () {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;

    if (firstName && lastName && birthDate) {

        document.getElementById('submit').classList.remove('disabled');
    } else {
        document.getElementById('submit').classList.remove('disabled');
    }
});

//-------------Validad edad 

function calculateAge() {
    let fdateValue = document.getElementById("birthDate").value;
    // Dividir la fecha de nacimiento en día, mes y año
    let partsDate = fdateValue.split("-");
    let year = parseInt(partsDate[0]);
    let month = parseInt(partsDate[1]) - 1; // Restar 1 al mes porque los meses en JavaScript son 0-indexados
    let day = parseInt(partsDate[2]);
    // Crear un objeto Date con la fecha de nacimiento
    let birthDate = new Date(year, month, day);
    // Obtener la fecha actual
    let currentDate = new Date();
    // Calcular la diferencia en milisegundos      
    let differenceMilliseconds = currentDate - birthDate;
    // Convertir la diferencia de milisegundos a años   
    let inputAge = Math.floor(differenceMilliseconds / (1000 * 60 * 60 * 24 * 365));
    return validAge(inputAge);

}

function validAge(age) {

    if (age > 17) {
        // Ocultar formulario de datos para cotizar
        document.getElementById('userDataForm').classList.add('d-none');
        // Mostrar formulario para seleccionar plan
        enablePlanSelection();
        return true;

    } else {
        if (m = 4) {
            alert(messages[4], 'danger')
            fdateBirthDate.value = '';
        }
        return false;
    }
}

function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    alertPlaceholder.append(wrapper)
}


