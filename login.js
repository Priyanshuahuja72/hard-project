function checkData()
{
    var enterEmail = document.getElementById("email").value 
    var enterPwd = document.getElementById('password').value
    // getting data from local storage
    var getEmail = localStorage.getItem('email');
    var getPass = localStorage.getItem('password');
    if(enterEmail == getEmail)
    {
        if(enterPwd = getPass)
        {
            alert("Login Success");
        }
    }
    else
    {
        alert("Login not SucessFul")
    }
}