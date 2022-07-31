// Какой-либо класс должен обладать только одной зоной ответственности
// Идея: по мере роста приложения, требуется большее количество функционала и какому-то классу надо добавить новый функционал, который может
// смешивать его изначальное поведение. И этот принцип говорит, что, если в классе есть какое-то другое поведение, то его надов вынести в отдельный класс.

class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true;
    }

    // НЕПРАВИЛЬНО, т.к. это не относится к новости, а относится к отображению
    // toHTML() {
    //     return `
    //     <div class="news">
    //         <h1>${this.title}</h1>
    //         <p>${this.text}</p>
    //     </div>
    //     `
    // }
    //
    // toJSON() {
    //     return JSON.stringify({
    //         title: this.title,
    //         text: this.text,
    //         modified: this.modified
    //     }, null, 2)
    // }
}

class PrintNews {
    constructor(news) {
        this.news = news;
    }

    html() {
        return `
        <div class="news">
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>
        `
    }

    json() {
        return JSON.stringify({
                    title: this.news.title,
                    text: this.news.text,
                    modified: this.news.modified
                }, null, 2)
    }
}

let printer = new PrintNews(new News('Доллар', 'Доллар упал'));
console.log(printer.html());
console.log(printer.json());

