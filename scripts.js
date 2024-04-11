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
        e.target.style.color = `#${getRandom(paletaColores.map(color => color.hex))}`;
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
        //e.target.style.color = 'red';
        e.target.style.backgroundColor = 'black'
    });
};

for (let i = 0; i < allPar.length; i++) {
    allPar[i].addEventListener('mouseout', (e) => {
        //e.target.style.color = 'black';
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

const paletaColores = [{"name":"Tea green","hex":"e2f1af","rgb":[226,241,175],"cmyk":[6,0,27,5],"hsb":[74,27,95],"hsl":[74,70,82],"lab":[93,-16,30]},{"name":"Battleship gray","hex":"928779","rgb":[146,135,121],"cmyk":[0,8,17,43],"hsb":[34,17,57],"hsl":[34,10,52],"lab":[57,2,9]},{"name":"Wenge","hex":"5e5768","rgb":[94,87,104],"cmyk":[10,16,0,59],"hsb":[265,16,41],"hsl":[265,9,37],"lab":[38,7,-9]},{"name":"Delft Blue","hex":"3a445d","rgb":[58,68,93],"cmyk":[38,27,0,64],"hsb":[223,38,36],"hsl":[223,23,30],"lab":[29,3,-16]},{"name":"Jordy Blue","hex":"91c4f2","rgb":[145,196,242],"cmyk":[40,19,0,5],"hsb":[208,40,95],"hsl":[208,79,76],"lab":[77,-5,-28]},{"name":"White","hex":"fefffe","rgb":[254,255,254],"cmyk":[0,0,0,0],"hsb":[120,0,100],"hsl":[120,100,100],"lab":[100,0,0]},{"name":"Mint green","hex":"e5fcf5","rgb":[229,252,245],"cmyk":[9,0,3,1],"hsb":[162,9,99],"hsl":[162,79,94],"lab":[97,-9,1]},{"name":"Celadon","hex":"b3dec1","rgb":[179,222,193],"cmyk":[19,0,13,13],"hsb":[140,19,87],"hsl":[140,39,79],"lab":[85,-20,10]},{"name":"Dark purple","hex":"210124","rgb":[33,1,36],"cmyk":[8,97,0,86],"hsb":[295,97,14],"hsl":[295,95,7],"lab":[4,21,-15]},{"name":"Claret","hex":"750d37","rgb":[117,13,55],"cmyk":[0,89,53,54],"hsb":[336,89,46],"hsl":[336,80,25],"lab":[25,45,4]}];

const colors = ['red', 'blue', 'green']

const getRandom = (array) => {
    const color = Math.floor(Math.random() * array.length);
    return array[color];
}

console.log(getRandom(colors));
// imprime 'red', 'blue' o 'green'

// Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.

// Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.