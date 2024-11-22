window.onload = function(){
    let btn = document.createElement(`button`);
    btn.style.padding = `20px`;
    let p = document.createElement (`p`);
    p.textContent = `Hello`;
    function getRandomColor(){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    };
    btn.onclick = function(){
        p.style.color = getRandomColor();
    };
    document.body.appendChild(btn);
    document.body.appendChild(p);

    let btn2 = document.createElement (`button`);
    btn2.innerText = `push`;
    btn2.style.width = `40px`;
    btn2.style.height = `25px`;
    btn2.ondblclick = function(e){
        btn2.style.width = `80px`;
        btn2.style.height = `50px`;
    };
    document.body.appendChild (btn2);

    let btn3 = document.createElement (`button`);
    let p2 = document.createElement (`p`);
    let x =0;
    p2.innerText = x;
    function counter(){
        x++;
        p2.innerText = x;
        if(x>9){
            btn3.removeEventListener(`click`,counter)
        }
    }
    btn3.addEventListener(`click`,counter);
        
    document.body.appendChild(btn3);
    btn3.appendChild(p2);

  function div10(){
        let btn4 = document.createElement(`button`);
        for(let i = 0; i < 10; i ++) {
            let div = document.createElement(`div`);
            div.innerHTML = (i+1);
            div.style.display = `inline-flex`;
            div.style.margin = `10px`;
            div.style.width = `50px`;
            div.style.height = `50px`;
            div.style.backgroundColor = `grey`;
            btn4.style.padding = `40px`;
            document.body.appendChild(div);
            document.body.appendChild(btn4);
            btn4.onclick = function(){
                btn4.remove();
            };
            div.onclick = function(){
                div.remove();
            };
    };
};
div10();
let block = document.querySelector(`.container`)
let btnEl1 = document.querySelector(`.first`);
btnEl1.style.padding = `50px`;
let btnEl2 = document.querySelector(`.second`);
btnEl2.style.padding = `50px`;
let btnEl3 = document.querySelector(`.third`);
btnEl3.style.padding = `50px`;
   block.addEventListener(`click`, function(){
    btnEl1.onclick = function(){
        alert(`Button 1`);
    };
    btnEl2.onclick = function(){
        alert(`Button 2`);
    };
    btnEl3.onclick = function(){
        alert(`Button 3`);
    };
   });
}
