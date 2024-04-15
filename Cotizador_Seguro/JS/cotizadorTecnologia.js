
/**
 * cotizador de Seguro Tecnologia .. solo mayores de Edad
 * katzerpa
 */


//Declaracion de Funciones

//=============================================================
//Datos del Usuario 
//=============================================================
function setUserData() {
    let firstName = prompt("Ingresa tu nombre");
    let lastName = prompt("ingrese su Apellido");

    // Comprobar si el usuario ha cancelado la entrada de datos

    if (firstName === null || lastName === null) {
        return null; // Si el usuario cancela, devolvemos null
    }

// Validar mayor de Edad
    let i = 0;
  
    do {
        
        let age = Number(prompt("ingrese tu edad"));

        if ( parseInt(age) > 17 ) {
            return { firstName: firstName.toUpperCase(), lastName: lastName.toUpperCase(), age: age };
        }
        i++;

    } while (i < 3); //validar tres intentos para la edad

    alert("Lo siento no podemos ofertar seguros para usted en estos momentos");
    return ; // corta la cotizacion y no avanza
}
//=============================================================
function getUserData() {
    let fullName = setUserData();

    // Verificamos si se proporcionó un nombre y un apellido
    if (fullName !== null) {

        document.write(`<h1>¡Hola, ${fullName.firstName}  ${fullName.lastName} ! Bienvenido </h1> <br>`);

    } else {
        document.write("Has cancelado la entrada de datos.O eres menor de edad , hasta pronto <br>");
    }
}

//=============================================================
// Seleccionar Menu plan
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
// Funcion para calcular cobertura 
//=============================================================
function monthlyCoverageAmounts(planSelect) {//calcular coberturas
    let ncover1 = 0;
    let ncover2 = 0;
    let ncover3 = 0;
    let totalAmount = 0;
    let amountNcapital = 0;
    let itemQuantity = 0;

    switch (planSelect.namePlan) {
        case "Plan Básico":
            amountNcapital = planSelect.ncapital * 1.70 / 12;
            ncover1 = amountNcapital * 1.70 / 12;
            ncover2 = amountNcapital * 1.30 / 12;
            totalAmount = ncover1 + ncover2;
            itemQuantity = 1;
            return { ncover1: ncover1, ncover2: ncover2, totalAmount: totalAmount, itemQuantity: itemQuantity };

        case "Plan Estándar":
            amountNcapital = planSelect.ncapital * 1.80 / 12;
            ncover1 = amountNcapital * 1.70 / 12;
            ncover2 = amountNcapital * 1.30 / 12;
            totalAmount = ncover1 + ncover2;
            itemQuantity = 2;
            return { ncover1: ncover1, ncover2: ncover2, totalAmount: totalAmount, itemQuantity: itemQuantity };

        case "Plan Premium":
            amountNcapital = planSelect.ncapital * 1.90 / 12;
            ncover1 = amountNcapital * 1.60 / 12;
            ncover2 = amountNcapital * 1.50 / 12;
            ncover3 = amountNcapital * 1.80 / 12;
            totalAmount = ncover1 + ncover2 + ncover3;
            itemQuantity = 3;
            return { ncover1: ncover1, ncover2: ncover2, ncover3: ncover3, totalAmount: totalAmount, itemQuantity: itemQuantity };

        default:
            return "Selección inválida";

    }

}

//=============================================================
//Mostrar Data
//=============================================================

//Llamado de funcion  para mostrar nombre del usuario
    getUserData();
// Llamada a la función para  mostrar el plan 
    let planSelect = selectPlan();
    let showCover = monthlyCoverageAmounts(planSelect);
// Mostrar el plan seleccionado
if (planSelect !== "Selección inválida") {
    let montoFormateado = parseFloat(planSelect.ncapital).toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
    document.write(`<h3> Has seleccionado el plan:   ${planSelect.namePlan}</h3><br>` + `<h3>con una suma asegurada:  $${montoFormateado}</h3><br>`);
} else {
    document.write("Selección inválida. Por favor, selecciona un plan válido.");
}
//motrar coberturas 
if (showCover !== "Selección inválida") {
    for (i = 1; i <= showCover.itemQuantity; i++) {
        if (i === 1) {
            document.write(`Robo Celular ------------------------ Monto: ${showCover.ncover1.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' })} <br>`);
        }

        if (i === 2) {
            document.write(`Reparacion Celular ----------------- Monto: ${showCover.ncover2.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' })} <br>`);
        }
        
        if (i === 3) {
            document.write(`Reparacion Celular ----------------- Monto: ${showCover.ncover3.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' })} <br>`);
        }
    }
    document.write("<br>");
    document.write("<br>");
    document.write(`<strong> monto total anual:</strong> ${showCover.totalAmount.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' })} <br> 
     <strong> monto premio: </strong> ${(showCover.totalAmount / 12).toLocaleString('es-ES', { style: 'currency', currency: 'ARS' })}  <br>`);
} else {
    document.write("Selección inválida. Por favor, selecciona un plan válido.");
}

