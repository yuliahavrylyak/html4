function countryselect(ucountry)
{
    if(ucountry.value == "Default")
    {
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    else
    {
        return true;
    }
}