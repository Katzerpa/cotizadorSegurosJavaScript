
//=======================================================================
// Gestor de radios bottum
//=======================================================================

const radioButtons = document.querySelectorAll('input[type="radio"]');
const quoteButton = document.getElementById('btnQuote');

// Función para habilitar el formulario de selección de plan

function enablePlanSelection() {
  
    const basicPolicy = new BasicPolicy(PLAN_BASIC, PLAN_BASIC_CAPITAL);
    const standardPolicy = new StandartPolicy(PLAN_STANDART, PLAN_STANDART_CAPITAL);
    const premiumPolicy = new PremiumPolicy(PLAN_PREMIUM, PLAN_PREMIUM_CAPITAL);

    basicPolicy.calculateMonthlyCoverageAmounts();
    standardPolicy.calculateMonthlyCoverageAmounts();
    premiumPolicy.calculateMonthlyCoverageAmounts();

    document.getElementById('card-body01').innerHTML = `
        <center><h5 class="card-title">Cobertura de hasta $${basicPolicy.amountNcapital.toFixed(2)}</h5></center>
        <center><p class="card-text">por solo $${basicPolicy.totalAmountMonth.toFixed(2)} mensuales (*).</p></center>
    `;
    document.getElementById('card-body02').innerHTML = `
        <center><h5 class="card-title">Cobertura de hasta $${standardPolicy.amountNcapital.toFixed(2)} </h5></center>
        <center><p class="card-text">por solo $${standardPolicy.totalAmountMonth.toFixed(2)} mensuales (*).</p></center>
    `;
    document.getElementById('card-body03').innerHTML = `
        <center><h5 class="card-title">Cobertura de hasta $${premiumPolicy.amountNcapital.toFixed(2)}</h5></center>
        <center> <p class="card-text">por solo $${premiumPolicy.totalAmountMonth.toFixed(2)} mensuales (*).</p></center>
    `;

    document.getElementById('selectPlanForm').classList.remove('d-none');
}

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function () {
        const isSelected = Array.from(radioButtons).some(radio => radio.checked);
        const selectValue = radioButton.value;
        if (isSelected) {
            quoteButton.classList.remove('disabled');
            savePolicyDetails(selectValue);

        } else {
            quoteButton.classList.add('disabled');
        }
        if (isSelected) {
            enablePlanSelection();
        }
    });
});

function initializeRadioButton() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radioButton => {
        radioButton.checked = false; 
    });
}