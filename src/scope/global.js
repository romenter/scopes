// variable
var a;          //declaracion
var b = 'b';    //declaramos y asignamos
b = 'bb';       //reasignando
var a = 'aa';   //redeclaracion


//Global Scope --> Declaracion golbal
var fruit = 'Apple';
console.log(fruit)

function bestFruit (){
    console.log(fruit)
}

bestFruit();


//Otra forma de crear una variable global
function countries(){
    country = 'Colombia'; //No declaramos la variable, por lo tanto sera (por defecto) global
    console.log(country)
}

countries();
console.log(country)