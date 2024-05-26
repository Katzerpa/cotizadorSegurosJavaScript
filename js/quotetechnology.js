
//=======================================================================
//Selector de plan y cotizar
//=======================================================================

// Recuperar el botón de cotizar
let button = document.getElementById('btnQuote');

// Función para guardar detalle de la poliza
function savePolicyDetails(selectValue) {
    let policy;
    switch (selectValue) {
        case "1":
            policy = new BasicPolicy(PLAN_BASIC, PLAN_BASIC_CAPITAL);
            break;
        case "2":
            policy = new StandartPolicy(PLAN_STANDART, PLAN_STANDART_CAPITAL);
            break;
        case "3":
            policy = new PremiumPolicy(PLAN_PREMIUM, PLAN_PREMIUM_CAPITAL);
            break;
    }

    policy.calculateMonthlyCoverageAmounts();

    const policyDetails = {
        policyType: policy.policyType,
        amountNcapital: policy.amountNcapital,
        coverage_01: policy.coverage_01,
        coverage_02: policy.coverage_02,
        coverage_03: policy.coverage_03,
        totalAmount: policy.totalAmount,
        totalAmountMonth: policy.totalAmountMonth
    };
    saveDetailsPolicy(policyDetails);
}

// Escuchar el evento click del botón de cotizar

button.addEventListener('click', function () {
    document.getElementById('selectPlanForm').classList.add('d-none');
    document.getElementById('showSummary').classList.remove('d-none');
    const policyDetails = getDetailsPolicy();
    if (policyDetails) {
        saveDetailsPolicy(policyDetails);
        setTimeout(() => {
            Toastify({
                text: 'Se enviaron datos de cotización correctamente!',
                close: true,
                className: 'toast-success',
                position: "center",
                gravity: "bottom",
                stopOnFocus: true,
                duration: 1000
            }).showToast();
        }, 800);
    } else {
        Toastify({
            text: 'No se encontraron detalles de póliza para guardar en el localStorage! \n Intenta nuevamente',
            close: true,
            className: 'toast-danger',
            position: "center",
            gravity: "bottom",
            duration: 2000
        }).showToast();
    }
    showPolicyDetails();
    showUserData();
    showDetailCoverage();
});

// Función para mostrar los detalles de la cobertura en la cotización
function showPolicyDetails() {

    const policyDetails = getDetailsPolicy();

    if (policyDetails) {
        const policyType = policyDetails.policyType;
        const amountNcapital = policyDetails.amountNcapital.toFixed(2);
        const totalAmountMonth = policyDetails.totalAmountMonth.toFixed(2);

        document.getElementById('card-detail').innerHTML = `
            <p>Plan: ${policyType}</p>
            <p>Suma Asegurada: ${amountNcapital}</p>
            <p>Monto Mensual: ${totalAmountMonth}</p>
        `;
    } else {
        if (policyType != null) {
            const policyType = policyDetails.policyType || 'Tipo de póliza no definido';
        }
        const amountNcapital = policyDetails.amountNcapital ? policyDetails.amountNcapital.toFixed(2) : 'Cantidad total no definida';
        const totalAmountMonth = policyDetails.totalAmountMonth ? policyDetails.totalAmountMonth.toFixed(2) : 'Monto mensual no definido';
        document.getElementById('card-detail').innerHTML = `
        <p>Plan: ${policyType}</p>
        <p>Suma Asegurada: ${amountNcapital}</p>
        <p>Monto Mensual: ${totalAmountMonth}</p>
    `;
    }
}

function showDetailCoverage() {

    const policyDetails = getDetailsPolicy();

    if (policyDetails) {
        let coverages = [
            { name: "Robo Celular", amount: policyDetails.coverage_01 },
            { name: "Reparación Celular", amount: policyDetails.coverage_02 },
            { name: "Reposición de Celular", amount: policyDetails.coverage_03 }
        ];

        let filteredCoverages = coverages.filter(coverage => coverage.amount > 0);

        let tableHTML = `
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Cobertura</th>
                        <th scope="col">Monto</th>
                    </tr>
                </thead>
                <tbody>
    `;

        filteredCoverages.forEach(coverage => {
            tableHTML += `
            <tr>
                <td>${coverage.name}</td>
                <td>${coverage.amount.toFixed(2)}</td>
            </tr>
        `;
        });

        tableHTML += `
                    <tr>
                        <th scope="row">Monto total anual:</th>
                        <td >${policyDetails.totalAmount.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <th scope="row">Monto premio:</th>
                        <td>${(policyDetails.totalAmountMonth).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    `;
        let cardHTML = `
<div class="card-footer text-white justify-content-center bg-secondary">
<center><p> Fecha de la cotizacion  ${SYSTEM_DATE.toLocaleDateString()} </p><center></div>
    `;
        document.getElementById('coverageTable').innerHTML = tableHTML;
        document.getElementById('dateDay').innerHTML = cardHTML;
    } else {
        search_message();
        if (m = 5) {
            Toastify({
                text: messages[5],
                close: true,
                className: 'toast-danger',
                position: "center",
                gravity: "bottom",
                duration: 1000
            }).showToast();

        }

    }

}

/****evento regresar a seleccion plan  */

document.getElementById('sendcotizar').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('selectPlanForm').classList.remove('d-none');
    document.getElementById('showSummary').classList.add('d-none');
    enablePlanSelection();
});

/****evento contratar plan  */

document.getElementById('fillData').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('showSummary').classList.add('d-none');
    document.getElementById('addressForm').classList.remove('d-none');
    showCountries();
    populateMaritalStatusSelect();
    showProvinces();
    showUserDataForm();
    loadFromLocalStorage();
});