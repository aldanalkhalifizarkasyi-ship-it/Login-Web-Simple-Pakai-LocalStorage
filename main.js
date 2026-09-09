let usernameSignup = document.getElementById("usernameInputSignup")
let passwordSignup = document.getElementById("passwordInputSignup")
let confirmSignup = document.getElementById("confirmButtonSignup")
let changeLogin = document.getElementById("ChangeLogin")
let accounts = {
    nama : [],
    password : [],
}
let signupDiv = document.getElementById("signupCard")

let dataLama = localStorage.getItem("databaseAkun");
if (dataLama) {
    accounts = JSON.parse(dataLama); // Ubah teks kembali jadi object/array
}

confirmSignup.addEventListener("click", function(){
    if (accounts.nama.includes(usernameSignup.value)) {
        let gagal = document.createElement("p")
        gagal.innerText = "Account already exist"
        gagal.setAttribute("class", "CardP")
        gagal.setAttribute("id", "gagalP")
        gagal.style.color = "red"
        gagal.style.fontWeight = "bold"
        gagal.style.margin = "0"

        if (signupDiv.contains(document.getElementById("suksesP")) || signupDiv.contains(document.getElementById("gagalP"))) {
            console.log("tunggu ilang dulu jir")
        } else {
            signupDiv.appendChild(gagal)
        }
        
        setTimeout(function() {
            gagal.remove(); 
            usernameSignup.value = ""; // Sekalian mengosongkan input username
            passwordSignup.value = ""; // Sekalian mengosongkan input password
        }, 3000); 
    } else {
        accounts.nama.push(usernameSignup.value);
        accounts.password.push(passwordSignup.value);
        localStorage.setItem("databaseAkun", JSON.stringify(accounts))
        let sukses = document.createElement("p")
        sukses.innerText = "Account Created!"
        sukses.setAttribute("class", "CardP")
        sukses.setAttribute("id", "suksesP")
        sukses.style.color = "green"
        sukses.style.fontWeight = "bold"
        sukses.style.margin = "0"

        if (signupDiv.contains(document.getElementById("suksesP")) || signupDiv.contains(document.getElementById("gagalP"))) {
            console.log("tunggu ilang dulu jir")
        } else {
            signupDiv.appendChild(sukses)
        }

        setTimeout(function() {
            sukses.remove(); 
            usernameSignup.value = ""; // Sekalian mengosongkan input username
            passwordSignup.value = ""; // Sekalian mengosongkan input password
        }, 3000); 
    }
})

let usernameLogin = document.getElementById("usernameInputLogin")
let passwordLogin = document.getElementById("passwordInputLogin")
let confirmLogin = document.getElementById("confirmButtonLogin")
let changeSignup = document.getElementById("ChangeSignUp")
let loginDiv = document.getElementById("loginCard")

confirmLogin.addEventListener("click", function(){
    let posisiUser = accounts.nama.indexOf(usernameLogin.value);

    if (posisiUser !== -1 && accounts.password[posisiUser] === passwordLogin.value) {
        alert("You're logged in!")
    } else {
        let warn = document.createElement("p")
        warn.innerText = "Account doesnt exist"
        warn.setAttribute("class", "CardP")
        warn.setAttribute("id", "WarnP")
        warn.style.color = "red"
        warn.style.fontWeight = "bold"
        warn.style.margin = "0"

        if (loginDiv.contains(document.getElementById("WarnP"))) {
            console.log("tunggu ilang dulu jir")
        } else {
            loginDiv.appendChild(warn)
        }

        setTimeout(function() {
            warn.remove(); 
            usernameLogin.value = ""; // Sekalian mengosongkan input username
            passwordLogin.value = ""; // Sekalian mengosongkan input password
        }, 3000); 
    }
})

changeLogin.addEventListener("click", function(){
    signupDiv.style.display = "none"
    loginDiv.style.display = "flex"
})

changeSignup.addEventListener("click", function(){
    signupDiv.style.display = "flex"
    loginDiv.style.display = "none"
})