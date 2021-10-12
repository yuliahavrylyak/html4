function validsex(umsex,ufsex)
{
    x=0;
    if(umsex.checked) 
    {
        x++;
    } 
    if(ufsex.checked)
    {
        x++; 
    }
    if(x==0)
    {
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else
    {
        alert('Form SuccessfullySubmitted');
        window.location.reload()
        return true;
    }
}