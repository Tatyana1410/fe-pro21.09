window.onload  = function(){
    let sum = document.querySelector(`#sum`);
    let valut = document.querySelector(`#exchange`);
    let btn = document.querySelector(`button`);
    btn.addEventListener(`click`, function(){
        x=sum.value*valut.value;
        alert (x);
    });

    let task = document.querySelector(`.new`);
    let btn2 = document.querySelector(`.add`);
    let result = document.querySelector(`.res`);
    btn2.addEventListener(`click`, function(e){
        e.preventDefault();
        let li = document.createElement(`li`);
        li.innerHTML = task.value;
        result.appendChild(li);
    li.addEventListener(`click`, function(e){
            li.remove();
})
})
} 

        


