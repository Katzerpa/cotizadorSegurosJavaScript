/**
 * cotizador de Seguro Tecnologia
 * v2-refactor con clases y objetos
 * katzerpa
 */


//=============================================================
//Constantes
//=============================================================
const PLAN_BASIC = "Plan Básico";
const PLAN_STANDART = "Plan Estándar";
const PLAN_PREMIUM = "Plan Premium";

const PLAN_BASIC_CAPITAL = 750000;
const PLAN_STANDART_CAPITAL = 850000;
const PLAN_PREMIUM_CAPITAL = 950000;

const SYSTEM_DATE = new Date();

//=============================================================
//Mensajes
//=============================================================
let messages= new Array();
messages[0] = "Has cancelado la entrada de datos.O eres menor de edad , hasta pronto <br>";
messages[1] = "Selección inválida";
messages[2] = "Selección inválida. Por favor, selecciona un plan válido."


//=============================================================
//Clases
//=============================================================
class UserData {
    constructor(firstName, lastName, age) {
        this.firstName = firstName.toUpperCase();
        this.lastName =  lastName.toUpperCase();
        this.age = age;
    }
    // valida edad
    validAge() {
        if (this.age > 17) { return true; }
        return false;
    }

    // mostrar Datos usuario
    getUserData() {
        // Verificamos si se proporcionó un nombre y un apellido
        if (this.firstName !== null && this.lastName !== null) {
            const container = document.getElementById("container_greeting");
            container.innerHTML = (`<center><h1>¡Hola, ${this.firstName}  ${this.lastName} ! Bienvenido </h1></center> <br>`);
        } else {
            document.write(messages[0]);
        }
    }
}

//Clase Poliza
class Policy {
    policyType = "";
    capital = 0.00;
    coverage_01 = 0.00;
    coverage_02 = 0.00;
    coverage_03 = 0.00;
    totalAmount = 0.00;
    amountNcapital = 0.00;

    constructor(policyType, capital) {
        this.policyType = policyType;
        this.capital = capital;
    }

}
//Sub-clase poliza basica
class BasicPolicy extends Policy {
    calculateMonthlyCoverageAmounts() {
        this.amountNcapital = this.capital * 1.70 / 12;
        this.coverage_01 = this.amountNcapital * 1.70 / 12;
        this.coverage_02 = this.amountNcapital * 1.30 / 12;
        this.totalAmount = this.coverage_01 + this.coverage_02;
    }
}
//Sub-clase poliza standart
class StandartPolicy extends Policy {
    calculateMonthlyCoverageAmounts() {
        this.amountNcapital = this.capital * 1.80 / 12;
        this.coverage_01 = this.amountNcapital * 1.70 / 12;
        this.coverage_02 = this.amountNcapital * 1.30 / 12;
        this.totalAmount = this.coverage_01 + this.coverage_02;
    }
}
//Sub-clase poliza premium
class PremiumPolicy extends Policy {
    calculateMonthlyCoverageAmounts() {
        this.amountNcapital = this.capital * 1.90 / 12;
        this.coverage_01 = this.amountNcapital * 1.60 / 12;
        this.coverage_02 = this.amountNcapital * 1.50 / 12;
        this.coverage_03 = this.amountNcapital * 1.80 / 12;
        this.totalAmount = this.coverage_01 + this.coverage_02 + this.coverage_03;
    }
}

//=============================================================
// Planes
//=============================================================
function selectPlan() {
    // Mostrar las opciones de plan al usuario
    let options = "Selecciona un plan:\n1. Plan Básico\n2. Plan Estándar\n3. Plan Premium";

    let selectValue = prompt(options);
    let namePlan;
    //=============================================================
    // Validar la selección del usuario y asigna suma segurada
    let ncapital = 0;
    switch (selectValue) {
        case "1":
            ncapital = PLAN_BASIC_CAPITAL;
            namePlan = PLAN_BASIC;
            return { namePlan: namePlan, ncapital: ncapital };
        case "2":
            ncapital = PLAN_STANDART_CAPITAL;
            namePlan = PLAN_STANDART;
            return { namePlan: namePlan, ncapital: ncapital };
        case "3":
            ncapital = PLAN_PREMIUM_CAPITAL;
            namePlan = PLAN_PREMIUM;
            return { namePlan: namePlan, ncapital: ncapital };
        default:
            return messages[1];
    }
}
//=============================================================
// Coberturas 
//=============================================================
function monthlyCoverageAmounts(planSelect) {
    //calcular coberturas
    let itemQuantity = 0;
    let currencyPolicy;

    switch (planSelect.namePlan) {
        case PLAN_BASIC:
            alert("Plan Básico");
            policyBasic = new BasicPolicy(PLAN_BASIC, planSelect.ncapital);
            policyBasic.calculateMonthlyCoverageAmounts();
            return { itemQuantity: 2, currencyPolicy: policyBasic };

        case PLAN_STANDART:
            alert("Plan Estándar");
            policyStandart = new StandartPolicy(PLAN_STANDART, planSelect.ncapital);
            policyStandart.calculateMonthlyCoverageAmounts();
            return { itemQuantity: 2, currencyPolicy: policyStandart };

        case PLAN_PREMIUM:
            alert("Plan Premium");
            policyPremium = new PremiumPolicy(PLAN_PREMIUM, planSelect.ncapital);
            policyPremium.calculateMonthlyCoverageAmounts();
            return { itemQuantity: 3, currencyPolicy: policyPremium };

        default:
            return messages[1];

    }

}
//Ejecucion - objetos
//****Solicita Datos de Entrada***/
let firstName = prompt("Ingresa tu nombre");
let lastName = prompt("Ingrese su Apellido");
let fdateBirthDate = prompt("Ingrese su fecha de nacimiento en formato DD/MM/YYYY");
let inputAge = calculateAge(fdateBirthDate);


