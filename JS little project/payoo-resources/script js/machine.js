
// Reusable function: Get input value
function getInputValue(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// Get current balance
function getmainbalance() {
    const main_balance = document.getElementById("Main_Amount");
    const mainBlanceValue = main_balance.innerText;
    return Number(mainBlanceValue);
}

// Update balance
function setValue(value) {
    const balanceElement = document.getElementById("Main_Amount");
    balanceElement.innerText = value;
}

// work with card to hide the form

function showOnly(id) {

    // Get the Add Money and Cash Out forms
    const addMoneyForm = document.getElementById("add_money_form");
    const cashOutForm = document.getElementById("cashout_form");
    const transferMoney = document.getElementById("transfer_money_form");
    const payBill = document.getElementById("pay_bill_form")
    const transactionForm  = document.getElementById("transaction_form")

    // Hide both forms
    addMoneyForm.classList.add("hidden");
    cashOutForm.classList.add("hidden");
    transferMoney.classList.add("hidden");
    payBill.classList.add("hidden");
    transactionForm.classList.add("hidden")


    // Show the selected form
    const selectedForm = document.getElementById(id);
    selectedForm.classList.remove("hidden");

}