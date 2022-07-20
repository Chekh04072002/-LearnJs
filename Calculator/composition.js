// Проблема: нельзя сделать при помощи наследования в классах фуллстек программиста. (Наследовать от фронтенда и бекенда сразу)
// Можно решить при помощи композиции
function createProgrammer(name) {
    const programmer = {name};
    return {
        ...programmer,
        ...canCode(programmer)
    }
}

function canCode({name}) {
    return {
        code() {
            console.log(`${name} is coding`);
            return '';
        }
    }
}

function canAngular({name}) {
    return {
        angular() {
            console.log(`${name} is Angular`);
            return '';
        }
    }
}

function createFrontend(name) {
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...canAngular(programmer)
    }
}

function canNodeJS({name}) {
    return {
        nodeJS() {
            console.log(`${name} is NodeJS`);
            return '';
        }
    }
}

function createBackend(name) {
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...canNodeJS(programmer)
    }
}

function createFullStack(name) {
    const programmer = createProgrammer(name);
    return {
        ...programmer,
        ...canAngular(programmer),
        ...canNodeJS(programmer)
    }
}




const programmer = createProgrammer('Sasha_programmer');
console.log(programmer.code())

const frontend = createFrontend('Sasha_frontend');
console.log(frontend.angular())

const backend = createBackend('Sasha_backend');
console.log(backend.nodeJS())

const fullStack = createFullStack('Sasha_fullstack');
console.log(fullStack.angular());
console.log(fullStack.nodeJS());