
//************Selector de Nacionalidad */

async function showCountries() {
    const select = document.querySelector("#inputNationality");
    const URL = "https://restcountries.com/v3.1/all";

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Error al obtener los datos");
        }

        const data = await response.json();

        const latinAmericanCountries = data.filter((country) => {
            // Lista de códigos alfa-2 de países latinoamericanos
            const latinAmericanCodes = [
                "ARG", "BOL", "BRA", "CHL", "COL", "CRI", "CUB", "DOM", "ECU", "SLV",
                "GTM", "HTI", "HND", "MEX", "NIC", "PAN", "PRY", "PER", "URY", "VEN"
            ];
            return latinAmericanCodes.includes(country.cca3);
        });

        // Ordenar países alfabéticamente por nombre común
        latinAmericanCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));

        latinAmericanCountries.forEach((country) => {
            const option = document.createElement("option");
            option.value = country.cca3; // Código de país alfa-3
            option.textContent = country.name.common;
            select.appendChild(option);
        });
    } catch (error) {
        Toastify({
            text: ` ${error}`,
            close: true,
            className: 'toast-danger',
            position: "center",
            gravity: "bottom",
            duration: 1000
        }).showToast();
    }
}

//************Estado Civil********************************************************************/

const selectMaritalStatus = document.querySelector("#inputMaritalStatus");

// Función que devuelve una Promise para obtener los estados civiles
function getMaritalStatuses() {
    return new Promise((resolve, reject) => {
        const maritalStatuses = [
            { value: "", label: "Selecciona Estado Civil..." },
            { value: "single", label: "Soltero/a" },
            { value: "married", label: "Casado/a" },
            { value: "divorced", label: "Divorciado/a" },
            { value: "widowed", label: "Viudo/a" },
            { value: "separated", label: "Separado/a" },
            { value: "cohabiting", label: "En convivencia" }
        ];
        setTimeout(() => {
            if (maritalStatuses.length > 0) {
                resolve(maritalStatuses);
                
            } else {
                reject("No se encontraron estados civiles.");
            }
        }, 500);
    });
}

//funcion para selecionar estado civil
async function populateMaritalStatusSelect() {

    try {
        const statuses = await getMaritalStatuses();
      // Limpiar las opciones existentes
        selectMaritalStatus.innerHTML = "";
        statuses.forEach((status) => {
            const option = document.createElement("option");
            option.value = status.value;
            option.textContent = status.label;
            selectMaritalStatus.appendChild(option);
        });
    } catch (error) {
        if (!statuses.ok) {
            throw new Error("Error al obtener los datos");
        }
        Toastify({
            text: ` ${error}`,
            close: true,
            className: 'toast-danger',
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 1000
        }).showToast();
    }
}

/***SElector Proviencias */
const selectProvinces = document.querySelector("#inputProvinces");
const selectLocalities = document.querySelector("#inputLocalities");
const URL_PROVINCES = "https://apis.datos.gob.ar/georef/api/provincias";
const URL_LOCALITIES_BASE = "https://apis.datos.gob.ar/georef/api/localidades?provincia=";

// Función asíncrona para obtener y mostrar las provincias
async function showProvinces() {
    try {
        const response = await fetch(URL_PROVINCES);
        if (!response.ok) {
            throw new Error("Error al obtener los datos de provincias");
        }

        const data = await response.json();
        const provinces = data.provincias;

        // Ordenar provincias alfabéticamente por nombre
        provinces.sort((a, b) => a.nombre.localeCompare(b.nombre));

        provinces.forEach((province) => {
            const option = document.createElement("option");
            option.value = province.id; // ID de la provincia
            option.textContent = province.nombre;
            selectProvinces.appendChild(option);
        });
    } catch (error) {
        Toastify({
            text: ` ${error}`,
            close: true,
            className: 'toast-danger',
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 1000
        }).showToast();
    }
}

// Función asíncrona para obtener y mostrar las localidades según la provincia seleccionada
async function showLocalities(provinceId) {
    try {
        const response = await fetch(`${URL_LOCALITIES_BASE}${provinceId}`);
        if (!response.ok) {
            throw new Error("Error al obtener los datos de localidades");
        }

        const data = await response.json();
        const localities = data.localidades;

        // Limpiar el select de localidades antes de agregar nuevas opciones
        selectLocalities.innerHTML = '<option value="" disabled selected>Seleccione una localidad</option>';

        // Ordenar localidades alfabéticamente por nombre
        localities.sort((a, b) => a.nombre.localeCompare(b.nombre));

        localities.forEach((locality) => {
            const option = document.createElement("option");
            option.value = locality.id; // ID de la localidad
            option.textContent = locality.nombre;
            selectLocalities.appendChild(option);
        });
    } catch (error) {
        Toastify({
            text: ` ${error}`,
            close: true,
            className: 'toast-danger',
            position: "center",
            gravity: "bottom", // `top` or `bottom`
            duration: 1000
        }).showToast();
    }
}

// Event listener para cambiar las localidades según la provincia seleccionada
selectProvinces.addEventListener('change', (event) => {
    const provinceId = event.target.value;
    showLocalities(provinceId);
});






