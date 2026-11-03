// console.log('added')

// login button

document.getElementById("login_btn").addEventListener("click", function(){

    // console.log('added')

    //take the value of mobile number
     
    const mobileNumber = document.getElementById("input_mobile");
    const contactNumber = mobileNumber.value.trim();;
    // console.log(contactNumber);

    //password value

    const PassWord = document.getElementById("Pin_Number")
    const PassWordValue = PassWord.value.trim();;
    // console.log(PassWordValue)

     // Check mobile number: exactly 11 digits
   // Check mobile number: exactly 11 digits
if (!/^\d{11}$/.test(contactNumber)) {
    alert("Mobile number must contain exactly 11 digits");
    return;
}

// Check PIN: exactly 4 digits
if (!/^\d{4}$/.test(PassWordValue)) {
    alert("PIN must contain exactly 4 digits");
    return;
}

    // Both valid, redirect
    window.location.assign("Home.html");
})