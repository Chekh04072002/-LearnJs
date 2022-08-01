// Какие-то классы, которые мы создаем, должны быть открыты для расширения, но закрыты для модификаций.
// то есть, мы должны проектировать наши классы таким образом, чтобы даже, если у нас появятся новые задачи, то нам бы не надо было
// модифицировать свой код, а он уже был спроектирован таким образом, что, даже, если мы пишем что-то новое, то мы не меняем старый код

// Неправильно
// class Square {
//     constructor(size) {
//         this.type = 'square';
//         this.size = size;
//     }
// }
//
// class Cirqle {
//     constructor(radius) {
//         this.type = 'circle';
//         this.radius = radius;
//     }
// }
// // Новая фигура
// // class Rect {
// //     constructor(width, height) {
// //         this.type = 'rect';
// //         this.width = width;
// //         this.height = height;
// //     }
// // }
//
// class AreaCalc {
//     constructor(shapes = []) {
//         this.shapes = shapes;
//     }
//     sum() {
//         return this.shapes.reduce( (acc, shape) => {
//             if (shape.type === 'circle') {
//                 acc += (shape.radius ** 2) * Math.PI;
//             }
//             else if (shape.type === 'square') {
//                 acc += shape.size ** 2;
//             }
//             // else if (shape.type === 'rect') { // измененный код из-за добавления фигуры
//             //     acc += shape.width * shape.height;
//             // }
//             return acc;
//         }, 0)
//     }
// }
//
// let calc = new AreaCalc([new Square(10), new Cirqle(1), new Cirqle(5)]);
// console.log(calc.sum());

// Но, если нам надо будет добавить ещё одну фигуру, то на придется переписывать метод sum в AreaCalc, что противоречит принципу

// Правильный код

class Shape {
    area() {
        console.log('Переопределить метод')
    }
}

class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }
    area() {
        return this.size ** 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return (this.radius ** 2) * Math.PI;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

class AreaCalc {
    constructor(shapes = []) {
        this.shapes = shapes;
    }
    sum() {
        return this.shapes.reduce( (acc, shape) => {
            acc += shape.area();
            return acc;
        }, 0)
    }
}

let calc = new AreaCalc([new Square(10), new Circle(1), new Circle(5), new Rectangle(10, 20)]);
console.log(calc.sum());

// Теперь мы можем добавлять новые фигуры и не менять старый код
// В итоге класс AreaCalc мы открыли для расширений и закрыли для модификации (больше не меняем метод sum())