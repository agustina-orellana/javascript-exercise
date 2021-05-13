class Clothes {
    constructor(genero, tipo, precio, talle, marca){
        this.genero = genero;
        this.tipo = tipo;
        this.precio = precio;
        this.talle = talle;
        this.marca = marca;
    }
};

class Shoes {
    constructor(genero, precio, talle, marca){
        this.genero = genero;
        this.precio = precio;
        this.talle = talle;
        this.marca = marca;
    }
};

let remera = new Clothes('mujer','top', 3500, 'xl', 'nike');
let pantalon = new Clothes('hombre', 'bottom', 4500, 'm', 'adidas');

let zapatilla = new Shoes('infantil', 6000, 23, 'reebok');
let sandalias = new Shoes('mujer', 8000, 39, 'sarkany');

console.log(remera);
console.log(zapatilla);
