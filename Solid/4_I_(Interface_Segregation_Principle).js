// Те классы, которые наследуются от базового класса, если они не используют методы базового класса, то не должны от них зависить

// В данном случае базовый класс несет в себе лишние элементы, он слишком обобщен и приходится отменять некоторые методы

// // Неправильно
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log(`${this.name} ходит`);
//     }
//     swim() {
//         console.log(`${this.name} плавает`);
//     }
//     fly() {
//         console.log(`${this.name} летает`);
//     }
// }
//
// class Dog extends Animal {
//     fly() {
//         return null;
//     }
// }
//
// class Eagle extends Animal {
//     swim() {
//         return null;
//     }
// }
//
// class Whale extends Animal {
//     fly() {
//         return null;
//     }
//     walk() {
//         return null;
//     }
// }



// Правильно
class Animal {
    constructor(name) {
        this.name = name;
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} плавает`);
    }
}

const flier = {
    fly() {
        console.log(`${this.name} летает`);
    }
}

const walker = {
    walk() {
        console.log(`${this.name} ходит`);
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);
// Теперь у тех классов, которые были созданы и наследованы от базового класса нет лишних элементов поведения