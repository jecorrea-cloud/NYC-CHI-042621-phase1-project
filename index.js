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


function getTemplates() {
    fetch('http://localhost:3000/templates')
        .then((res) => res.json())
        .then((templatesArray) => {
            templatesArray.forEach((templateObj) => {
                let pizzaName = templateObj.pizza_name;
                let spanElement = document.createElement('span');
                spanElement.innerText = pizzaName;
                topNav.append(spanElement);

                spanElement.addEventListener('click', () => {
                    crustInput.value = templateObj.crust;
                    sauceInput.value = templateObj.sauce;
                    firstToppingInput.value = templateObj.first_topping;
                    secondToppingInput.value = templateObj.second_topping;
                    thirdToppingInput.value = templateObj.third_topping;
                    beverageInput.value = templateObj.beverage;
                    selectCheese.value = templateObj.cheese;
                }
                )
            }
            )
        }
        )
}
getTemplates()

function createOrder() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let newTimestamp = generateTimestamp().toUTCString()
        let newName = nameInput.value
        let newLastname = lastNameInput.value
        let newCard = paymentInfoInput.value
        let newDeliveryAddress = deliveryAddressInput.value
        let newCrust = crustInput.value
        let newSauce = sauceInput.value
        let newFirstTopping = firstToppingInput.value
        let newSecondTopping = secondToppingInput.value
        let newThirdTopping = thirdToppingInput.value
        let newBeverage = beverageInput.value
        let newCheeseOpt = selectCheese.value
        fetch("http://localhost:3000/pizzas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                timestamp = newTimestamp,
                first_name = newName,
                last_name = newLastname,
                payment_info = newCard,
                delivery_address = newDeliveryAddress,
                crust = newCrust,
                sauce = newSauce,
                first_topping = newFirstTopping,
                second_topping = newSecondTopping,
                third_topping = newThirdTopping,
                beverage = newBeverage,
                extra_cheese = newCheeseOpt
            ),
        })
        e.target.innerHTML = ``
        showOrder()
    })
}

function generateTimestamp(){
    let date = new Date()
    return date
}

createOrder()