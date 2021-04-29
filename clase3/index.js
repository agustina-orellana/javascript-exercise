// // EJEMPLOUNO
let numeroUno = prompt('ingrese un numero');

for(let i = 0; i < numero; i++){
    console.log('hola')
};

// EJEMPLODOS 
let numeroDos =  Number (prompt('ingresa un numero'));

for(let i = 1; i <= 10; i++){
    let resultado = numeroDos + i;
    alert(numeroDos + '+' + i + '=' + resultado)
};

// // EJEMPLOTRES
let textoUno = prompt('Ingresar un texto');

while(textoUno != 'ESC'){
alert('Usted ingreso ' + textoUno);

textoUno = prompt('Ingresar un texto');
};