
// function qwerty() {
//     for (let i = 0; i < 3000000000; i++) {
//         let count = 0;
//         count++;
//     }
//     console.log('Vse');
// }
//
// function forr() {
//     for (let q = 0; q < 10; q++) {
//         console.log(q);
//     }
// }
//
// console.time('flag');
// setTimeout(qwerty, 1);
// console.timeEnd('flag');
//
// forr();


// async function foo() {
//     qwerty();
//     forr();
// }
// foo();



// const delay = (wait = 1000) => {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Error');
//         }, wait);
//     });
//     return promise;
// };
//
// delay(2500)
//     .then(() => {
//         console.log('prom')
//     }, (err) => {
//         console.log('err ' + err)
//     })

//
// function foo(arguments) {
//     for (i in arguments) {
//         console.log(i);
//     }
// }
//
// foo(n = 1, q = 5);

// let arr = [-4, 2, -1, 8];
// console.log(arr.sort((a, b) => a - b))

// let a = document.querySelector('.first');
//
// a.addEventListener('click', () => {
//     setTimeout(() => {a.style.backgroundColor = 'red';}, 3000);
// })


// let obj = {
//     getName() {
//         return this.name;
//     }
// }
// let Chel = {
//     name: 'Sasha'
// }
//
// console.log(obj.getName.call(Chel));

//
// class Person {
//     constructor(name, surName) {
//         this.name = name;
//         this.surName = surName;
//     }
//     logg() {
//         console.log(this.name + ' ' + this.surName)
//     }
// }
//
// class Prog extends Person {
//     constructor(name, surName, lang) {
//         super(name, surName);
//         this._lang = lang;
//     }
//     get lang() {
//         return this._lang + ' getted'
//     }
//
//     logg() {
//         super.logg();
//         return 500;
//     }
// }
//
// let max = new Prog('Max', 'Maximof', 'Js');
// console.log(max);
// for (let i in max) {
//     console.log(i)
// }
//
// for (let i of max) {
//     console.log(i)
// }
//

// let mass = {
//     values: [1, 2, 3, 4, 5],
//     [Symbol.iterator]() {
//         let i = 0;
//         return {
//             next: () => {
//                 let value = this.values[i];
//                 i++;
//                 return {
//                     done: i > this.values.length,
//                     value: value
//                 }
//             }
//         }
//     }
// }
//
// for (let i of mass) {
//     console.log(i);
// }
// let it = mass[Symbol.iterator]()
// console.log(it)
// console.log(it.next())

// let arr = [1, 2, 3, 4, 5];
// function *generator(arr) {
//     for (let i of arr) {
//         yield i;
//     }
// }
//
// let arr1 = generator(arr);
// console.log(arr1.next())

// let range = {
//     values: [1, 2, 3, 4, 5],
//     [Symbol.iterator]() {
//         let i = -1;
//         return {
//             next: () => {
//                 i++;
//                 return {
//                     done: i >= this.values.length,
//                     value: this.values[i]
//                 }
//             }
//         }
//     }
// }
//
// for (let t of range) {
//     console.log(t)
// }

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('succes')
//     }, 1000);
// })
//
// promise.then(data => console.log(data))



// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector);
//     }
//
//     hide() {
//         this.$el.style.display = 'none';
//     }
//
//     show() {
//         this.$el.style.display = 'block';
//     }
// }
//
//
// class Box extends Component {
//     constructor(options) {
//         super(options.selector);
//
//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.backgroundColor = options.color;
//     }
//     bigger(widtth) {
//         this.$el.style.width = widtth + 'px'
//     }
// }
//
// let box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'red'
// })
//
// class Circle extends Box {
//     constructor(options) {
//         super(options);
//         this.$el.style.borderRadius = 50 + '%';
//     }
// }
// let box2 = new Circle({
//     selector: '#box2',
//     size: 100,
//     color: 'red'
// })


// console.log('Request data...');
//
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...');
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         };
//         resolve(backendData);
//     }, 2000)
// })
//
// promise.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000)
//     })
//
// }).then(clientData => {
//     console.log('Data received', clientData);
// });





// const delay = ms => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject(), ms)
//     })
// }
//
// const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//     console.log('fetch todo started...')
//     return delay(2000)
//         .then(() => {
//             return fetch(url)
//     })
//         .then(response => response.json())
// }
//
// fetchTodos()
//     .then(data => {
//         console.log('Data:', data)
//     })
//     .catch(err => console.error(err))


// async function fetchAsyncTodos() {
//     console.log('fetch todo started..')
//     await delay(2000)
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log('Data:', data)
// }
//
// fetchAsyncTodos()


// prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('prom5')
//         resolve('prom5')
//     }, 5000)
// }).then(() => {
//     console.log('endddddd')
// })





// setTimeout(() => {
//     console.log('prom5')
// }, 3000)
//
// console.log('enddddd')



// prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('prom1 5 sec')
//         resolve('5 sec')
//     }, 5000)
// })
//     .then(data => {
//     console.log(data)
//     setTimeout(() => {
//         console.log('prom2 3 sec')
//     }, 3000)
// })
//


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('setTime 2sec')
//         resolve('adadad')
//     }, 2000)
// })
//     .then((data) => {
//     console.log('data')
// })
// console.log('out setTimeout')














// const requrl = 'https://jsonplaceholder.typicode.com/users';
//
//
//
// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//
//         xhr.responseType = 'json';
//
//         xhr.setRequestHeader('Content-Type', 'application/json')
//
//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.status);
//             }
//             else {
//                 resolve(xhr.response)
//             }
//         })
//
//         xhr.onerror = () => {
//             reject(xhr.response);
//         }
//         xhr.send(JSON.stringify(body))
//     })
// }
//
// // sendRequest('GET', requrl)
// //     .then(data => {
// //         console.log(data)
// //     })
// sendRequest('POST', requrl, {name: 'Sasha', age: 20})
//     .then(data => {
//         console.log(data)
//     })






// const requrl = 'https://jsonplaceholder.typicode.com/users';
//
// function sendRequest(method, url, body = null) {
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => response.json())
// }
// let body = {name: 'Sasha', age: 20};
//
// sendRequest('POST', requrl, body)
//     .then(data => {
//         console.log(data)
//     })
//




// let arr1 = ['Москва', 'Питер', 'Симферополь', 'Казань'];
// let arr2 = ['Москва', 'Питер', 'Симферополь', 'Казань'];
// console.log(...arr1, ...arr2)
//
// let obj = {
//     Moscow: 20,
//     Sp: 10,
//     Kazan: 5,
//     Ns: 3
// }
// let obj1 = {
//     Moscow: 25,
//     Spo: 10,
//     Kazoan: 5,
//     Nso: 3
// }
//
// console.log({...obj, ...obj1})
// console.log(obj)

// let arr = [1, 2, 3, 4, 5];
// console.log(Math.max.apply(this, arr))


// let obj = {
//     name: 'Max',
//     age: 20,
//     city: 'Simferopol',
//     country: 'Russia'
// }
//
// let {name, city: gorod, ...address} = obj;
// console.log(name, gorod, address)


// let arr = [1, undefined, 3, 4, 5];
// let [one, two, free] = arr;
// console.log(one, two)
// if (two) {
//     console.log('truw')
// }


// const person = {
//     name: 'Max',
//     age: 20,
//     address: {
//         country: 'Russia',
//         city: 'Simferopol'
//     }
// }
//
// let {name, ...onfo} = person;
//
// function foo({name, age}) {
//     console.log(name, age)
// }
// foo(person)



// function f1() {
//     console.log('connect...');
//     setTimeout(() => {
//         console.log('get data')
//     }, 5000)
// }
//
// function f2() {
//     console.log('get data from f1...');
//     setTimeout(() => {
//         console.log('finish')
//     }, 2000)
// }
//
// let prom1 = new Promise((resolve, reject) => {
//     console.log('connect...');
//     setTimeout(() => {
//         console.log('get data')
//         resolve('data yes')
//     }, 5000)
// })
//
//     .then(data => {
//         console.log('get data from f1...');
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('finish')
//             }, 2000)
//         })
//
//     })
//     .then(data => console.log(data))





// let person = {
//     name: 'Sasha',
//     age: 20
// }
// let pp = new Proxy(person, {
//     set(target, prop, value) {
//         console.log(value + ' true');
//         prop[target] = value;
//     },
//     get(target, prop) {
//         console.log('get used');
//         if (!(prop in target)) {
//             return prop
//                 .split('_')
//                 .map(arg => target[arg])
//                 .join(' ');
//         }
//         return target[prop];
//     },
//     has(target, prop) {
//         return ['name', 'age', 'sname'].includes(prop);
//     },
//     deleteProperty(target, prop) {
//         console.log('Delete', prop);
//         delete target[prop];
//     }
// })
//
// console.log(pp.name_age);

//
// pp.age = 19;
// console.log(pp.name);
// console.log('sname' in pp);
// delete pp.age;
// console.log(pp);


