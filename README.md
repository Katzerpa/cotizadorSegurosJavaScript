Proyecto: Simulador "Cotizador de Seguro Tecnología"
Para poder realizar una cotización, la persona debe ser mayor de edad.
Al ingresar los datos del solicitante, se mostrarán tres planes disponibles, de los cuales deberá seleccionar uno.
Una vez seleccionado el plan, se presentará la suma asegurada, las coberturas detalladas con sus respectivas sumas aseguradas y el monto de la prima.
Finalmente, el usuario podrá contratar el seguro llenando un formulario con sus datos, el cual será enviado a la entidad aseguradora.

Primera  Entrega :
Para esta primera entrega se consideraron la puntos de la clase 1, 2 , 3 y 4 
Clase 1 Conceptos generales: Sintaxis y variables: declaracion  de variables y apliacacion de prompt, tipos de datos y como hacer se asignación al solicitar datos a traves del prompt.
Clase 2 Control de flujos:  operadores lógicos , estructura IF, IF-ELSE.
Clase 3 Ciclos e iteraciones: Tipo de Bucle por contadores (For); Tipo de Bucle por condicionales (While, Do-While y Switch).
Clase 4 Funciones: conceptualizacion de llamados de funciones.

Segunda Entrega :
Para esta entrega se refactoriza el código creando : Clase, Contructores, Objetos, funciones , array, variables de tipo constantes y metodos que permitira ver mejor el flujo del proceso .
se cambia el campo de Edad por campo fecha la cual sera calculada para determinar la edad .
se crearon las Clases y constructores: 
    1-UserData (para creara a las personas), con sus repectivos constructores 
    2-Policy (para crear el capital a cada poliza) , con sus repectivos constructores
    3-BasicPolicy extends Policy (donde se determinara los porcentajes para cada cobertura) con sus repectivos constructores(herencia de policy)
    4-StandartPolicy extends Policy (donde se determinara los porcentajes para cada cobertura)con sus repectivos constructores(herencia de policy)
    5-PremiumPolicy extends Policy (donde se determinara los porcentajes para cada cobertura)con sus repectivos constructores(herencia de policy)
Se crea función nueva de cálcular edad , buscar mensaje y refactorizaron las funciones existentes:
   1)selectPlan ( se le asignan constantes , que permitira hacer  modificaciones en un solo punto sin tocar la funcion);
   2)monthlyCoverageAmounts (se le asignan constantes , que permitira hacer  modificaciones en un solo punto sin tocar la funcion, se instancian las clases de la poliza para calcularar los planes)
   3)calculateAge ( se cálcula la edad con la funcion date(); aplicando el metodo Math.floor)
   4)search_message buscara los mensaje por medio de su numero de posicion .
Se crea un sistema de control de mensaje por medio de un array que permitirá modificar los mensaje en una sola ubicacion 
Se crea array para la impresión  de cobertura:
   1)Array coverages : (se asigna los nombres de la coberturas con sus respectivos montos, se agrega las funciones : Filter para ubicar la coberturas mayores que ceros y forEach para buscar las coberturas a imprimir)
Se aplica innerHTML para imprimir en el HTML el  mensaje de  bienvenida de la persona que esta cotizando 
Se se agrega en el HTML un Hinperviculo que permitirar volver a cotizar .
 Clase que se tomaron en cuenta para la entrega : 
  Clase 5 : Objetos donde se aplicaron Funcion contructora  y metodos de objetos y funciones : creando (Clases, Contructor y objetos).
  Clase 6 : Array donde se  creo: un array vacios para asignar los mensajes con una funcion buscador de mensaje con la propiedad length y un array para las impresiones de cobertura
  Clase 7 : Funciones de Orden Superior I se aplicaron las funsiones Filter y ForEach para buscar las impresiones de coberturas  
  Clase 8 : Funciones de Orden Superior II se aplicaron las funciones date(); y math.floor para el calculo de la edad 
  Clase 9 : Modelo objetos del documento : interatuando la conexion con impresion al HTML por primera vez se aplico innerHTML para mostrar el mensaje de bienvenida al usuario. 

Tercera Entrega : 
Para esta entrega se procede a interatuar con eventos y a realizar guardados con el localstorage diseñando plantilla en HTML con bootstrap, generando particiones de archivos en JS.
 Clase que se tomaron en cuenta para la entrega : 
  Clase 9 : Modelo objetos del documento  interatuando la conexion con impresion al HTML ,Creando la estructura de HTML , creando webelement por medio de cual se realizaran las entradas y salidas de Datos.
  CLase 10 : Eventos definicion de interaciones del usuario por medio de acciones como click sobre los botones como guadar, mostrar mensaje de error y mostrar. 
  Clase 11:  Storage & JSON forma de almacenar datos en el navegador sin necesidad de tener un servidor de base de datos como guardar datos de la cotizacion  y mostrar por le interfaz datos guardados.
 
Entrega Final :
Con la finalidad de cumplir con todos los temas vistos en el curso, se implementan nuevas funcionalidades: Contratar, Volver y Salir.
Volver: Permitirá al usuario regresar al formulario anterior, posibilitando realizar cambios en su cotización a calcular.
Salir: Permitirá al usuario cancelar la cotización, limpiando todos los datos ingresados y reseteando los formularios.
Contratar: Permitirá al usuario llenar sus datos personales, completando las selecciones de datos a través de APIs que ayudarán a enviar información normalizada y clara. 

Clase que se tomaron en cuenta para la entrega : 

Clase 14: Librería Toastify: Utilizada para controlar mensajes en la gestión de datos guardados en el localStorage. También se empleó la librería SweetAlert para manejar errores en el llenado del formulario del cliente y para mostrar un modal de confirmación.
Clase 15: Asincronía: Aplicación de la función setTimeout() y el uso de Promise (resolve, reject) para ordenar y temporizar algunas funciones.
Clase 16: Ajax & Fetch: Utilización del método Fetch con async y await para realizar llamadas a las APIs y a los archivos JSON locales.
