window.onload = function (){
    let body = document.querySelector (`body`);
    let header = document.createElement(`header`);
    header.innerHTML =  `Hello`;
    body.prepend(header);

    header.setAttribute (`style`, `padding:50px`);
    header.style.backgroundColor = `yellow`;
    header.style.textAlign = `center`;

    const menuData = [
        { name: 'Головна', url: '/' },
        { name: 'Про нас', url: '/about' },
        { name: 'Послуги', url: '/services' },
    ];

    for (let element of menuData){
        let a = document.createElement (`a`);
        a.innerHTML = element.name;
        header.appendChild(a);
        a.setAttribute (`href` , element.url);

        a.setAttribute (`target`,`_blank`);
    };

    let divEl = document.createElement(`div`);
    body.appendChild (divEl);

    divEl.setAttribute(`style`,`display:flex`);

    for(let i = 0; i < 50; i ++) {
        let div = document.createElement(`div`);
        div.innerHTML = (i+1);
        divEl.appendChild(div);
        div.style.borderRadius = `50px`;
        div.style.width = `50px`;
        div.style.height = `50px`;
        div.style.backgroundColor = `grey`;
        div.setAttribute (`class`, `circle-elemt`);

        if (i%5==0){
                div.style.backgroundColor = `green`;
            }
        };
}
