function form_validation() {
	var f_name = document.forms['MyForm']['f-name'].value;
	var l_name = document.forms['MyForm']['l-name'].value;
	var email = document.forms['MyForm']['email'].value;
	var phone = document.forms['MyForm']['phone'].value;
	var status = document.forms['MyForm']['status'].value;

	// console.log(l_name);
	if( f_name == "" ) {
		alert("Please Enter First Name");
		return false;
	}
	if( l_name == "" ) {
		alert("Please Enter Last Name");
		return false;
	}
	if( email == "" ) {
		alert("Please Enter Email");
		return false;
	}

	if( status == "" ) {
		alert("Please Select User Status");
		return false;
	}


	let namesArr = localStorage.getItem('fname') ? JSON.parse(localStorage.getItem('fname')) : [];  
	namesArr.push(f_name);
	localStorage.setItem('fname', JSON.stringify(namesArr));  

	let lnamesArr = localStorage.getItem('lname') ? JSON.parse(localStorage.getItem('lname')) : [];  
	lnamesArr.push(l_name);
	localStorage.setItem('lname', JSON.stringify(lnamesArr));  

	let emailArr = localStorage.getItem('email') ? JSON.parse(localStorage.getItem('email')) : [];  
	emailArr.push(email);
	localStorage.setItem('email', JSON.stringify(emailArr));  

	let phoneArr = localStorage.getItem('phone') ? JSON.parse(localStorage.getItem('phone')) : [];  
	phoneArr.push(phone);
	localStorage.setItem('phone', JSON.stringify(phoneArr));

	let statusArr = localStorage.getItem('status') ? JSON.parse(localStorage.getItem('status')) : [];  
	statusArr.push(status);
	localStorage.setItem('status', JSON.stringify(statusArr));  
}

