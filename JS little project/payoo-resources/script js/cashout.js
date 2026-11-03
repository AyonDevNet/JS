


// Cash Out button
document.getElementById("CashOut").addEventListener("click", function () {

    // Agent number
    const AgentNumberValue = getInputValue("agent_number").trim();

    if (AgentNumberValue.length !== 11 || !/^\d+$/.test(AgentNumberValue)) {
        alert("Agent number must contain exactly 11 digits");
        return;
    }

    // Amount
    const AmountNumberValue = getInputValue("Amount_Number").trim();

    if (AmountNumberValue === "") {
        alert("Please enter an amount");
        return;
    }

    const AmountNumberValueNumber = Number(AmountNumberValue);

    if (!Number.isFinite(AmountNumberValueNumber) || AmountNumberValueNumber <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    //  CHANGED 1: Get balance using your reusable function
    const mainAmountValueNumber = getmainbalance();

    // Check available balance
    if (AmountNumberValueNumber > mainAmountValueNumber) {
        alert("Insufficient balance");
        return;
    }

    // PIN
    const Password_NumberValue = getInputValue("Pin_Number").trim();

    if (Password_NumberValue.length !== 4 || !/^\d+$/.test(Password_NumberValue)) {
        alert("PIN must contain exactly 4 digits");
        return;
    }

    // Calculate new balance
    const result = mainAmountValueNumber - AmountNumberValueNumber;

    // CHANGED 2: Update balance using your reusable function
    setValue(result);

    alert("Cashout successfully");
});




// this portion code of without use the resuable function       
    // document.getElementById("CashOut").addEventListener("click" , function(){

    //     // console.log("add");

    //     // Agent number value and validated check
    //     const AgentNumber = document.getElementById("agent_number");
    //     const AgentNumberValue = AgentNumber.value.trim();
    //     console.log(AgentNumberValue)
        
    //     //validated check
    //     if (AgentNumberValue !=11 || AgentNumberValue === "" || AgentNumberValue <= 0) {
    //     alert("Agent Number Must 11");
    //     return;
    //     }

    //     //amount input check
    //     // if () {  
    //     // alert("Please enter a valid amount");
    //     // return;
    //     // }


    
    //     //Amount of the value
    //     const AmountNumber = document.getElementById("Amount_Number");
    //     const AmountNumberValue = AmountNumber.value.trim();
    //     // console.log(AmountNumberValue);


    //     //main amount

    //     const mainAmount = document.getElementById("Main_Amount");
    //     const mainAmountValue = mainAmount.innerText;
    //     // console.log(mainAmountValue)  


    //     // convert to number and equation

    //     const AmountNumberValueNumber = Number(AmountNumberValue);
    //     const mainAmountValueNumber = Number(mainAmountValue);

    
        
    //     // PIN Number validation
    //         const Password_Number = document.getElementById("Pin_Number");
    //         const Password_NumberValue = Password_Number.value.trim();

    //         if (Password_NumberValue !=4 || Password_NumberValue === "") {
    //             alert("PIN must contain exactly 4 digits");
    //             return;
    //         }

    //         // Update main amount
    //         const result = mainAmountValueNumber - AmountNumberValueNumber;

    //         mainAmount.innerText = result;

    //         alert("Cashout successfully");

          

        

    // })