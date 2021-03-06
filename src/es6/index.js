function newFunction(name,age,country){
var name = name || 'oscar';
var age = age || 32;
var country = country || 'mx';
console.log(name, age, country);
}

//es6

function newFuncion2(name = 'oscar', age=32, country ='fr'){
    console.log(name,age,country);
}

newFuncion2(); // me devuelve los parametos por defecto
newFuncion2('Ricardo',23,'co');


//LET y CONST, Multilínea, Spread Operator y Desestructuración//

let lorem = "Lorem Ipsum es simplemente el texto de relleno \n" + "something else";

//es6
let lorem2 = `otra frase
y ahora es otra frase`;

console.log(lorem);
console.log(lorem2)


let person = {
    'name': 'gerardo',
    'age': 24,
    'country': 'MX'
}

console.log(person.age, person.name);

//es6
let{name,age,country} = person;

console.log(name,age,country);


let {name} = person;

let team1 = ['oscar','julian','paulina'];
let team2 = ['adriana','rosy','ivan'];

let education = ['david', ...team1, ...team2]; //uniendo arrays

console.log(education);

{
    var global = "Global var";
}

{
    let globalLet = "Glocablet";
}

console.log(global); //scope global 
console.log(globalLet); //scope local


const a = 'b';

a = 'a'; //const cannot be overrite

var a = 'b';

a = 'a'; 
console.log(a);




//**Arrow Functions, Promesas y Parámetros en objetos**

let name = 'oscar';
let age =32;

obj = {name: name, age:age};

//es6
obj1 = {name,age};

console.log(obj);

//arrow functions (:


const names = [
    {name:'paulina', age :24},
    {name:'pauli', age :42}
]

let listNames = names.map(function(item){
    console.log(item.name);
})

let lisofnames2 = names.map(item => console.log(item.name, item.age));

const lisOfNames3 = (name,age,country) => {
    //...
}

const helloPromice = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('hey!');
        }else{
            reject("ups");
        }
    }
    );
}

helloPromice()
.then(response =>console.log(response))
.catch(error=> console.log(error));


//** Clases modulos y generadores */

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueB+this.valueA;
    }
}

const calc = new Calculator();
console.log(calc.sum(2,3));

import{ hello } from './module';

hello();

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generator = helloWorld();

console.log(generator.next().value);
console.log(generator.next().value);





