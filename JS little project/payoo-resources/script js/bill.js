
document.getElementById("pay_bill_btn").addEventListener("click", function () {

    // Select Bill Category
    const BillType = getInputValue("bill_type");

    if (BillType === "") {
        alert("Please Select a Bill Category");
        return;
    }

    // Biller Account Number
    const BillerAccount = getInputValue("biller_account").trim();

    if (BillerAccount === "") {
        alert("Please Enter Biller Account Number");
        return;
    }

    // Amount to Pay
    const BillAmount = getInputValue("bill_amount").trim();

    if (BillAmount === "") {
        alert("Please Enter the Payment Amount");
        return;
    }

    const BillAmountNumber = Number(BillAmount);

    if (!Number.isFinite(BillAmountNumber) || BillAmountNumber <= 0) {
        alert("Please Enter a Valid Amount");
        return;
    }

    // Main Balance
    const MainMoneyValue = getmainbalance();

    if (BillAmountNumber > MainMoneyValue) {
        alert("You Do Not Have Enough Money");
        return;
    }

    // PIN Authentication
    const BillPin = getInputValue("bill_pin").trim();

    if (!/^\d{4}$/.test(BillPin)) {
        alert("Please Enter a Correct 4 Digit PIN");
        return;
    }

    // Calculate Remaining Balance
    const BillResultBalance = MainMoneyValue - BillAmountNumber;

    // Update Main Balance
    setValue(BillResultBalance);

    alert("Your Bill Payment Successfully Completed!");

});
