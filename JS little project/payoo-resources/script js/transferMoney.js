document.getElementById("transfer_btn").addEventListener("click", function(){

    // console.log("add");

    const UserAccountNUmber = getInputValue("user_account").trim();

    if(UserAccountNUmber.length !== 11 || !/^\d+$/.test(UserAccountNUmber)){
        alert("Please Enter you 11 digit Number")
        return;
    }



    //Amount of the user

    const TransFerValue = getInputValue("transfer_amount").trim();
    const transferMoneyNumber = Number(TransFerValue)
    const MainMoneyVlaue = getmainbalance()

    

    if(transferMoneyNumber === ""){
        alert("please Enter the value")
        return;
    }

    if (transferMoneyNumber <= 0 || !Number.isFinite(transferMoneyNumber)) {
    alert("Please enter a valid amount");
    return;
    }
    

    // pin authencation

 // PIN Authentication

        const Pin4digit = getInputValue("transfer_pin").trim();

        if (Pin4digit === "" || Pin4digit.length !== 4 || !/^\d{4}$/.test(Pin4digit)) {

            alert("Please Enter a Correct 4 Digit PIN");
            return;

        } else {

            const transferResultBalance = MainMoneyVlaue - transferMoneyNumber;

            setValue(transferResultBalance);

            alert("Your Money Transfer Successfully");

            return;
        }  
     

    

});