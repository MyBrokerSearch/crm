function validate() {

    var username=document.getElementById("username").value
    var password=document.getElementById("password").value

    if(username=="admin" && password=="Mobile@2020"){
        alert("Login Succesfully");
        // window.location.href = "dashboard.html";
        return false
    } else {
        alert("Login Failed")
    }


}

function changeIcon(element){
    let showPassword = document.getElementById("password");
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    if(type === "text"){
        element.className = "fa fa-eye-slash"
    }else{
        element.className = "fa fa-eye"
    }
    element.setAttribute("aria-hidden","true")
    password.setAttribute("type", type);
}