function addData()
{
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var pass = document.getElementById('password').value
    var cpass = document.getElementById('c_pwd').value
    // validation of form
    if(name >= 2)
    {
    if(pass == cpass)
    {
       localStorage.setItem('name' , name);
       localStorage.setItem('email' , email);
       localStorage.setItem('password' , pass);
    }
    } 
    else
    {
        alert('login cant be done ');
    }
    

}