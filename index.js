const topNav = document.querySelector("div.topnav")
    let meatLoversSpan = topNav.querySelector("span#Meatlovers")
    let customSpan = topNav.querySelector("span#Custom")

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
    fetch("http://localhost:3000/pizza_orders")
    .then(res => res.json())
    .then(ordersArray => {
        console.log("Helllooooooo")
        crustInput.value =  ordersArray[0].crust
        sauceInput.value = ordersArray[0].sauce
        firstToppingInput.value = ordersArray[0].first_topping
        secondToppingInput.value = ordersArray[0].second_topping
        thirdToppingInput.value = ordersArray[0].third_topping
        beverageInput.value = ordersArray[0].beverage
        selectCheese.value = ordersArray[0].extra_cheese
    })
})