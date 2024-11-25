window.onload=function(){
    // 1
    time=1000;
    sayHi=`hello`
    setTimeout(function(sayHi, time) {
        console.log(sayHi)
      }, time, sayHi)
      
    // 2
    let btnTime = document.querySelector(`.timer`);
    let p = document.querySelector(`p`);
    btnTime.onclick =  function (){
        let i=0;
        let count = setInterval(function (){
            i++;
            p.innerHTML = i;
            if(i>9){ 
            clearInterval(count)
            }
        }, 1000)
    }

        // 3
    function getRandomColor (){
        const r =Math.floor(Math.random()*256);
        const g =Math.floor(Math.random()*256);
        const b =Math.floor(Math.random()*256);
        return `rgb(${r},${g},${b})`;
    };
    let btnColor = document.querySelector(`.getColor`);
    btnColor.onclick=function(){
        let root = document.documentElement;
        root.style.setProperty(`--bg-color`, getRandomColor());
    }

    btnOn =document.querySelector(`.time-button-on`);
    btnOff=document.querySelector(`.time-button-off`);
    pEl = document.querySelector(`.time-tablo-text`);
    btnOn.addEventListener(`click`, start);
    btnOff.addEventListener(`click`,reset);
        function start(){
        let i=25;
        count = setInterval(function(){
            i--;
            pEl.innerHTML = (`${i}:00`);
            if(i<1){ 
            clearInterval(count)
            }
        }, 1000)}
        function reset(){
            clearInterval(count);
            pEl.innerHTML = (`25:00`);
            
    }
        
   


}