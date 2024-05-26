//=======================================================================
// Gestor de Validaciones
//=======================================================================

let fdateBirthDate = document.getElementById("birthDate");
let x = 0;
let alertPlaceholder = document.getElementById('alertaFechaInvalida')
let alertTrigger = document.getElementById('submit')

alertTrigger.addEventListener('click', function () {
    search_message();
})


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

//-------------Validad edad --------------------------------------

function calculateAge() {
    let fdateValue = document.getElementById("birthDate").value;
    let partsDate = fdateValue.split("-");
    let year = parseInt(partsDate[0]);
    let month = parseInt(partsDate[1]) - 1;
    let day = parseInt(partsDate[2]);
    let birthDate = new Date(year, month, day);
    let currentDate = new Date();
    let differenceMilliseconds = currentDate - birthDate;
    let inputAge = Math.floor(differenceMilliseconds / (1000 * 60 * 60 * 24 * 365));
    return validAge(inputAge);

}

function validAge(age) {

    if (age > 17) {
        document.getElementById('userDataForm').classList.add('d-none');
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

/*****Valida inputs formulario para contratar seguro */

function isValid(fieldId) {
    switch (fieldId) {
        case 'documetDni':
            const documetDni = DOMById('documetDni').value.trim();
            return documetDni.length > 6 && documetDni.length < 9;
        case 'documetCuit':
            const documetCuit = DOMById('documetCuit').value.trim();
            if (isNaN(documetCuit)) return false;
            return documetCuit.length === 11;

        case 'placeOfBirth':
            const placeOfBirth = DOMById('placeOfBirth').value.trim();
            if (!isNaN(placeOfBirth)) return false;
            if (placeOfBirth.length < 5) return false;
            return true;

        case 'inputAddress':
            const inputAddress = DOMById('inputAddress').value.trim();
            if (!isNaN(inputAddress)) return false;
            if (inputAddress.length < 10) return false;
            return true;

        case 'phone':
            const phone = DOMById('phone').value.trim();
            return phone.length === 8 || phone.length === 10;

        case 'inputPostalCode':
            const inputPostalCode = DOMById('inputPostalCode').value.trim();
            if (isNaN(inputPostalCode)) return false;
            return inputPostalCode.length === 4;
        default:
            return false;
    }
}

function DOMById(id) {
    return document.getElementById(id);
}


document.getElementById('documetDni').addEventListener('input', function () {
    const isValidDni = isValid('documetDni');
    const dniError = document.getElementById('dniError');
    if (!isValidDni) {
        dniError.style.display = 'inline';
        document.getElementById('sendData').classList.add('disabled');
    } else {
        dniError.style.display = 'none';
        document.getElementById('sendData').classList.remove('disabled');

    }
});

document.getElementById('documetCuit').addEventListener('input', function () {
    const isValidCuit = isValid('documetCuit');
    const cuitError = document.getElementById('cuitError');
    if (!isValidCuit) {
        cuitError.style.display = 'inline';
        document.getElementById('sendData').classList.add('disabled');
    } else {
        cuitError.style.display = 'none';
        document.getElementById('sendData').classList.remove('disabled');
    }
});

document.getElementById('placeOfBirth').addEventListener('input', function () {
    const isValidPlaceOfBirth = isValid('placeOfBirth');
    const placeOfBirthError = document.getElementById('placeOfBirthError');
    if (!isValidPlaceOfBirth) {
        placeOfBirthError.style.display = 'inline';
        document.getElementById('sendData').classList.add('disabled');
    } else {
        placeOfBirthError.style.display = 'none';
        document.getElementById('sendData').classList.remove('disabled');
    }
});

document.getElementById('inputAddress').addEventListener('input', function () {
    const isValidInputAddress = isValid('inputAddress');
    const inputAddressError = document.getElementById('inputAddressError');
    if (!isValidInputAddress) {
        inputAddressError.style.display = 'inline';
        document.getElementById('sendData').classList.add('disabled');
    } else {
        inputAddressError.style.display = 'none';
        document.getElementById('sendData').classList.remove('disabled');
    }
});



document.getElementById('phone').addEventListener('input', function () {
    const isValidPhone = isValid('phone');
    const phoneError = document.getElementById('phoneError');
    if (!isValidPhone) {
        phoneError.style.display = 'inline';
        document.getElementById('sendData').classList.add('disabled');
    } else {
        phoneError.style.display = 'none';
        document.getElementById('sendData').classList.remove('disabled');
    }
});

document.getElementById('inputPostalCode').addEventListener('input', function () {
    const isValidInputPostalCode = isValid('inputPostalCode');
    const inputPostalCodeError = document.getElementById('inputPostalCodeError');
    if (!isValidInputPostalCode) {
        inputPostalCodeError.style.display = 'inline';
        document.getElementById('sendData').classList.add('disabled');
    } else {
        inputPostalCodeError.style.display = 'none';
        document.getElementById('sendData').classList.remove('disabled');
    }
});


function validateForm() {
    const dni = document.getElementById('documetDni').value;
    const cuit = document.getElementById('documetCuit').value;
    const firstName = document.getElementById('firstNameForm').value;
    const lastName = document.getElementById('lastNameForm').value;
    const maritalStatus = document.getElementById('inputMaritalStatus').value;
    const nationality = document.getElementById('inputNationality').value;
    const placeOfBirth = document.getElementById('placeOfBirth').value;
    const email = document.getElementById('inputEmail').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('inputAddress').value;
    const province = document.getElementById('inputProvinces').value;
    const locality = document.getElementById('inputLocalities').value;
    const postalCode = document.getElementById('inputPostalCode').value;
    const birthDateInput = document.getElementById('birthDateForm').value;

    if (!dni || !cuit || !firstName || !lastName || !maritalStatus || !nationality || !placeOfBirth || !email || !phone || !address || !province || !locality || !postalCode || !birthDateInput) {
        document.getElementById('sendData').classList.remove('disabled');
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos.'
        });

        return false;
    }

    return true;

}


/**Escucha el evento salir */
document.getElementById('btn-close').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('userDataForm').classList.remove('d-none');
    document.getElementById('selectPlanForm').classList.add('d-none');
    cleanformuser();
    clearLocalStorage();
});