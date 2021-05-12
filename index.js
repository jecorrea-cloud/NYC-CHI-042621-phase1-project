const topNav = document.querySelector("div.topnav")
    let meatLoversSpan = topNav.querySelector("span#meatlovers")
    let veggieSpan = topNav.querySelector("span#veggie")
    let chickenAlfredoSpan = topNav.querySelector("span#chicken-alfredo")
    let buildYourOwnSpan = topNav.querySelector("span#build-your-own")

const form = document.querySelector('form#customer-info-form')
    let nameInput = form.querySelector("input#name-input")
    let lastNameInput = form.querySelector("input#lastname-input")
    let deliveryAddressInput = form.querySelector("input#delivery-address-input")
    let paymentInfoInput = form.querySelector("input#payment-info-input")
    let crustInput = form.querySelector("input#crust-input")
    let sauceInput = form.querySelector("input#sauce-input")
    let firstToppingInput = form.querySelector("input#first-topping")
    let secondToppingInput = form.querySelector("input#second-topping")
    let thirdToppingInput = form.querySelector("input#third-topping")
    let beverageInput = form.beverage 
    let selectCheese = form.querySelector("select#extra-cheese")


meatLoversSpan.addEventListener("click", () =>{
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzasArray => {
        crustInput.value =  pizzasArray[0].crust
        sauceInput.value = pizzasArray[0].sauce
        firstToppingInput.value = pizzasArray[0].first_topping
        secondToppingInput.value = pizzasArray[0].second_topping
        thirdToppingInput.value = pizzasArray[0].third_topping
        beverageInput.value = pizzasArray[0].beverage
        selectCheese.value = pizzasArray[0].extra_cheese
    })
})

veggieSpan.addEventListener("click", () =>{
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzasArray => {
        crustInput.value =  pizzasArray[1].crust
        sauceInput.value = pizzasArray[1].sauce
        firstToppingInput.value = pizzasArray[1].first_topping
        secondToppingInput.value = pizzasArray[1].second_topping
        thirdToppingInput.value = pizzasArray[1].third_topping
        beverageInput.value = pizzasArray[1].beverage
        selectCheese.value = pizzasArray[1].extra_cheese
    })
})

chickenAlfredoSpan.addEventListener("click", () =>{
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzasArray => {
        crustInput.value =  pizzasArray[2].crust
        sauceInput.value = pizzasArray[2].sauce
        firstToppingInput.value = pizzasArray[2].first_topping
        secondToppingInput.value = pizzasArray[2].second_topping
        thirdToppingInput.value = pizzasArray[2].third_topping
        beverageInput.value = pizzasArray[2].beverage
        selectCheese.value = pizzasArray[2].extra_cheese
    })
})

buildYourOwnSpan.addEventListener("click", () =>{
    fetch("http://localhost:3000/pizzas")
    .then(res => res.json())
    .then(pizzasArray => {
        crustInput.value =  pizzasArray[3].crust
        sauceInput.value = pizzasArray[3].sauce
        firstToppingInput.value = pizzasArray[3].first_topping
        secondToppingInput.value = pizzasArray[3].second_topping
        thirdToppingInput.value = pizzasArray[3].third_topping
        beverageInput.value = pizzasArray[3].beverage
        selectCheese.value = pizzasArray[3].extra_cheese
    })
})