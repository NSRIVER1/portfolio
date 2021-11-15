const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});


const typed = new Typed('.typed', {
    strings: [
    '<i class="TyperT">Web Designer</i>', 
    '<i class="TyperT">Front-end Developer</i>'
   ],
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll =function(){
    let progressHeight = (window.pageYOffset / totalHeight)* 100;
    progress.style.height = progressHeight + "%";
}
