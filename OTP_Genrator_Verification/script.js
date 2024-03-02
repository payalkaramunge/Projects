const input = document.querySelectorAll("input"),
button = document.querySelector("button"),
mobile = document.getElementById("mobile"),
expire = document.getElementById("expire");

let OTP = "";


//generateOTPs();
function generateOTPs()
{
    OTP =
        Math.floor(Math.random() * 10 ) 
        +""+
        Math.floor(Math.random() * 10 ) 
        +""+
        Math.floor(Math.random() * 10 ) 
        +""+
        Math.floor(Math.random() * 10 )
        ;

        alert("Yout OTP is:" + OTP);
            input[0].focus();
        expire.innerText = 10;
        const expireInterval = setInterval(function ()
        {
            expire.innerText--;
            if(expire.innerText == 0)
            {
                
                clearInterval(expireInterval);
            }
            
        }, 1000);
}

function clearOTP()
{

}

input.forEach((input , index) =>
{
   input.addEventListener("keyup",function (e)
   {
        const currentInput = input;
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;

        //console.log(currentIndex,nextIndex,prevIndex);

        if(
            nextInput &&
            nextInput.hasAttribute("disabled") &&
            currentInput.value !== "" 
        ) {
            nextInput.removeAttribute("disabled",true);
            nextInput.focus();
        }

        if(e.key === "Backspace")
        {
            input.forEach((input,index1) =>
            {
                if (index <= index1 && prevInput)
                {
                    input.setAttribute("disabled",true);
                    prevInput.focus();
                    prevInput.value = "";
                }
            });
        }

        if(!input[3].disabled && input[3].value !== "")
        {
            input[3].blur();
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");
   });
});

window.addEventListener("load", () => 
{
    let x = prompt("Please enter your mobile number to varify your account");
    if(x)
    {
        mobile.innerText = x;
        generateOTPs();
    }
});

button.addEventListener("click",()=>
{
    let varify = "";
    input.forEach((input) =>
    {
        varify += input.value; 
    });

    if(verify === OTP)
    {
        alert("Your account id varified sucsessfully!");
    }
});