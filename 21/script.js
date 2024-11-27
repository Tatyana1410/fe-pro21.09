window.onload=function(){

    // 1
    let text = document.querySelector(`.session`);
    let save = document.querySelector(`.save`);
    let look = document.querySelector(`.look`);
    let p = document.querySelector(`p`);
    save.onclick = function(e){
        sessionStorage.setItem("save",text.value);
        text.value=``;
    }
    look.onclick = function(){
        p.innerHTML=sessionStorage.getItem("save");
    };

    // 2
    let select = document.querySelector(`select`);
    let colorChange = document.querySelector(`.change`);
    select.onclick=()=>{
        localStorage.setItem(`background-color`, select.value);
        colorChange.style.backgroundColor = localStorage.getItem(`background-color`);
    }
    colorChange.style.backgroundColor = localStorage.getItem(`background-color`);


    // 3
    let task = document.querySelector(`.task`);
    let btnTask = document.querySelector(`.add-task`);
    let todo = document.querySelector(`.to-do`);
    let saveRes=document.querySelector(`h4`);
    btnTask.onclick = function(e){
        e.preventDefault();
        localStorage[`task`]=task.value;
        // localStorage.setItem("task",task.value);
        task.value=``;
        let taskResult = document.createElement(`li`);
        taskResult.innerHTML=localStorage[`task`];
        todo.appendChild(taskResult);
        console.log(localStorage[`task`])
        };
    
    saveRes.innerHTML = localStorage[`task`]; 
    
    
    
    // let result = document.querySelector(`.result`);
    // let [...checkboxes]=document.querySelectorAll(`input[name="todo"]`);
    // checkboxes.forEach(checkbox=>{
    //     checkbox.addEventListener(`change`,function(e){
    //     const checkHobby = checkboxes.filter(i=>i.checked).map(i=>i.value);
    //     result.textContent = checkHobby.join(`, `);
    //     localStorage.setItem(`must to do`,checkHobby);
    //     })
    // });
    // result.textContent = localStorage.getItem(`must to do`);
    
    // 4
    let cap = {
        color: "Red",
        volume: 300,
        hasImage: true,
        arr:[1,2],
    }
    let newJson = JSON.stringify(cap);
    console.log(newJson);
}