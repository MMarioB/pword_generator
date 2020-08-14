function getPassword(){
    //Variables
    var chars = "0123456789abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ!@#$%^&*()_+?<>:{}[]";
    var password="";
    var length = 16;

    //Generate the password
    for (var i=0; i<length; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber+1);
    }
    document.getElementById("password").value = password;
}