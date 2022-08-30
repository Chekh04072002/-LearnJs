let cars = [
    {id: 1, title: 'R8', price: 12000000, img: 'pict/17.jpg'},
    {id: 2, title: 'M4', price: 5500000, img: 'pict/5377b45a41718.jpg'},
    {id: 3, title: '3er', price: 1200000, img: 'pict/2968506.jpg'}
];

const toHTML = car => `
        <div class="col">
            <div class="card">
                <img src="${car.img}" style="max-width: 33vw; max-height: 50vh" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${car.title}</h5>
                    <a href="#" class="btn btn-primary" data-btn="price" data-id="${car.id}">Посмотреть</a>
                    <a href="#" class="btn btn-danger" data-btn="remove" data-id="${car.id}">Удалить</a>
                </div>
            </div>
        </div>`

function render() {
    const html = cars.map(car => toHTML(car)).join('');
    document.querySelector('#cars').innerHTML = html;
}


render();



const myModal = $.modal({
    title: 'Цена авто',
    closable: true,
    width: '400px',
    footerButtons: [
        {text: 'Okey', type: 'primary', handler() {
                console.log('Okey btn Clicked');
                myModal.close();
            }}
    ]
});




document.addEventListener('click', event => {
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;
    const car = cars.find(car => car.id === id);
    if (btnType === 'price') {
        myModal.setContent(`
        <img src="${car.img}" style="max-width: 100%">
        <p>Цена на ${car.title} = ${car.price} рублей</p>
        `)
        myModal.open();
        console.log(car);
    }
    else if (btnType === 'remove') {
        $.confirm({
            title: `Точно удалить?`,
            content: `<p>Удаляется ${car.title}</p>`
        }).then(() => {
                cars = cars.filter(c => c.id !== id)
                render();
            }).catch(() => {
                console.log('cancel');
            })
    }
})


