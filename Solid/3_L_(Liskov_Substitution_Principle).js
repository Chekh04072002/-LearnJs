// Функции, которые используют базовый тип, они должны уметь с ним взаимодействовать + взаимодействовать с подтипами
// данного базового типа при этом не зная ничего про это. (Наследуемый класс должен дополнять, а не замещать поведение базового класса)

// // Неправильно
// class Person {
//     access() {
//         console.log('Есть доступ');
//     }
// }
//
// class Frontend extends Person {
//     method() {}
// }
//
// class Backend extends Person {
//     method() {}
// }
//
// class AnotherPerson extends Person {
//     method() {}
//     access() {
//         throw new Error('Нет доступа');
//     }
// }
//
// function openDoor(person) { // По логике эта функция должна работать со всеми классами, которые наслед. от Person
//     person.access();
// }
//
// openDoor(new Frontend());
// openDoor(new Backend());
// openDoor(new AnotherPerson()); // Но мы получаем ошибку, это и есть нарушение этого приципа. Функция должна уметь работать с подтипами базового типа


// Надо добавить ещё один уровень абстракция в виде базовых классов
// Правильно
class Person {

}

class Member extends Person{
    access() {
        console.log('Есть доступ');
    }
}

class Guest extends Person {
    isGuest = true;
}

class Frontend extends Member {
    method() {}
}

class Backend extends Member {
    method() {}
}

class AnotherPerson extends Guest {
    method() {}
}

function openDoor(member) { // Учитывая, что теперь эта функция работает только с member
    member.access();
}

openDoor(new Frontend());
openDoor(new Backend());
// openDoor(new AnotherPerson()); // Мы не может это написать т.к. он передает в не member, а guest