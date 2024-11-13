window.onload = function(){
    let ulEl = document.querySelectorAll(`#tree > li`);
    console.log(ulEl.length);
    // let liEl = document.querySelectorAll(`#tree > li > ul`);

    let countEl = document.querySelectorAll(`#tree > li > ul`).length
    console.log(countEl);



const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

let table = document.querySelector('table');
for (let book of booksArray){
    let tr= document.createElement (`tr`)
    let td1 = document.createElement(`td`);
    td1.innerHTML = book.title;
    tr.appendChild(td1);

    let td2 = document.createElement(`td`);
    td2.innerHTML = book.year;
    tr.appendChild(td2);

    let td3 = document.createElement(`td`);
    td3.innerHTML = book.rating;
    tr.appendChild(td3);
    table.appendChild (tr);
}


const elementsArray = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
]
let container = document.querySelector(`div`);
           
         function fn (obj) {  
            let arr1 = Object.values(obj);
            let el = document.createElement (arr1[0]);
            el.innerHTML = (arr1[1]);
            container.appendChild (el)
         }
    for (let tags of elementsArray){
        fn(tags);
    }
            
     
 const elementArray = [
                { text: 'Елемент 1', usePrepend: true },
                { text: 'Елемент 2', usePrepend: false },
                { text: 'Елемент 3', usePrepend: true }
            ]
    let block = document.querySelector (`section`)
            for (let element of elementArray ){
                let p = document.createElement (`p`);
                p.innerHTML = element.text;
                if(element.usePrepend===true){
                    block.after (p)}
                 else block.before (p)};

}





