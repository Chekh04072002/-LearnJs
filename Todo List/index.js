// let now = new Date();
// const objOfDay = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'};
// const objOfMonth = {0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December'};
//
// function ending(numb) {
//     let num = parseInt(numb);
//     if (num % 10 === 1 && num !== 11) return 'st'
//     else if (num % 10 === 2 && num !== 12) return 'nd'
//     else if (num % 10 ===3 && num != 13) return 'rd'
//     else return 'th'
// }
//
//
// document.querySelector('.todolist__day').innerHTML = objOfDay[now.getDay()];
// document.querySelector('.todolist__numb').innerHTML = now.getDate() + ending(now.getDate());
// document.querySelector('.todolist__month').innerHTML = objOfMonth[now.getMonth()];
// // document.querySelector('.todolist__count').innerHTML = arrOfTask.length + ' Tasks';
//
// const myModal = modal({ // Создание модалки
//     title: 'add your task',
//     closable: true,
//     width: '400px'
// });
//
// document.querySelector('.todo__add').addEventListener('click', myModal.open); // Открытие модалки при клике
//
// let finalBtn = document.querySelector('.added');
// finalBtn.addEventListener('click', event => { // Добавление задач в массив и последующий рендер по массиву
//     let task = document.querySelector('.inputBtn').value;
//         console.log(task);
//         arrOfTask.push({task: task, time: `${now.getHours()}:${now.getMinutes()}`, added: false});
//         myModal.close();
//         document.querySelector('.inputBtn').value = '';
//         render();
//     })
//
//
// let arrOfTask = [
//
// ];
//
// function addElement(elem) { // Добавление ноды самой задачи
//     let todoNode = document.createElement('div');
//     todoNode.classList.add('todo__node');
//     // todoNode.setAttribute('data-added', 'false');
//     // todoNode.dataset.added = 'false';
//     todoNode.insertAdjacentHTML('afterbegin',
//         `<div class="todo__node-wrapper">
//                         <input type="checkbox">
//                         <div class="todo__text">${elem.task}</div>
//                     </div>
//                     <div class="todo__time-end">${elem.time}</div>`)
//     document.querySelector('.todo').appendChild(todoNode);  // Можно вынести за функцию и не искать каждый раз
// }
//
// function render() { // рендер задач по массиву
//     arrOfTask.forEach(elem => {
//         if (!elem.added) {
//             elem.added = 'true';
//             addElement(elem);
//         }
//         document.querySelector('.todolist__count').innerHTML = arrOfTask.length + ' Tasks';
//         // addElement(elem);
//     })
// }
//
// render();
//
// document.querySelector('.todolist__clear').addEventListener('click', event => { // Удаление (Clear List)
//     console.log('bnt');
//     console.log(arrOfTask.length);
//     arrOfTask = arrOfTask.slice(0, 0);
//     const deleteArr = document.querySelectorAll('.todo__node');
//     deleteArr.forEach(elem => {
//         document.querySelector('.todo').removeChild(elem);
//     })
//     console.log(arrOfTask.length);
//     document.querySelector('.todolist__count').innerHTML = arrOfTask.length + ' Tasks';
// })















// function updateLocal(arr) {
//     localStorage.setItem('arr', JSON.stringify(arr));
// }
// function getLocal() {
//     return JSON.parse(localStorage.getItem('arr'));
// }
//
// function ending(numb) {
//     let num = parseInt(numb);
//     if (num % 10 === 1 && num !== 11) return 'st'
//     else if (num % 10 === 2 && num !== 12) return 'nd'
//     else if (num % 10 ===3 && num != 13) return 'rd'
//     else return 'th'
// }
//
// function addElement(elem) { // Добавление ноды самой задачи
//     let todoNode = document.createElement('div');
//     todoNode.classList.add('todo__node');
//     todoNode.insertAdjacentHTML('afterbegin',
//         `<div class="todo__node-wrapper">
//                         <input type="checkbox">
//                         <div class="todo__text">${elem.task}</div>
//                     </div>
//                     <div class="todo__time-end">${elem.time}</div>`)
//     document.querySelector('.todo').appendChild(todoNode);  // Можно вынести за функцию и не искать каждый раз
// }
//
// function render() { // рендер задач по массиву
//     if (getLocal()) {
//         let arrOfLoc = getLocal();
//         console.log(localStorage)
//         console.log(arr)
//         for (let elem of arr) {
//             if (!elem.added) {
//                 elem.added = 'true';
//                 updateLocal(arrOfLoc);
//                 console.log(elem);
//                 addElement(elem);
//             }
//         }
//         document.querySelector('.todolist__count').innerHTML = arr.length + ' Tasks';
//     }
// }
//
//
//
// const myModal = modal({ // Создание модалки
//     title: 'add your task',
//     closable: true,
//     width: '400px'
// });
//
// let arr = getLocal() || [];
//
//
// let now = new Date();
// const objOfDay = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'};
// const objOfMonth = {0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December'};
//
// document.querySelector('.todolist__day').innerHTML = objOfDay[now.getDay()];
// document.querySelector('.todolist__numb').innerHTML = now.getDate() + ending(now.getDate());
// document.querySelector('.todolist__month').innerHTML = objOfMonth[now.getMonth()];
//
// document.querySelector('.todo__add').addEventListener('click', myModal.open); // Открытие модалки при клике
//
// document.querySelector('.added').addEventListener('click', event => { // Добавление задач в массив и последующий рендер по массиву
//     let task = document.querySelector('.inputBtn').value;
//         arr.push({task: task, time: `${now.getHours()}:${now.getMinutes()}`, added: false});
//         updateLocal(arr);
//         myModal.close();
//         document.querySelector('.inputBtn').value = '';
//         render();
//     })
//
//
//
// document.querySelector('.todolist__clear').addEventListener('click', event => { // Удаление (Clear List)
//     arr = arr.slice(0, 0);
//     localStorage.clear();
//     const deleteArr = document.querySelectorAll('.todo__node');
//     deleteArr.forEach(elem => {
//         document.querySelector('.todo').removeChild(elem);
//     })
//     document.querySelector('.todolist__count').innerHTML = 0 + ' Tasks';
// })
//
// render();









