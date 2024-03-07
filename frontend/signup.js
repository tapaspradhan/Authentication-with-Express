const registerBtn=document.getElementById("registerBtn")

registerBtn.addEventListener("click",(e)=>{
    e.preventDefault()

    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    const confirmPassword=document.getElementById("confirmPassword").value

    if(!name && !email && !password && !confirmPassword){
        alert("All field are required")
    }else if(password === confirmPassword){
        alert("Password should be same");
        return
    };

    const userDate={
        name:name,
        email:email,
        password:password,
    }

    resgisterUser(userDate)

})

const resgisterUser=async (e)=>{
    try {
        const resp=await fetch("http://localhost:5001/signup",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(e)
        })

        const data=await resp.json()
        console.log(data);
        window.location.href="http://localhost:5001/login.html"
    } catch (error) {
        console.log(error.message);
    }
}


