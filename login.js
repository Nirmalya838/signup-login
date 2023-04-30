// LOGIN Page functionality
let passwordContainer = document.getElementById("password").parentElement;
    let showButton = document.createElement("button");
    showButton.textContent = "Show";
    passwordContainer.appendChild(showButton);
    let error = document.createElement("p");
    let login = document.querySelector("#submit");

    showButton.addEventListener('click', function showPass(event){
        event.preventDefault();
        let pass = document.getElementById("password");
        if(pass.type == "password")
        {
            pass.type = "text";
            showButton.textContent = "Hide";
        }
        else
        {
            pass.type = "password";
            showButton.textContent = "Show";
        }

})

    login.addEventListener('click', function login(event){
        event.preventDefault();
        let emailId = document.querySelector("#email").value;
        let pass = document.querySelector("#password").value;
        error.remove();
        
        for(let i=0;i<localStorage.length;i++)
    {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        if(value.email===emailId && value.password===pass)
        {
            error.textContent = `Welcome ${value.name}!`;
            error.style.color = "green";
            let err = document.getElementById("password").parentElement;
            err.appendChild(error);
            break;
        }
        else
        {
            error.textContent = "incorrect email/password!";
            error.style.color = "red";
            let err = document.getElementById("password").parentElement;
            err.appendChild(error);
        }
    }

    })