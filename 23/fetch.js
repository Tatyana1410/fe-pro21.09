window.onload = function(){
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        .then(response =>response.json())
        .then(data=>{
            data.forEach(element => {
                let divEl = document.createElement('div');
                divEl.innerHTML = `
                <h3>${element.id}</h3>
                <p>${element.title}</p>`;
                document.body.appendChild(divEl);
            });
        })
        .catch(error=>{
            console.log(error);
        });



    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then(data=>{
            let divEl = document.createElement('div');
            divEl.innerHTML = `
                <h3>${data.name}</h3>
                <h2>${data.username}</h2>
                <p>${data.email}</p>`;
                document.body.appendChild(divEl);
        })
        .catch(error=>{
            console.log(error);
        });
        



    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response =>response.json())
        .then(data=>{
            data.forEach(element => {
                let divEl = document.createElement('div');
                divEl.innerHTML = `<h3>${element.title}</h3>`;
                document.body.appendChild(divEl);
                });
            })
        .catch(error=>{
            console.log(error);
            });

    let card = document.querySelector(`.card-info`);
    let block = document.querySelector(`.card`);
    block.style.display=`none`;
    let list = document.querySelector(`.first-list`);
    let listFilms = document.querySelector(`.second-list`);
    let btn = document.querySelector(`button`);

    

    btn.addEventListener(`click`, function(){
        block.style.display = `block`;
    fetch('https://swapi.dev/api/planets/1/')
        .then(response =>response.json())
        .then(data=>{
                let p = document.createElement('p');
                p.innerHTML = `
                Name: ${data.name},<br> 
                Diametr: ${data.diameter},<br>
                Population: ${data.population}`;
                card.prepend(p);
   
                data.residents.forEach(element=>{
                    let liEl = document.createElement('li');
                    let a = document.createElement(`a`);
                    a.innerHTML = element;
                    a.setAttribute (`href`,element);
                    list.appendChild(liEl);
                    liEl.appendChild(a)
                })
                data.films.forEach(element=>{
                    let liEl = document.createElement('li');
                    let a = document.createElement(`a`);
                    a.innerHTML = element;
                    a.setAttribute (`href`,element);
                    listFilms.appendChild(liEl);
                    liEl.appendChild(a)
                })
                })
            })    
        .catch(error=>{
            console.log(error);
            });

}