function updateLocal(arr) {
    localStorage.setItem('arr', JSON.stringify(arr));
}
function getLocal() {
    return JSON.parse(localStorage.getItem('arr'));
}

function ending(numb) {
    let num = parseInt(numb);
    if (num % 10 === 1 && num !== 11) return 'st'
    else if (num % 10 === 2 && num !== 12) return 'nd'
    else if (num % 10 ===3 && num != 13) return 'rd'
    else return 'th'
}

function addElement(elem) { // Добавление ноды самой задачи
    let todoNode = document.createElement('div');
    todoNode.classList.add('todo__node');
    todoNode.insertAdjacentHTML('afterbegin',
        `<div class="todo__node-wrapper">
                        <input type="checkbox" class="checkbox">
                        <div class="todo__text">${elem.task}</div>
                    </div>
                    <div class="todo__time-end">${elem.time}</div>`)

    document.querySelector('.todo').appendChild(todoNode);  // Можно вынести за функцию и не искать каждый раз
    document.querySelector('.todolist__count').innerHTML = arr.length + ' Tasks';

    todoNode.querySelector('.checkbox').addEventListener('click', (event) => {
        event.target.closest('.todo__node').classList.add('close');
        setTimeout(() => {
            event.target.closest('.todo').removeChild(event.target.closest('.todo__node'));
            document.querySelector('.todolist__count').innerHTML = getLocal().length + ' Tasks';

            let arrLocal = getLocal();
            let newArr = [];
            arrLocal.forEach(arrElem => {
                if (arrElem.task !== elem.task) {
                    newArr.push(arrElem);
                }
            })
            updateLocal(newArr);
            document.querySelector('.todolist__count').innerHTML = newArr.length + ' Tasks';
        }, 1000)
        })
}

function render() { // рендер задач по массиву
    if (getLocal()) {
        // let arrOfLoc = getLocal();
        for (let elem of getLocal()) {
            // elem.added = 'true';
            // updateLocal(arrOfLoc);
            addElement(elem);
        }
        document.querySelector('.todolist__count').innerHTML = arr.length + ' Tasks';
    }
}



const myModal = modal({ // Создание модалки
    title: 'add your task',
    closable: true,
    width: '400px'
});

let arr = getLocal() || [];


let now = new Date();
const objOfDay = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'};
const objOfMonth = {0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December'};

document.querySelector('.todolist__day').innerHTML = objOfDay[now.getDay()];
document.querySelector('.todolist__numb').innerHTML = now.getDate() + ending(now.getDate());
document.querySelector('.todolist__month').innerHTML = objOfMonth[now.getMonth()];

document.querySelector('.todo__add').addEventListener('click', myModal.open); // Открытие модалки при клике

document.querySelector('.added').addEventListener('click', event => { // Добавление задач в массив и последующее добавление в дом
    let task = document.querySelector('.inputBtn').value;
    let elem = {task: task, time: `${now.getHours()}:${now.getMinutes()}`};
        arr.push(elem);
        updateLocal(arr);
        myModal.close();
        document.querySelector('.inputBtn').value = '';
        addElement(elem);
    })



document.querySelector('.todolist__clear').addEventListener('click', event => { // Удаление (Clear List)
    arr = arr.slice(0, 0);
    localStorage.clear();
    const deleteArr = document.querySelectorAll('.todo__node');
    deleteArr.forEach(elem => {
        document.querySelector('.todo').removeChild(elem);
    })
    document.querySelector('.todolist__count').innerHTML = 0 + ' Tasks';
})




render();





// document.querySelectorAll('.checkbox').forEach(inp => {
//     inp.addEventListener('click', (event) => {
//         console.log(event.target.parentNode.parentNode);
//         event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
//     })
// })

