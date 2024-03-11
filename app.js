let fondo = document.querySelector('main');
let boton = document.querySelector('button');
let texto = document.querySelector('p');
let color = [255, 255, 255];

function cambiarColor() {
    // Idea inicial, repite código //
    // color = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
    for (let i = 0; i < color.length; i++) {
        color[i] = Math.floor(Math.random() * 256);
    }

    fondo.style.background = `rgb(${color.toString()})`;
    informarColor();
}

function informarColor() {
    texto.style.display = 'block';
    texto.textContent = `Color generado: rgb(${color.toString()})`
}

boton.addEventListener('click', cambiarColor);

