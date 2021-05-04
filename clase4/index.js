//FUNCION PARA CALCULAR EL PROMEDIO DE EDAD DE 5 PERSONAS
let registrados = 5;
let edades = [10, 5, 8, 18, 21 ];

const promedio = () => {
    let aniosTotal = 0;
    for(let i = 0; i < edades.length; i++ ){
        aniosTotal = aniosTotal + edades[i];
    };

    let edadMedia = aniosTotal / registrados;
    console.log('la edad promedio es de ' + edadMedia);
};

promedio();