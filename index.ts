// En esta práctica debéis crear una interfaz con el nombre "UserData" en el archivo "user-data.ts". En esta interfaz, debéis añadir las propiedades "name", "age" y "phone" con los tipos cadena de texto, número y número respectivamente. Tenéis que exportar esta interfaz.
// En el documento "index.ts" debéis importar la interfaz que habéis creado en el punto anterior. Cread una variable llamada "user" que sea del tipo de la interfaz que habéis importado.
// Luego, debéis crear una función llamada "getData" que reciba un tipo genérico, un parámetro del tipo genérico y que saque por consola ese dato.
// Para terminar, asignad un objeto literal (sin clase) a la variable "user" (con los datos que queráis pero que no dé erroes de tipo) y luego realizad dos llamadas a "getData". La primera llamada debe recibir por parámetros el valor de la propiedad "name" del usuario y la segunda el valor de "phone".
// OPCIONAL: Dentro de "getData" añadid un condicional con una guarda para diferenciar cuando reciba un tipo "number" y sacar por consola mensajes distintos para las dos llamadas anteriormente mencionadas.
// Ánimo que ya lo tenéis! 

//Importamos la interfaz dandole la ruta
import {UserData} from "./user-data";

//Creamos la variable donde almacenaremos los datos.
let user : UserData;

//Realizamos la creacion de la funcion generica que recibira dos tipos de datos, una de tipo numerica y la otra de tipo string.
function getData <T> (arg: T): void{
  
  //Condicional para el salvaguarda donde nos dara los dos mensajes. el primero nos sacara el numerod e telefono y el segundo nos dara el nombre.
  if (isNumber (arg)){
    console.log("Mensaje1= Phone: " + arg)

  }else{
    console.log("Mensaje2= Name: " + arg)
  }
}

// Construimos el objeto, le damos el nombre, la edad y el telefono
user = {
  name: "Juancho",
  age: 22,
  phone: 123412340
};

//Variable que almacenara el nombre del objeto
let name = getData <String> (user.name);

//Varible que almacenara el numero de telefono del objeto.
let phone = getData <number> (user.phone);

//Funcion salvaguarda que comprueba si es un numero de tipo booleana 
function isNumber<T>(arg: T): boolean {
  
  //Nos devuelve el resultado de la igualacion de si es o no un numero.
  return typeof arg === "number";
}