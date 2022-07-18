document.addEventListener('DOMContentLoaded', () => {
    let num1 = '';
    let num2 = '';
    let calcScreen = document.querySelector('.calc_screen');

    let arrOfButtons = ['.zero', '.one', '.two', '.three', '.four', '.five', '.six', '.seven', '.eight', '.nine', '.dot', '.ac', '.plus', '.equal', '.minus', '.division', '.multi', '.pls-mns', '.percent'];

    function findElements(list) {
        let arr = [];
        for (let elemOfList of list) {
            arr.push(document.querySelector(elemOfList));
        }
        return arr;
    }

    [zero, one, two, three, four, five, six, seven, eight, nine, dot, ac, plus, equal, minus, division, multi, plsMns, percent] = findElements(arrOfButtons);

    const numbObj = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        dot: '.'
    };

    const buttonsNumb = [zero, one, two, three, four, five, six, seven, eight, nine, dot];
    buttonsNumb.forEach(elem => {
        elem.addEventListener('click', (event) => {
            for (let i of event.target.classList) {
                if (i.toString() in numbObj) {
                    if (i.toString() === 'dot' && num2.indexOf('.') !== -1) {
                        continue;
                    }
                    num2 += numbObj[i];
                    calcScreen.innerHTML = num2;
                }
            }
        })
    })
    let flag = '';

    ac.addEventListener('click', (event) => {
        num1 = '';
        num2 = '';
        calcScreen.innerHTML = num1;
    })

    plus.addEventListener('click', (event) => {
        num1 = num2;
        num2 = '';
        calcScreen.innerHTML = num2;
        flag = '+';
    })

    minus.addEventListener('click', (event) => {
        num1 = num2;
        num2 = '';
        calcScreen.innerHTML = num2;
        flag = '-';
    })

    division.addEventListener('click', (event) => {
        num1 = num2;
        num2 = '';
        calcScreen.innerHTML = num2;
        flag = '/';
    })

    multi.addEventListener('click', (event) => {
        num1 = num2;
        num2 = '';
        calcScreen.innerHTML = num2;
        flag = '*';
    })

    plsMns.addEventListener('click', (event) => {
        num2 = -num2;
        calcScreen.innerHTML = num2;
    })

    percent.addEventListener('click', (event) => {
        num2 = num2 / 100;
        calcScreen.innerHTML = num2;
    })

    equal.addEventListener('click', (event) => {
        num2 = eval(`${num1}${flag}${num2}`);
        calcScreen.innerHTML = num2;
    })

})
