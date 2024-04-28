/**
 * cotizador de Seguro Tecnologia
 * v2-refactor con clases y objetos
 * katzerpa
 */

//=============================================================
//Clases
//=============================================================

class UserData {
    constructor(firstName, lastName, age) {
        this.firstName = firstName.toUpperCase();
        this.lastName = lastName.toUpperCase();
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
            document.write(`<h1>¡Hola, ${this.firstName}  ${this.lastName} ! Bienvenido </h1> <br>`);
        } else {
            document.write("Has cancelado la entrada de datos.O eres menor de edad , hasta pronto <br>");
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
            ncapital = 750000;
            namePlan = "Plan Básico";
            return { namePlan: namePlan, ncapital: ncapital };
        case "2":
            ncapital = 850000;
            namePlan = "Plan Estándar";
            return { namePlan: namePlan, ncapital: ncapital };
        case "3":
            ncapital = 950000;
            namePlan = "Plan Premium";
            return { namePlan: namePlan, ncapital: ncapital };
        default:
            return "Selección inválida";
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
        case "Plan Básico":
            alert("Plan Básico");
            policyBasic = new BasicPolicy("Plan Basico", planSelect.ncapital);
            policyBasic.calculateMonthlyCoverageAmounts();
            return { itemQuantity: 2, currencyPolicy: policyBasic };

        case "Plan Estándar":
            alert("Plan Estándar");
            policyStandart = new StandartPolicy("Plan Estándar", planSelect.ncapital);
            policyStandart.calculateMonthlyCoverageAmounts();
            return { itemQuantity: 2, currencyPolicy: policyStandart };

        case "Plan Premium":
            alert("Plan Premium");
            policyPremium = new PremiumPolicy("Plan Premium", planSelect.ncapital);
            policyPremium.calculateMonthlyCoverageAmounts();
            return { itemQuantity: 3, currencyPolicy: policyPremium };

        default:
            return "Selección inválida";

    }

}
//Ejecucion - objetos
//****Solicita Datos de Entrada***/
let firstName = prompt("Ingresa tu nombre");
let lastName = prompt("Ingrese su Apellido");
let inputAge = parseInt(prompt("Ingrese su edad"));

user = new UserData(firstName, lastName, inputAge);

//=============================================================
// Seleccionar Menu plan
//=============================================================

let x = 0;

do {
    if (user.validAge()) {
        let planSelect = selectPlan();
        let showCover = monthlyCoverageAmounts(planSelect);
       
        // Mostrar el plan seleccionado
        if (planSelect !== "Selección inválida") {
            let montoFormateado = parseFloat(planSelect.ncapital).toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
            document.write(`<h3> Has seleccionado el plan:   ${planSelect.namePlan}</h3><br>` + `<h3>con una suma asegurada:  $${montoFormateado}</h3><br>`);
        } else {
            document.write("Selección inválida. Por favor, selecciona un plan válido.");
        }
         //Llamado de funcion  para mostrar nombre del usuario
         user.getUserData();
        // Llamada a la función para  mostrar el plan y coberturas
        if (showCover !== "Selección inválida") {
            alert(showCover.currencyPolicy.policyType);
            for (i = 1; i <= showCover.itemQuantity; i++) {

                if (i === 1) {
                    document.write(`Robo Celular ------------------------ Monto: ${showCover.currencyPolicy.coverage_01.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' })} <br>`);
                }

                if (i === 2) {
                    document.write(`Reparacion Celular ----------------- Monto: ${showCover.currencyPolicy.coverage_02.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' })} <br>`);
                }

                if (i === 3) {
                    document.write(`Reparacion Celular ----------------- Monto: ${showCover.currencyPolicy.coverage_03.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' })} <br>`);
                }
            }
            document.write("<br>");
            document.write("<br>");
            document.write(`<strong> monto total anual:</strong> ${showCover.currencyPolicy.totalAmount.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' })} <br> 
     <strong> monto premio: </strong> ${(showCover.currencyPolicy.totalAmount / 12).toLocaleString('es-ES', { style: 'currency', currency: 'ARS' })}  <br>`);
        } else {
            document.write("Selección inválida. Por favor, selecciona un plan válido.");
        }

        break;
        i = 100;
    }
    inputAge = parseInt(prompt("Ingrese su edad valida"));
    this.age = inputAge;
    x++;
} while (x < 3);

if (x > 2) {
    alert("Lo siento, no podemos ofrecer seguros para usted en estos momentos.");
}