// function print(arg) {
//     console.log('printing', arg);
// }
//
// let fp = new Proxy(print, {
//     apply(target, thisArgs, args) {
//         console.log('foo fp');
//         return target.apply(thisArgs, args);
//     }
// })
//
// fp('adad');


// class Person {
//     constructor(name, age) {
//         console.log('construct...')
//         this.name = name;
//         this.age = age;
//     }
// }
//
// let ProxyPerson = new Proxy(Person, {
//     construct(target, args) {
//         console.log('constracted');
//
//         return new Proxy(new target(...args), {
//             get(targ, prop) {
//                 console.log('Proxy into P');
//                 return targ[prop];
//             },
//         })
//     }
// })
//
// let a = new ProxyPerson('Sasha', 30);
// console.log(a);
// console.log(a.name);




// let person = {
//     name: 'Sasha',
//     age: 20,
//     _numb: 1234555
// }
//
// let defpers = (target, prefix = '_') => {
//     return new Proxy(target, {
//         has(object, prop) {
//             return prop in object && !prop.startsWith(prefix)
//         },
//         ownKeys(object) {
//             return Reflect.ownKeys(object)
//                 .filter(elem => !elem.startsWith(prefix))
//         },
//         get(object, prop, receiver) {
//             if (prop in receiver) {
//                 return object[prop];
//             }
//             else {
//                 return void 0;
//             }
//         }
//     })
// }
//
// let p = defpers(person)
// console.log('_numb' in p)


// // Свой итератор
// let obj = {
//     name: 'Max',
//     age: 19,
//     [Symbol.iterator]() {
//         return {
//             next() {
//                 return {value: 1, done: false};
//             }
//         }
//     }
// }
//
// for (let i of obj) {
//     console.log(i)
// }



// let iterator = {
//     gen(n = 10) {
//         let i = 0;
//         return {
//             [Symbol.iterator]() {
//                 return this;
//             },
//             next() {
//                 if (i < n) {
//                     return {value: i++, done: false}
//                 }
//                 else {
//                     return {value: void 1, done: true}
//                 }
//             }
//         }
//     }
// }
//
// let a = iterator.gen();
//
// for (let i of a) {
//     console.log(i)
// }

//Map
// let users = [
//     {name: 'Max'},
//     {name: 'Elena'},
//     {name: 'Sveta'}
// ];
// let visits = new Map();
// visits
//     .set(users[0], new Date)
//     .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//
// console.log(visits);
//
// function foo(user) {
//     return visits.get(user);
// }
//
// console.log(foo(users[0]))



// let obj = {name: 'Max'};
//
// let map = new WeakMap([
//     [obj, 'Max']
// ])
// obj = null
// console.log(map.get(obj));



// let a = 5;
//
// function foo() {
//     a = 2;
//     a = 0;
//     var b = 3;
//
// }
//
//
// foo();
// console.log(a);
// console.log(b)

// let q = 5;
// for (let i = 0; i < 10; i++) {
//     q = i
// }
// console.log(q)


// class Coder {
//     constructor(name) {
//         this.name = name;
//         this.lang = 'js';
//     }
// }
//
// function getCode() {
//     return {
//         code() {
//             console.log(`coding on ${this.lang}`);
//         }
//     }
// }
//
// function createCoderWithCode(name) {
//     let coder = new Coder(name);
//     return {
//         ...coder,
//         ...getCode()
//     }
// }
//
// let coder = createCoderWithCode('Max');
// console.log(coder.code())

///////////////////////////////
// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('ok'), 2000);
// })
//
// async function foo() {
//     let response = await prom;
//     console.log(response)
// }
//
// foo();

// const fs = require('fs');
// console.time('one');
// let prom = new Promise((resolve, reject) => {
//     fs.readFile('text.txt', 'utf8', (error, data) => {
//         resolve(data[1000]);
//     })
// })
//     .then(data => {
//         console.log(data)
//         console.log('zaversheno')
//     })
//
// console.timeEnd('one');


// let readline = require('readline');
// let rl = readline.createInterface(process.stdin, process.stdout);
// rl.question('input text ', text => {
//     console.log(`text is ${text}`);
//     rl.close();
// })


const test = {
    name: 'test object',
    createAnonFunction: function() {
        return function() {
            console.log(this.name);
            console.log(arguments);
        };
    },

    createArrowFunction: function() {
        return () => {
            console.log(this.name);
            console.log(arguments);
        };
    }
};

// console.log(test.createAnonFunction('hello')())
// console.log('///////////////////')
// console.log(test.createArrowFunction('hello')())


let obj = {
    name: 'qwerty',
    getName() {
        return function() {
            return this.name;
        }
    }
}

console.log(obj.getName()());