// Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

const allLinks = document.getElementsByTagName('a');
//console.log(allLinks);

for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', (e) => {
        e.preventDefault();
    });
};

// Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

const allImg = document.getElementsByTagName('img');
for (let i = 0; i < allImg.length; i++) {
    allImg[i].addEventListener('click', (e) => {
        e.target.src = './assets/magic-6.gif';
    });
};

// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const allPar = document.getElementsByTagName('p');
for (let i = 0; i < allPar.length; i++) {
    allPar[i].addEventListener('click', (e) => {
        e.target.style.color = 'blue';
        e.target.style.backgroundColor = 'green';
    })
}

// 2.3 Bloques de article o section: Cambia el color de fondo.

const allArt = document.getElementsByTagName('article');
const allSect = document.getElementsByTagName('section');
//console.log(allSect);
for (let i = 0; i < allArt.length; i++) {
    allArt[i].addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'red';
    })
}

for (let i = 0; i < allSect.length; i++) {
    allSect[i].addEventListener('click', (e) => {
        e.target.style.backgroundColor = 'grey';
    })
}

// Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

for (let i = 0; i < allImg.length; i++) {
    allImg[i].addEventListener('mouseover', (e) => {
        e.target.src = './assets/magic-6.gif';
    });
};

for (let i = 0; i < allImg.length; i++) {
    allImg[i].addEventListener('mouseout', (e) => {
        e.target.src = '';
    });
};

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

for (let i = 0; i < allPar.length; i++) {
    allPar[i].addEventListener('mouseover', (e) => {
        e.target.style.color = 'red';
        e.target.style.backgroundColor = 'black'
    });
};

for (let i = 0; i < allPar.length; i++) {
    allPar[i].addEventListener('mouseout', (e) => {
        e.target.style.color = 'black';
        e.target.style.backgroundColor = 'white'
    });
};

// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

for (let i = 0; i < allArt.length; i++) {
    allArt[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'brown';
    });
};

for (let i = 0; i < allArt.length; i++) {
    allArt[i].addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = 'white';
    });
};

for (let i = 0; i < allSect.length; i++) {
    allSect[i].addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    });
};

for (let i = 0; i < allSect.length; i++) {
    allSect[i].addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = 'white';
    });
};


// Premium



// Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

// const colors = ['red', 'blue', 'green']

// const getRandom = (array) => {
//     /* código misterioso */
// }

// console.log(getRandom(colors))
// // imprime 'red', 'blue' o 'green'
// Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.

// Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.