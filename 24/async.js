window.onload = function(){
    async function getId() {
        let res = await fetch (`https://jsonplaceholder.typicode.com/users/1`);
        let data = await res.json();
        let divEl = document.createElement('div');
                divEl.innerHTML = `
                <p>${data.name}</p>
                <p>${data.email}</p>`;
                document.body.appendChild(divEl);
            };
    getId();

    async function getFilm() {
        let res = await fetch('https://swapi.dev/api/films/4/');
        let data = await res.json();
        let divEl = document.createElement('div');
                divEl.innerHTML = `
                <p>${data.title}</p>
                <p>${data.release_date}</p>`;
                document.body.appendChild(divEl);
            };
    getFilm();

    async function getPlanet() {
        let res = await fetch('https://swapi.dev/api/planets/3/');
        let data = await res.json();
        let divEl = document.createElement('div');
                divEl.innerHTML = `
                <p>${data.name}</p>
                <p>${data.climate}</p>`;
                document.body.appendChild(divEl);
            };
    getPlanet();
}