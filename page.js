// create showButton

let passwordContainer = document.getElementById("password").parentElement;
    let showButton = document.createElement("button");
    showButton.textContent = "Show";
    passwordContainer.appendChild(showButton);
    let error = document.createElement("p");

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

// signup page functionality

let submit = document.getElementById('submit')
submit.addEventListener('click', function saveDetails(event){
    event.preventDefault();
    error.remove();
    let f=document.getElementById('fullname').value;
    let e=document.getElementById('email').value;
    let p=document.getElementById('password').value;
    let cp=document.getElementById('cnfpassword').value
    let ph=document.getElementById('phone').value;
    if(cp==p && p.length>=6)
    {
    let user = {
        'name': f,
        'email': e,
        'password': p,
        'phone': ph
        }
        let key = e
        let userstr = JSON.stringify(user);
        localStorage.setItem(key , userstr);
    let userobj= JSON.parse(localStorage.getItem(key));

    let Name = document.getElementById("fullname");
    let Email = document.getElementById("email");
    let Password = document.getElementById("password");
    let cnfPassword = document.getElementById("cnfpassword");
    let Phone = document.getElementById("phone");

    Name.value = "";
    Email.value = "";
    Password.value = "";
    Phone.value = "";
    cnfPassword.value = "";    

    console.log(userobj); 
    let userInfo = document.getElementById("user-info");
    let listItem = document.createElement("li");
    let text = document.createTextNode(key + " - " + f + " - " + ph);
    listItem.appendChild(text);
    userInfo.appendChild(listItem);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete User";
    listItem.appendChild(deleteButton);
     
    deleteButton.addEventListener('click', function deleteDetails(event){
    listItem.remove();
    let d = event.target.parentNode.firstChild.textContent.split(" - ")[0];
    console.log(d);
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = JSON.parse(localStorage.getItem(key));
            if (value.email == d) {
                localStorage.removeItem(key);
                break;
            }
        }   
       
    });

    let editButton = document.createElement('button');
        editButton.textContent = "Edit User";
        listItem.appendChild(editButton);

    editButton.addEventListener('click', function editDetails(event){
    listItem.remove();
    let x = event.target.parentNode.firstChild.textContent.split(" - ")[0];
    for(let i =0;i<localStorage.length;i++)
    {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        if(value.email==x)
        {
            localStorage.removeItem(key);
            break;
        }
    }
    let name = document.getElementById("fullname");
        name.value = user.name;
    let email = document.getElementById("email");
        email.value = user.email;
    let pass = document.getElementById("password");
        pass.value = user.password;
    let ph = document.getElementById("phone");
        ph.value = user.phone;
    
    })
    }

    else 
    {
        // let error = document.createElement("p");
        error.textContent = "password does not match/too short!";
        error.style.color = "red";
        let err = document.getElementById("cnfpassword").parentElement;
        err.appendChild(error);
    }

})

