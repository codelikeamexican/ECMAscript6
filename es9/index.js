const obj = {
    name : 'oscar',
    age : 32,
    country: 'MX'
};

let {country,...all} = obj;
console.log(all);


const obj1 = {
    name : 'oscar',
    age : 32,
};


const obj2 = {
    ...obj1,
    country: 'MX'
};

console.log(obj2);



///promise&& finally


const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(()=>resolve('hello world'), 2000)
        : reject(new Error('Test error'))
    });
}

helloWorld()
.then(response=> console.log(response))
.catch(error=> console.log(error))
.finally(()=> console.log('finally'))


/////////////


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/

const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[2]

console.log(year,month,day)


