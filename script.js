const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito'); //si uso getelementbyclssname no es necesario usar el punto para llamar la clase
const pid = document.getElementById('pid'); //si uso getelementbyid noes necesario usar el numeral para llamar la clase
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerHTML = 'algún texto'; // este comprende el html y lo interpreta
// h1.innerText = 'algun <br> texto'; // este cambia todo a texto sin importar el html
//h1.getAttribute('pantalla'); //forma normal de modificar un atributo, aqui imprimió "verde" que es el atributo
//h1.setAttribute('class', 'rojo'); // de esta manera se modificó el atributo de la clase el cual era "verde" y paso a ser "rojo"

h1.classList.add('rojo'); // de esta manera podemos agregar mas atributos a las clases ahora imprime verde y rojo en la misma clase del h1
h1.classList.remove('verde'); // de esta manera se puede eliminar un atributo de una clase, aqui teniamos rojo y verde, ahora solo quedo el rojo.
//h1.classList.toggle('verde'); // para poner y quitar la clase o el atributo varias veces
//h1.classList.contains('verde'); //es como un condicional, nos devuelve un true o false dependiendo de si tiene o no la clase que estamos buscando

input.value = "456" ; // cambiar el valor inicial de un input apenas se cargue la pagina.

const img = document.createElement('img'); //para crear elementos html desde js, aqui se creo una imagen img para simular crear una imagen, se debe crear una variable y alojar ahi todo
img.setAttribute('src', 'urlpegadaaquideunaimagen'); // de esta manera se crea la imagen en html

pid.innerHTML = ""; // de esta manera elimino un contenido y con la linea de abajo inserto lo que quiero en el espacio que borre en esta linea

pid.append(img); //aqui se inserta la imagen dentro de un contenedor en html que ya existía y se le dice que inserte la imagen
