//GLOBAL VARIABLES
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

const orderContainerDiv = document.querySelector("div#order-container")
let editButton = document.createElement("BUTTON")
editButton.innerHTML = `EDIT ORDER`
let deleteButton = document.createElement("BUTTON")
deleteButton.innerHTML = `CANCEL ORDER`



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
        
        fetch(`http://localhost:3000/pizzas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                timestamp : newTimestamp,
                first_name : newName,
                last_name : newLastname,
                payment_info : newCard,
                delivery_address : newDeliveryAddress,
                crust : newCrust,
                sauce : newSauce,
                first_topping : newFirstTopping,
                second_topping : newSecondTopping,
                third_topping : newThirdTopping,
                beverage : newBeverage,
                extra_cheese : newCheeseOpt
        }), }).then(r => r.json())
        .then(pizzaObj => {
            getOrderDetails(pizzaObj)
            }
            )
})
            

function getOrderDetails(pizzaObj){
    fetch(`http://localhost:3000/pizzas/${pizzaObj.id}`)
    .then(r=> r.json())
    .then(pizzaObj => {
        confirmedOrderDetailsUl = document.createElement("UL")
        confirmedOrderDetailsUl.innerHTML = `
        <li>CUSTOMER: ${pizzaObj.first_name} ${pizzaObj.last_name} </li>
        <li>PIZZA</li>
        <li>TOPPINGS: ${pizzaObj.first_topping} ${pizzaObj.second_topping} ${pizzaObj.third_topping} </li>
        <li>BEVERAGE: ${pizzaObj.beverage} </li>
        `

        orderContainerDiv.append(confirmedOrderDetailsUl, editButton, deleteButton)

        editButton.addEventListener("click", (e) =>{
            console.log("HI")
            let newEditForm = document.createElement("FORM")
            let firstToppingEdit = document.createElement("INPUT")
            let secondToppingEdit = document.createElement("INPUT")
            let thirdToppingEdit = document.createElement("INPUT")
            let beverageEdit = document.createElement("input")
            firstToppingEdit.setAttribute("id", "firstEdit")
            firstToppingEdit.setAttribute("type", "text")
            firstToppingEdit.setAttribute("placeholder", "Edit first topping")
            secondToppingEdit.setAttribute("id", "secondEdit")
            secondToppingEdit.setAttribute("type", "text")
            secondToppingEdit.setAttribute("placeholder", "Edit second topping")
            thirdToppingEdit.setAttribute("id", "thirdEdit")
            thirdToppingEdit.setAttribute("type", "text")
            thirdToppingEdit.setAttribute("placeholder", "Edit third topping")
            beverageEdit.setAttribute("id", "beverageEdit")
            beverageEdit.setAttribute("type", "text")
            beverageEdit.setAttribute("placeholder", "Edit your soda")
        
            newEditForm.append(firstToppingEdit, secondToppingEdit, thirdToppingEdit, beverageEdit)
            orderContainerDiv.append(newEditForm)            
        
            /*
                fetch(`http://localhost:3000/pizzas/${pizzaObj.id}`, {
                    method: "PATCH",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        first_topping : firstToppingEdit.value,
                        second_topping : secondToppingEdit.value,
                        third_topping : thirdToppingEdit.value,
                        beverage : beverageEdit.value
                    }),
                    })
                    .then((r) => r.json())
                    .then((pizzaObj) => { getOrderDetails(pizzaObj) });
            */
        
        })
    })

}
       


    

function generateTimestamp(){
    let date = new Date()
    return date
}
