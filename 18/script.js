window.onload = function(){
    let form = document.querySelector(`.first`);
    let [...radio]=document.querySelectorAll(`input[name="color"]`);
    form.addEventListener(`change`,()=>{
        for(radioubutton of radio){
            if(radioubutton.checked){
                form.style.backgroundColor = radioubutton.value;
            }
        }
    });

    let result = document.querySelector(`.second`);
    let btn2 = document.querySelector(`.show`);
    let [...checkboxes]=document.querySelectorAll(`input[name="hobby"]`);
        btn2.addEventListener(`click`,function(e){
        e.preventDefault();
        checkedValue=[];
        checkboxes.forEach(item=>{
            if(item.checked){
            checkedValue.push(item.value)
            }
    })
        checkedValue.forEach(item=>{
        let p = document.createElement(`p`);
        p.innerText = item;
        result.appendChild(p);
    })
    });

let country = document.querySelector(`#country`);
let resultCountry = document.querySelector(`.capital`);
country.addEventListener(`change`, function(){
    resultCountry.innerText=this.value;
});

let formEl=document.querySelector(`.forth`);
let [...BtnRadio] = document.querySelectorAll(`input[name="grade"]`);
formEl.addEventListener(`change`, ()=>{
    for(radioubutton of BtnRadio){
        if(radioubutton.checked){
            let mark = document.createElement(`p`);
            mark.innerText=`Дякуємо за вашу оцінку! ${radioubutton.value}`;
            formEl.appendChild(mark);
            break;
        }
    }
})

// pizza
let pizza = document.querySelector(`.pizza-order`);
let name = document.querySelector(`#pizza`)
let [...radioSize]=document.querySelectorAll(`input[name="size"]`);
let [...checkAdd]=document.querySelectorAll(`input[name="filling"]`);
let add = document.querySelector(`.addBtn`);
let p = document.querySelector(`.yourAdd`);
let one = document.querySelector(`.one`);
let two = document.querySelector(`.two`);
let three = document.querySelector(`.three`);
let four = document.querySelector(`.four`);

name.addEventListener(`change`, function(){
    one.innerHTML=this.value;
    four.innerText=this.price;
});
pizza.addEventListener(`change`, function(){
    for(radioubutton of radioSize){
        if(radioubutton.checked){
            two.innerHTML=radioubutton.value;
            break;
        }
    }
});
add.addEventListener(`click`, function(e){
    e.preventDefault();
    checkVal = [];
    checkAdd.forEach(item=>{
        if(item.checked){
            checkVal.push(item.value)
        }
        checkVal.forEach(item=>{
            let li= document.createElement(`li`);
            li.innerText=item;
            three.appendChild(li);
        })
    })
})

}