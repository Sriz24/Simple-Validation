function validateForm(){
    var name= document.getElementById('name').value;

    var email= document.getElementById('email').value;

    document.getElementById('nameError').innerHTML= '';
    document.getElementById('emailError').innerHTML= '';

    if (name === '') {
        document.getElementById('nameError').innerHTML= 'Name is required';
        return false;
    }

    var emailRegex = '/^[^\S@]+@[^\S@]+\.[^\S@]+$/';
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid E-mail Format';
        return false;
    }
alert('Form Successfully Submited!');
return true;

}

