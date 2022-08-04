// Верхний уровень модулей не должен зависеть от модулей более низкого уровня
// Любые уровни должны зависить от абстракции, а не от конкретики

// // Неправильно
// class Fetch {
//     request(url) {
//         return Promise.resolve('data from fetch');
//     }
// }
//
// class LocalStorage {
//     get() {
//         const dataFromLocalStorage = 'data from local storage';
//         return dataFromLocalStorage;
//     }
// }
//
// class Database { // При добавлении LocalStorage получается, что класс Database зависит от конкретных реализаций и мы возвращаемся к переписыванию кода
//     constructor() {
//         // this.fetch = new Fetch();
//         this.localStorage = new LocalStorage();
//     }
//
//     getData() {
//         // return this.fetch.request();
//         return this.localStorage.get('ls key')
//     }
// }
//
// const db = new Database();
// console.log(db.getData());


// Правильно
// Нужно создать другой класс, который будет являтся интерфейсом для взаимодействия

class Fetch {
    request(url) {
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage';
        return dataFromLocalStorage;
    }
}

class FetchClient { // оборачивает функционал fetch
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet() {
        return this.fetch.request('vk.com');
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet() {
        return this.localStorage.get();
    }
}

class Database {
    constructor(client) {
        this.client = client;
    }

    getData(key) {
        return this.client.clientGet(key);
    }
}

const db = new Database(new FetchClient());
console.log(db.getData('rand'));