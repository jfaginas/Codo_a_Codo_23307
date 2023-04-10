//------------------------------------------------------------------------
// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:

const nuevaString = "Lo que quieras";

console.log(nuevaString);
// DONE
//------------------------------------------------------------------------

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = Math.PI;

console.log(nuevoNum)
// DONE
//------------------------------------------------------------------------

// Crea una variable booleana:
const nuevoBool = true;

console.log(nuevoBool)

// DONE
//------------------------------------------------------------------------

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - null === 5;
console.log(nuevaResta)

// DONE
//------------------------------------------------------------------------

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = null * 4 === 40 ;

console.log(nuevaMultiplicacion)

// DONE
//------------------------------------------------------------------------

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === null;

console.log(nuevoModulo)

// DONE
//------------------------------------------------------------------------

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return console.log(str);

}

devolverString("Pepe")

// DONE
//------------------------------------------------------------------------

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  return(x+y);
}

console.log(suma(22,45))

// DONE
//------------------------------------------------------------------------

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  return(x-y);
}
console.log(resta(22,45))

// DONE
//------------------------------------------------------------------------

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  return(x*y);
}

console.log(multiplica(22,45))

// DONE
//------------------------------------------------------------------------

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return(x/y)
}

console.log(divide(22,45))

// DONE
//------------------------------------------------------------------------

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
  if(x===y){
    return(true);
  } else {
    return(false);
  }
  
}

console.log(sonIguales("Pepe","Pepe"))

// DONE
//------------------------------------------------------------------------

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:

  return str1.length == str2.length;

}


console.log(tienenMismaLongitud("pepe","ciel"))

// DONE
//------------------------------------------------------------------------

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return (num<90);

}


console.log(menosQueNoventa(89));

// DONE
//------------------------------------------------------------------------

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return (num>50);
}

console.log(mayorQueCincuenta(89));

// DONE
//------------------------------------------------------------------------

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return (x%y);
}
console.log(obtenerResto(4,2));

// DONE
//------------------------------------------------------------------------

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return !Boolean(num%2);
  
}

console.log(esPar(4));

// DONE
//------------------------------------------------------------------------

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return Boolean(num%2);
  
}

console.log(esImpar(1));

// DONE
//------------------------------------------------------------------------

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num,2);

}

console.log(elevarAlCuadrado(7));

// DONE
//------------------------------------------------------------------------

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num,3);

}

console.log(elevarAlCubo(7));

// DONE
//------------------------------------------------------------------------
function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num,exponent);

}

console.log (elevar(7,2))


// DONE
//------------------------------------------------------------------------

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  //return (Math.round(num));
  return (Math.round(num));
}

console.log (redondearNumero(Math.PI));


// DONE
//------------------------------------------------------------------------

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return (Math.ceil(num));
}

console.log(redondearHaciaArriba(Math.PI));

// DONE
//------------------------------------------------------------------------

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return(Math.random());
}


console.log(numeroRandom())

// DONE
//------------------------------------------------------------------------

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero === 0){
    return(false);
  } else if (numero > 0) {
    return("Es positivo");
  } else {
    return("Es negativo");
  }

}

console.log(esPositivo(-32));


// DONE
//------------------------------------------------------------------------

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
 return(str+"!");
}

console.log(agregarSimboloExclamacion("Hello World"))


// DONE
//------------------------------------------------------------------------

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  return (nombre + " " + apellido);
}

console.log(combinarNombres("Jose","Faginas"))

// DONE
//------------------------------------------------------------------------
function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return ("Hola" + " " + nombre + "!")
}

console.log(obtenerSaludo("Pepe"))

// DONE
//------------------------------------------------------------------------
function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
  return(alto*ancho);
}

console.log(obtenerAreaRectangulo (12,5))

// DONE
//------------------------------------------------------------------------
function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return(lado*4);
}

console.log(retornarPerimetro(6))

// DONE
//------------------------------------------------------------------------
function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return(base*altura/2);

}

console.log(areaDelTriangulo(2,3))

// DONE
//------------------------------------------------------------------------
function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return(euro/0.9)
}

console.log(deEuroAdolar(1));

// DONE
//------------------------------------------------------------------------

function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
  switch(letra){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return ("Es vocal");
    default:
      return ("Dato incorrecto");  
  }
}
console.log(esVocal("h"));


// DONE
//------------------------------------------------------------------------

// Ejercicio extra
 
// RECOMENDAMOS PELICULA - SERIE O LIBRO
// UTILIZAMOS SWITCH


function recomendacionArte(tipo){

  switch(tipo){
    case "Libro":
      return ("Los besos de Manuel Vila");
    case "Pelicula":
      return ("Forrest Gump");
    case "Serie":
      return ("Dexter");
    default:
      return("De eso no sé nada")
  }

}

console.log(recomendacionArte("Libro"))
console.log(recomendacionArte("Pelicula"))
console.log(recomendacionArte("Serie"))
console.log(recomendacionArte("Pintura"))

// DONE
//------------------------------------------------------------------------