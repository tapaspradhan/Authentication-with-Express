const registerBtn=document.getElementById("registerBtn")

registerBtn.addEventListener("click",(e)=>{
    e.preventDefault()

    const userEmail=document.getElementById("email").value
    const userpassword=document.getElementById("password").value

    const userData={
        email:userEmail,
        pasword:userpassword
    }
    loginUser(userData)
})

const loginUser=async(e)=>{
    try {
        const resp=await fetch("http://localhost:5001/login",{
            method:"POST",
            credentials:"include",
            redirect:"follow",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(e)
        })

        const data=await resp.json()
        console.log(data);
        window.location.href="http://localhost:5001/frontend/signup.html"
        
    } catch (error) {
        console.log(error.message);
    }
}