const title = document.querySelector('#title');
const img = document.querySelector('#img');
const table = document.querySelector('#table');
const n = localStorage.getItem('IdBrand');
let tr, td;

if (database.logo[n]) {
    title.innerHTML += ' ' + database.logo[n];
    img.src = './img/img-logo/' + database.logo[n] + '.png';
}
createTr('Годы существования', database.years[n]);
createTr('Основатель', database.founder[n]);
createTr('Штаб-квартира', database.headquarters[n]);
createTr('Владелец\nРодительская компания', database.owner[n]);
createTr('Обзор', database.review[n]);

function createTr(text, object) {
    if (object) {
        tr = document.createElement('tr');
        createTd(text);
        createTd(object);
        table.appendChild(tr);
    }
}

function createTd(text) {
    td = document.createElement('td');
    td.innerHTML = text;
    tr.appendChild(td);
}