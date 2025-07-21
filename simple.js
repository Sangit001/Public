let contactName = document.getElementById('contactName');
let contactEmail = document.getElementById('contactEmail');
let contactNumber = document.getElementById('contactNumber');
let contactText = document.getElementById('contactText');

function submitForm(){
    // console.log(contactName.value);
    // console.log(contactEmail.value);
    
}

let username = document.getElementById("username");
let password = document.getElementById("password");
let givenUsername = 'Sangit';
let givenPassword = 'Pandey';
function loginButton(){
if(username.value ==givenUsername&& password.value ==givenPassword){
    window.location.href = "simple.html";
}else{
    alert("Invalid Details");
}
}

function adobeProject(){
    window.location.href = "./Photoshop/index.html"
}