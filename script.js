let totalAmount = document.getElementById('total-amount');
let userAmount = document.getElementById("user-amount");

const checkAmountButton = document.getElementById("check-button");
const totalAmountButton = document.getElementById("total-amount-button");

const productTitle = document.getElementById("product-title");

const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");

const list = document.getElementById("list");

let tempAmount = 0;
totalAmountButton.addEventListener("click",() => {
    console.log("Enter button clicked");

    tempAmount = totalAmount.value;

    if(tempAmount < 0 || tempAmount == ""){
        console.log("Invalid Input");
    }else{
        amount.innerHTML = tempAmount;
        balanceValue.innerText = tempAmount - expenditureValue.innerText;
        totalAmount.value = "";
    }
})

const listCreator = (expenseName,expenseValue) => {
    let newRow = document.createElement("tr");

    let titleCell = document.createElement("td");
    titleCell.textContent = expenseName;
    newRow.appendChild(titleCell);

    let valueCell = document.createElement("td");
    valueCell.textContent = expenseValue;
    newRow.appendChild(valueCell);

    let actionCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "50px";

    deleteButton.addEventListener("click",() => {
        delRow(newRow)
    })

    actionCell.appendChild(deleteButton);
    newRow.appendChild(actionCell);

    document.getElementById("list").appendChild(newRow);
}

checkAmountButton.addEventListener("click",() => {
    console.log("Add Expense button clicked");

    let expenditure = parseInt(userAmount.value);

    let sum = parseInt(expenditureValue.innerText) + expenditure;

    expenditureValue.innerText = sum;

    const totalBalance = tempAmount - sum;
    balanceValue.innerText = totalBalance;
    listCreator(productTitle.value,userAmount.value)

    productTitle.value = "";
    userAmount.value = "";
})

//Delete row
const delRow = (element) => {
    element.remove();
}