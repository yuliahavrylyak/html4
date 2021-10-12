function allnumeric(uzip) {
	var numbers = /^[0-9]+$/;
	if (uzip.value.match(numbers)) {
		return true;
	} else {
		alert('ZIP code must have numericcharactersonly');
		uzip.focus();
		return false;
	}
}