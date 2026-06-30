function login(){
   let email=document.getElementById("email").value;//admin1234
   let password=document.getElementById("password").value;//1234
   let error=document.getElementById("error")
    


   if(email==="admin@1234" && password==="1234")
{

    localStorage.setItem("isloggedin","true");
    localStorage.setItem("user",email);
    window.location.href="home.html";
}
else
    {
    error.innerHTML="invalid email or password"
}
}