/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. 
No habrá discriminación entre las vocales en mayúscula y en minúscula. 
Las vocales acentuadas no se contarán. 
El valor obtenido se retornará al terminar la función. 
Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {
  if(typeof texto != 'string')
    return -1
  var cadena = texto.trim().toLowerCase().split('')//1ero tengo que sacarle los espacios y blancos tim()
  //HOlacomoEstá
  //2do puedo usar toLower() para trabajar solo con minusculas
  //Holacomoestá
  //Lo paso a array. //'h',o,l,'a',c,'o',m,'o','e',s,'t','á'
  //Uso un mapa. Clave-> Valor Vocal->cantOcurrencias
  
  var mapa = new Object();
  var mapa = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0
  };
  for(var i=0;i<cadena.length;i++){
    if(cadena[i]=='a'||cadena[i]=='e'||cadena[i]=='i'||cadena[i]=='o'||cadena[i]=='u'){
      valor=mapa[cadena[i]];
      valor++ //HOlacomoEstá
      mapa[cadena[i]]=valor
    }
  }      
  //4to Recorro el mapa para sumar las ocurrencias
  var cantVocales=0
  for(var key in mapa) {
    var value = mapa[key];// do something with "key" and "value" variables
    //console.log(key,": ",value)
    cantVocales+=value
  }   
  //devuelvo esa cantidad de vocales totales
  return cantVocales
}
/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return "https://github.com/rubennnn/tp1"
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {
  return
}

module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
