//=======================================================================
//Limpiar Formularios
//=======================================================================
function cleanformuser() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('birthDate').value = '';
    document.getElementById('documetDni').value = '';
    document.getElementById('documetCuit').value = '';
    document.getElementById('firstNameForm').value = '';
    document.getElementById('lastNameForm').value = '';
    document.getElementById('inputMaritalStatus').value = '';
    document.getElementById('inputNationality').value = '';
    document.getElementById('placeOfBirth').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputProvinces').value = '';
    document.getElementById('inputLocalities').value = '';
    document.getElementById('inputPostalCode').value = '';
    document.getElementById('birthDateForm').value = '';
    initializeRadioButton();
    document.getElementById('submit').classList.add('disabled');
}