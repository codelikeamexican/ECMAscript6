const data = {
    frontend: 'Oscar',
    backend : 'isabel',
    design: 'Ana',
}
const values = Object.values(data);
console.log(values.length);

const entries = Object.entries(data);
console.log(entries);

console.log(entries.length);

const string = 'hola';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'---'));



//Async Await

const helloWorld = () => {
    return new Promise((resolve,reject) =>{
        (false)
        ? setTimeout( () => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async() =>{
    const hello = await helloWorld();
    console.log(hello);
}

const anotherFunction = async () =>
{
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();