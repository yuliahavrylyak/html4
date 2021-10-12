function alphanumeric(uadd)
{ 
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('User address must have alphanumericcharactersonly');
        uadd.focus();
        return false;
    }
}