function calculateAge(fdateBirthDate) {
// Dividir la fecha de nacimiento en día, mes y año
    let partsDate = fdateBirthDate.split("/");
    let day = parseInt(partsDate[0]);
    let month = parseInt(partsDate[1]) - 1; // Restar 1 al mes porque los meses en JavaScript son 0-indexados
    let year = parseInt(partsDate[2]);
// Crear un objeto Date con la fecha de nacimiento
    let birthDate = new Date(year, month, day);  
// Obtener la fecha actual
    let currentDate = new Date();
// Calcular la diferencia en milisegundos      
let differenceMilliseconds = currentDate - birthDate ;
// Convertir la diferencia de milisegundos a años   
    let inputAge = Math.floor(differenceMilliseconds / (1000 * 60 * 60 * 24 * 365));
 
return inputAge;
}

user = new UserData(firstName, lastName, inputAge);

//=============================================================
// Seleccionar Menu plan
//=============================================================

let x = 0;

do {
    console.log("Edad actual " + user.age);
    if (user.validAge()) {
        let planSelect = selectPlan();
        let showCover = monthlyCoverageAmounts(planSelect);
       
        // Mostrar el plan seleccionado
        if (planSelect !== messages[1]) {
            let montoFormateado = parseFloat(planSelect.ncapital).toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
            document.write(`<center><h3> Fecha de Nacimiento: ${fdateBirthDate}   Edad: ${user.age}</h3></center><br>` + 
            `<center><h3> Has seleccionado el plan:   ${planSelect.namePlan}</h3></center><br>`+
            `<center><h3> con una suma asegurada:  $${montoFormateado}</h3></center><br>`);
        } else {
            document.write(messages[2]);
        }
         //Llamado de funcion  para mostrar nombre del usuario
         user.getUserData();
        // Llamada a la función para  mostrar el plan y coberturas
        if (showCover !== messages[1]) {

//----------------------------------------------

// Agregar las filas con los datos de cobertura 
let coverages = [
    { name: "Robo Celular", amount: showCover.currencyPolicy.coverage_01 },
    { name: "Reparación Celular", amount: showCover.currencyPolicy.coverage_02 },
    { name: "Otra Cobertura", amount: showCover.currencyPolicy.coverage_03 }
];

document.write(`<center><table border=1 style="width:70%">`);
document.write(`<tr>`);
document.write(`<th style="width:70%; text-align:left;"; >Cobertura</th><th style="width:30%; text-align:right;">Monto</th>`);
document.write(`</tr>`);
coverages
    .filter(coverage =>coverage.amount>0)
    .forEach(coverage => {
        document.write(`<tr>`);
        document.write(`<td style="width:70%; text-align:left;">${coverage.name}</td><td style="width:30%; text-align:right;">${coverage.amount.toFixed(2)}</td>`);
        document.write(`</tr>`);
});
document.write(`<tr>`);
document.write(`<th style="width:70%; text-align:left;">Monto total anual:</th><td style="width:30%; text-align:right;"> ${showCover.currencyPolicy.totalAmount.toFixed(2)} </td>`);
document.write(`</tr>`);
document.write(`<tr>`);
document.write(`<th style="width:70%; text-align:left;">Monto premio:</th><td style="width:30%; text-align:right;"> ${(showCover.currencyPolicy.totalAmount / 12).toFixed(2)}</td>`);
document.write(`</tr>`);
document.write(`</table></center>`);
document.write(`<center><p> Fecha de la cotizacion  ${SYSTEM_DATE.toLocaleDateString()} </p><center>`);

//----------------------------------------------

        } else {
            document.write(messages[2]);
        }

        break;
        i = 100;
    }
    fdateBirthDate = prompt("Ingrese su fecha de nacimiento Valida en formato DD/MM/YYYY");
    inputAge = calculateAge(fdateBirthDate);
    user.age = inputAge;
    x++;
} while (x < 3);

if (x > 2) {
    alert("Lo siento, no podemos ofrecer seguros para usted en estos momentos.");
}

