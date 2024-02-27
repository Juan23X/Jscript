//Arreglos
let varios = [1, "Juan", "Bogotá", 20.45, true];

//En consola el tamaño del arreglo 
console.log(varios.length);
console.log(varios[0]);

//agrega un solo valor 
varios.push(3);
console.log(varios);

//sacarun elemento del arreglo (el último)
varios.pop();
let enteros = [1, 2, 3, 5, 7, 9];

//concatenar
let concat = varios.concat(enteros);
console.log(concat);

//agregar al inicio
let inicio = concat.unshift("Inicio");
console.log(inicio);

//quitar el primer elemento
inicio = concat.shift();


const arregloUno = inicio;


//arregloUno.push(1);
for(i = 0; i<varios.length; i++){
    console.log(varios[i]);
}

varios.forEach(element => {
    console.log(element);
});


//.reduce()
let numeros = [100,200,300,2,5,10];

let resultado = numeros.reduce((accumulador,valorActual)=>{
    return accumulador+valorActual;
})

console.log(resultado);

//.filter()
let filtrado = numeros.filter(numero =>{
    return numero>10;
})

console.log(filtrado);

let paises = ["Colombia", "USA", "Basil", "Mexico"];

let filtered = paises.filter(pais=>{
    return pais.startsWith("C");
})

console.log(filtered);

//.map()
const saludarPais = paises.map(country =>{
    return "Bienvenidos pasajeros de "+ country;
})

console.log(saludarPais);