// Obtener los elementos de radio
const radioButtons = document.querySelectorAll('input[type="radio"]');
// Obtener el boton de cotizar
const cotizarButton = document.getElementById('bnt-cotizar');

// Función para habilitar el formulario de selección de plan
function enablePlanSelection() {

    const basicPolicy = new BasicPolicy(PLAN_BASIC, PLAN_BASIC_CAPITAL);
    const standardPolicy = new StandartPolicy(PLAN_STANDART, PLAN_STANDART_CAPITAL);
    const premiumPolicy = new PremiumPolicy(PLAN_PREMIUM, PLAN_PREMIUM_CAPITAL);

    // Calcular los montos de cobertura mensual para cada plan
    basicPolicy.calculateMonthlyCoverageAmounts();
    standardPolicy.calculateMonthlyCoverageAmounts();
    premiumPolicy.calculateMonthlyCoverageAmounts();

    // Actualizar el texto de las tarjetas de radio selecto con los montos de cobertura
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

    // Habilitar el formulario de selección de plan
    document.getElementById('selectPlanForm').classList.remove('d-none');
}

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function () {
        // Verificar si al menos un radio está seleccionado
        const isSelected = Array.from(radioButtons).some(radio => radio.checked);
        // Habilitar o deshabilitar el botón de cotizar según la selección
        const selectValue = radioButton.value;
        if (isSelected) {
            cotizarButton.classList.remove('disabled');
            savePolicyDetails(selectValue);

        } else {
            cotizarButton.classList.add('disabled');
        }
        if (isSelected) {
            enablePlanSelection();
        }
    });
});