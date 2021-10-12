function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len>= my || passid_len<mx)
{
    alert("Password should not be empty / length be between "+mx+" to "+my);
    passid.focus();
    return false;
}
return true;
}