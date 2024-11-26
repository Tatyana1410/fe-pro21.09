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
    let [...checkboxes]=document.querySelectorAll(`input[name="hobby"]`);
    checkboxes.forEach(checkbox=>{
        checkbox.addEventListener(`change`,function(e){
        const checkHobby = checkboxes.filter(i=>i.checked).map(i=>i.value);
        result.textContent = `Your hobby is ${checkHobby.join(`, `)}`;
    })
})
        
    

let country = document.querySelector(`#country`);
let resultCountry = document.querySelector(`.capital`);
country.addEventListener(`change`, function(){
    resultCountry.innerText=this.value;
});


let markRes = document.querySelector(`.mark`);
let [...BtnRadio] = document.querySelectorAll(`input[name="grade"]`);
BtnRadio.forEach(radioEl=>{
    radioEl.addEventListener(`change`,function(){
        markRes.textContent = `Your mark is ${this.value}`;
 })
})

  

// pizza
let name = document.querySelector(`#pizza`)
let [...radioSize]=document.querySelectorAll(`input[name="size"]`);
let [...checkAdd]=document.querySelectorAll(`input[name="filling"]`);
let one = document.querySelector(`.one`);
let two = document.querySelector(`.two`);
let three = document.querySelector(`.three`);
let four = document.querySelector(`.four`);

// Функція для оновлення ціни
function updatePrice() {
    let price = 0;

    // Додаємо ціну за вибір піци (якщо потрібно)
    if (name.value) {
        price += 5;
    }

    // Додаємо ціну за вибір розміру піци
    const selectedSize = radioSize.find(radio => radio.checked);
    if (selectedSize) {
        price += 5;
    }

    // Додаємо ціну за кожну вибрану начинку
    const selectedFillings = checkAdd.filter(checkbox => checkbox.checked);
    price += selectedFillings.length * 5;

    totalPrice = price;
    four.textContent = `Загальна ціна: ${totalPrice} грн`;
}

// Слухач подій для зміни назви піци
name.addEventListener(`change`, function(){
    one.innerHTML = `Ваша піца: ${this.value}`;
    updatePrice();
});

// Слухачі подій для вибору розміру
radioSize.forEach(radioEl => {
    radioEl.addEventListener(`change`, function(){
        two.textContent = `Розмір: ${this.value}`;
        updatePrice();
    });
});

// Слухачі подій для вибору начинки
checkAdd.forEach(checkbox => {
    checkbox.addEventListener(`change`, function(){
        const addCheck = checkAdd.filter(i => i.checked).map(i => i.value);
        three.textContent = `Начинки: ${addCheck.join(`, `)}`;
        updatePrice();
    });
});
}