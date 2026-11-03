
document.getElementById("add_button").addEventListener("click", function(){

    document.getElementById("add_button").addEventListener("click", function () {
  // 1. Bank
  const bankList = getInputValue("bank_list");
  if (bankList === "Select bank") {
    alert("Please select your bank");
    return;
  }

  // 2. Bank account: exactly 11 digits
  const bankAccount = getInputValue("bank_account").trim();
  if (!/^\d{11}$/.test(bankAccount)) {
    alert("Please enter a valid 11-digit bank account number");
    return;
  }

  // 3. Amount: must be a positive number
  const userAmount = Number(getInputValue("amount_number"));
  if (!Number.isFinite(userAmount) || userAmount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  // 4. PIN: exactly 4 digits
  const pinNumber = getInputValue("pin_Number").trim();
  if (!/^\d{4}$/.test(pinNumber)) {
    alert("Please enter a valid 4-digit PIN");
    return;
  }

  // 5. All valid: update balance
  const mainBalance = getmainbalance();
  const result = mainBalance + userAmount;

  setValue(result);
  alert(`Money added from ${bankList} at ${new Date()}`);
});
 
//      //   console.log("add")

 

//       // get bank list
//    const bankList = getInputValue("bank_list")
//  //    console.log(bankList)
//      if(bankList == "Select bank"){
//         alert("please Select Your Bank");
//         return;
//      }


//     //  get the bank account

//     // const bankAccount = getInputValue("bank_account")
     
//    // 2. Bank account: exactly 11 digits
//         const bankAccount = getInputValue("bank_account").trim();
//         if (!/^\d{11}$/.test(bankAccount)) {
//             alert("Please enter a valid 11-digit bank account number");
//             return;
//         }
 

//         //amount get

//         const userAmount = getInputValue("amount_number");
//         const mainBalance = getmainbalance() 
//         const result = mainBalance + Number(userAmount);

//         //pin Number need
//         const PinNumber = getInputValue("pin_Number");

//         if(PinNumber == "" || PinNumber !== 4){
//             alert("Please Fixed you pin Number");
//         }
//         else{
//             setValue(result);
//             alert(`Money Added from ${bankList} at ${new Date()}`); 
//             return;
//         }



})