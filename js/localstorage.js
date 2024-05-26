
//=======================================================================
// Gestor Localstorange
//=======================================================================

function saveUserData() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;

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
            gravity: "bottom", 
            stopOnFocus: true,
            duration: 1000
        }).showToast();
          },800);
    } 
}

// Escuchar el evento click del formulario
document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    saveUserData();
});


function saveDetailsPolicy(policyDetails) {
    if (policyDetails) {
        localStorage.setItem('policyDetails', JSON.stringify(policyDetails));
    }
}

function getDetailsPolicy() {
    const storedPolicyDetails = localStorage.getItem('policyDetails');
    return storedPolicyDetails ? JSON.parse(storedPolicyDetails) : null;
}

// Escuchar el evento click del botón de cotización
document.getElementById('btnQuote').addEventListener('click', function (event) {
    event.preventDefault();
    saveDetailsPolicy();
});


//Guaradr datos del formulario datos cliente contratante 

document.addEventListener('DOMContentLoaded', () => {
     loadFromLocalStorage();

    const inputs = document.querySelectorAll('#addressForm input, #addressForm select');

    inputs.forEach(input => {
        if (input.tagName === 'SELECT') {
            input.addEventListener('change', () => {
                saveToLocalStorage(input.id, true);
            });
        } else {
            input.addEventListener('input', () => {
                saveToLocalStorage(input.id);
            });
        }
    });
});

function saveToLocalStorage(fieldId, isSelect = false) {
    let value;
    if (isSelect) {
        const selectElement = document.getElementById(fieldId);
        value = selectElement.options[selectElement.selectedIndex].text;
        document.getElementById('sendData').classList.remove('disabled');
    } else {
        value = document.getElementById(fieldId).value.trim();
    }
    localStorage.setItem(fieldId, value);
}

function loadFromLocalStorage() {
    const fields = [
        'documetDni', 'documetCuit', 'firstNameForm', 'lastNameForm',
        'birthDateForm', 'inputMaritalStatus', 'inputNationality',
        'placeOfBirth', 'inputEmail', 'phone', 'inputAddress',
        'inputProvinces', 'inputLocalities', 'inputPostalCode'
    ];

    fields.forEach(fieldId => {
        const storedValue = localStorage.getItem(fieldId);
        if (storedValue) {
            const element = document.getElementById(fieldId);
            if (element.tagName === 'SELECT') {
                for (let i = 0; i < element.options.length; i++) {
                    if (element.options[i].text === storedValue) {
                        element.selectedIndex = i;
                        break;
                    }
                }
            } else {
                element.value = storedValue;
            }
        }
    });
}

function clearLocalStorage() {
    localStorage.clear();
    Toastify({
        text: 'Se limpiaron los datos correctamente!',
        close: true,
        className: 'toast-success',
        position: "center", 
        gravity: "bottom", 
        stopOnFocus: true,
        duration: 1000
    }).showToast();
}