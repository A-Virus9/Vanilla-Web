 const form = document.getElementById("form");
 let femail;
 form.addEventListener("submit", (event) => {
    event.preventDefault();
    femail= document.querySelector("#femail").value;
    fpass= document.querySelector("#fpass").value;
    console.log(femail);
    if(femail==""){
        alert("Please neter email");
    }
    else if(fpass==""){
        alert("Please enter your password");
    }
    else if((femail=="vyasakshat123@gmail.com" && fpass=="gurugram123") ||
            (femail=="suneet_v@yahoo.com" && fpass=="ladoo@2023"))
    {
        window.location.replace("pagemain.html");
    }
    else{
        alert("Username or password mismatch, Please try again!!!");
    }
});