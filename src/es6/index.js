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


