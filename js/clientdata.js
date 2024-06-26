
//=======================================================================
//Función para mostrar los datos en un modal SweetAlert
//=======================================================================

function showDataInModal() {
    const dni = document.getElementById('documetDni').value;
    const cuit = document.getElementById('documetCuit').value;
    const firstName = document.getElementById('firstNameForm').value;
    const lastName = document.getElementById('lastNameForm').value;
    const maritalStatus = document.getElementById('inputMaritalStatus').options[document.getElementById('inputMaritalStatus').selectedIndex].text;
    const nationality = document.getElementById('inputNationality').options[document.getElementById('inputNationality').selectedIndex].text;
    const placeOfBirth = document.getElementById('placeOfBirth').value;
    const email = document.getElementById('inputEmail').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('inputAddress').value;
    const province = document.getElementById('inputProvinces').options[document.getElementById('inputProvinces').selectedIndex].text;
    const locality = document.getElementById('inputLocalities').options[document.getElementById('inputLocalities').selectedIndex].text;
    const postalCode = document.getElementById('inputPostalCode').value;
    const birthDateInput = document.getElementById('birthDateForm').value;

    // Obtener día, mes y año del input para dar formato a la fecha 
    let fdateValue = birthDateInput;
    let partsDate = fdateValue.split("-");
    let year = parseInt(partsDate[0], 10);
    let month = parseInt(partsDate[1], 10) - 1;
    let day = parseInt(partsDate[2], 10);
    let formattedDate = `${day.toString().padStart(2, '0')}/${(month + 1).toString().padStart(2, '0')}/${year}`;
    let birthDate = `${day}/${month}/${year}`;

    let modalContent = `
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <table class="table table-success table-striped">
                <tbody>
                    <tr>
                        <th class="text-start w-50  "scope="row" style:align="left">DNI:</th>
                        <td class="text-start w-50 ">${dni}</td>
                    </tr>
                    <tr>
                    <th class="text-start w-50" scope="row">CUIT:</th>
                    <td class="text-start w-50">${cuit}</td>
                    </tr>
                    <tr>
                        <th class="text-start w-50" scope="row">Nombre:</th>
                        <td class="text-start w-50">${firstName}</td>
                    </tr>
                    <tr>
                    <th class="text-start  w-50" scope="row">Apellido:</th>
                    <td class="text-start w-50">${lastName}</td>
                    </tr>
                    <tr>
                        <th class="text-start w-50" scope="row">Fecha de Nacimiento:</th>
                        <td class="text-start w-50">${formattedDate}</td>
                    </tr>
                    <tr>
                        <th class="text-start w-50" scope="row">Nacionalidad:</th>
                        <td class="text-start w-50">${nationality}</td>
                    </tr>
                    <tr>
                    <th class="text-start w-50" scope="row">Lugar de Nacimiento:</th>
                    <td class="text-start w-50">${placeOfBirth}</td>
                    </tr>
                    <tr>
                    <th class="text-start w-50" scope="row">Estado Civil:</th>
                    <td class="text-start w-50">${maritalStatus}</td>
                    </tr>
                    <tr>
                        <th class="text-start w-50" scope="row">Email:</th>
                        <td class="text-start w-50">${email}</td>
                    </tr>
                    <tr>
                    <th class="text-start w-50" scope="row">Teléfono:</th>
                    <td class="text-start w-50">${phone}</td>
                   </tr>
                    <tr>
                        <th class="text-start w-50" scope="row">Dirección:</th>
                        <td class="text-start w-50">${address}</td>
                    </tr>
                    <tr>
                    <th class="text-start w-50" scope="row">Provincia:</th>
                    <td class="text-start w-50">${province}</td>
                    </tr>
                    <tr>
                        <th class="text-start w-50" scope="row">Localidad:</th>
                        <td class="text-start w-50">${locality}</td>
                    </tr>
                    <tr>
                        <th class="text-start w-50" scope="row">Código Postal:</th>
                        <td class="text-start w-50">${postalCode}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    `;

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn m-4 btn-lg  btn-success',
            cancelButton: 'btn m-4 btn-lg  btn-primary'
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        width: '50%',
        title: '¡Excelente! Por favor, verifica tus datos antes de registrarlos.',
        html: modalContent,
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Modificar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            setTimeout(() => {
            Swal.fire({
                title: '¡Excelente!',
                text: '¡Tus datos han sido registrados con éxito! Pronto recibirás un enlace de pago en tu correo electrónico.',
                icon: 'success',
                timer: 2500
            });
              cleanForm();
            },1500);


        }

    });
}

function cleanForm() {
    document.getElementById('userDataForm').classList.remove('d-none');
    document.getElementById('addressForm').classList.add('d-none');
    clearLocalStorage();
    cleanformuser();
}


// Escuchar el evento click del formulario Enviar datos
document.getElementById('sendData').addEventListener('click', function (event) {
    event.preventDefault();
    if (validateForm()) {
        showDataInModal();
    }

});

// Escuchar el evento click del formulario Volver a resumen 
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('backButton').addEventListener('click', () => {
        document.getElementById('addressForm').classList.add('d-none');
        document.getElementById('showSummary').classList.remove('d-none');
        showPolicyDetails();
        showUserData();
        showDetailCoverage();
    });
});
