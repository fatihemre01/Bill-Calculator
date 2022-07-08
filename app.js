const billTotalInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotal = document.getElementById("perPersonTotal")

let numberOfPeople = Number(numberOfPeopleDiv.innerText)


const calculateBill = () => {
    // get bill from user input & convert it into a number
    let bill = Number(billTotalInput.value)

    // get the tip from user & convert it into a percentage (divide by 100)
    let tipPercentage = Number(tipInput.value) / 100

    // get the total tip amount
    let tipAmount = tipPercentage * bill

    // calculate the total (tip amount + bill)
    let result = bill + tipAmount
    
    // calculate the per person total (total divided by number of people)
    let total = result / numberOfPeople

    // update the perPersonTotal on DOM & show it to user
    perPersonTotal.innerText = `$${total.toFixed(2)}`
}

const increasePeople = () => {
    // increment the amount of people
    numberOfPeople += 1
    
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}

const decreasePeople = () => {
    // guard clause
    if(numberOfPeople <= 1){
        return
    }

    // decrement the amount of people
    numberOfPeople -= 1
    
    // update the DOM with the new number of people
    numberOfPeopleDiv.innerText = numberOfPeople

    // calculate the bill based on the new number of people
    calculateBill()
}