const registrationForm = document.getElementById("registration-form");


registrationForm.addEventListener("submit" , function(event){
    event.preventDefault();

    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find((item) => item.email === email);

    if(foundUser){
        alert("User have Already register You register another email");
    } else {
        const user = {
            fullName: fullName,
            email: email,
            password: password,
        }
         users.push(user);
         localStorage.setItem("users" , JSON.stringify(users));
         alert("User have Successfully Registered");
         event.target.reset();
    }

});
