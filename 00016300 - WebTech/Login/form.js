var a;
function pass()
{
    if(a==1)
    {
        document.getElementById("password").type = "password";
        document.getElementById("passIcon").src = "../Materials/lock.png";
        a = 0;
    }
    else
    {
        document.getElementById("password").type = "text";
        document.getElementById("passIcon").src = "../Materials/unlock.png";
        a = 1;
    }
}

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the form from submitting
    alert("Login button clicked!");
});
