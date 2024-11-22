window.onload = function(){
    let div1 = document.querySelector(`div`);
    div1.style.background = `yellow`;
    div1.style.height = `200px`
    div1.style.width = `200px`;
    div1.onmouseover = function(){
        div1.style.background = 'pink';
    div1.onmouseout = function(e) {
            let target = e.target;
            target.style.background = 'yellow';
          };
    };

    let pEl = document.querySelector(`p`);
    let ul = document.querySelector(`ul`);
    pEl.style.padding = `40px`;
    ul.style.display = 'none';
    pEl.addEventListener('contextmenu', function(e){
        e.preventDefault();
        ul.style.display = 'block'; 
        ul.style.top = `${e.clientY}px`;
        ul.style.left = `${e.clientX}px`;
        window.addEventListener('click', () => {
        ul.style.display = 'none'});
        
    });

    let img = document.querySelector(`img`);
    img.style.width = `300px`;
    img.onmouseover = function(e){
        let i=300
        img.style.width = `${i*2}px`;
        img.style.cssText = "box-shadow: 0px 0px 100px rgba(239, 68, 59, 0.4);";
    };
    img.onmouseout = function(e){
        let i = 300
        img.style.cssText = "box-shadow: 0";
        img.style.width = `${i}px`;
    };

    let main = document.querySelector(`.main`);
    let child = document.querySelector(`.child`);
    let left=0;
    let top=0;
    
    document.addEventListener(`keydown`,function(e){
        // console.log(e);
        if(e.key=="ArrowLeft"){
            left = Math.max(0,left -5)
            child.style.left = left + `px`;
            // left=left-5;
        }
        else if (e.key=="ArrowDown"){
            // top=top+5;
            top = Math.min(main.clientHeight-child.clientHeight, top+5)
            child.style.top = top + `px`;
        }
        else if (e.key=="ArrowRight"){
            // left=left+5;
            left=Math.min(main.clientWidth-child.clientWidth, left+5)
            child.style.left = left + `px`;
        }
        else if (e.key=="ArrowUp"){
            // top=top-5;
            top = Math.max(0, top-5)
            child.style.top = top + `px`;
        }
    })

// как стрелками переходить по меню не поняла

    let menuInt = document.querySelector(`.menu`);
    // let li = document.querySelector(`.first`);
    menuInt.style.display = 'none';
    document.onkeydown =  function(e){
        if(e.key ==='m'){
        menuInt.style.display = 'block'; }
        // li.focus(); 
        // menuInt.style.top = `${e.clientY}px`;
        // menuInt.style.left = `${e.clientX}px`;}
        if(e.key ==='c')
        menuInt.style.display = 'none';
    };

    
    let mouse = document.querySelector(`.mouse`);
    // let house = document.querySelector(`.house`);
    mouse.addEventListener (`mousedown`, function(event) {
        let x = event.pageX-mouse.style.left-20;
        let y = event.pageY-mouse.style.top-20;
        moveM(event);
        function moveM(event){
            mouse.style.left = event.clientX - x + 'px';
            mouse.style.top = event.clientY - y + 'px';
        }
        mouse.addEventListener(`mousemove`, function(event){
            moveM(event);
        })
        
        mouse.addEventListener('mouseup', function(event){

        })
    
    })
}