
// Get saved transactions from localStorage

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];


// Reusable function to save a transaction

function saveTransaction(type, amount, details) {

    const transaction = {
        id: Date.now(),
        type: type,
        amount: amount,
        details: details,
        date: new Date().toLocaleString(),
        status: "Successful"
    };

    // Add new transaction
    transactions.unshift(transaction);

    // Save transactions
    localStorage.setItem("transactions", JSON.stringify(transactions));

    // Display transactions
    displayTransactions();
}


// Display all transactions

function displayTransactions() {

    const transactionList = document.getElementById("transaction_list");

    // Clear previous content
    transactionList.replaceChildren();

    if (transactions.length === 0) {

        const emptyMessage = document.createElement("p");
        emptyMessage.className = "text-center text-sm text-gray-400";
        emptyMessage.textContent = "No transactions yet";

        transactionList.appendChild(emptyMessage);
        return;
    }

    transactions.forEach(function (item) {

        const card = document.createElement("div");

        card.className = "rounded-2xl bg-base-200 p-4";

        const topRow = document.createElement("div");
        topRow.className = "flex items-center justify-between gap-2";

        const type = document.createElement("h3");
        type.className = "font-semibold text-sm";
        type.textContent = item.type;

        const amount = document.createElement("p");
        amount.className = "font-bold text-sm";

        const isAddition = item.type === "Add Money";

        amount.classList.add(isAddition ? "text-success" : "text-error");

        amount.textContent =
            `${isAddition ? "+" : "-"} RM ${item.amount}`;

        const details = document.createElement("p");
        details.className = "mt-2 text-xs text-gray-500";
        details.textContent = item.details;

        const date = document.createElement("p");
        date.className = "mt-2 text-xs text-gray-400";
        date.textContent = item.date;

        const status = document.createElement("p");
        status.className = "mt-2 text-xs text-success";
        status.textContent = item.status;

        topRow.append(type, amount);

        card.append(topRow, details, date, status);

        transactionList.appendChild(card);

    });
}


// Load transaction history when page opens

displayTransactions();
