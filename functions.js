function form_validation() {
	var f_name = document.forms['MyForm']['f-name'].value;
	var l_name = document.forms['MyForm']['l-name'].value;
	var email = document.forms['MyForm']['email'].value;
	var phone = document.forms['MyForm']['phone'].value;
	var status = document.forms['MyForm']['status'].value;
	// var l_name = document.forms['MyForm']['l-name'].value;
	console.log(f_name);
	console.log(l_name);
	if( f_name == "" ) {
		alert("Please Enter First Name");
		return false;
	}
	if( l_name == "" ) {
		alert("Please Last Password");
		return false;
	}
	
	/* Store data on local storage*/

	// var fnamesArr = [];  
	// var lnamesArr = [];  
	// var emailArr = [];  
	// var phoneArr = [];  
	// var statusArr = [];  
	
	// fnamesArr.push(f_name);
	// localStorage.setItem('First_Name', JSON.stringify(fnamesArr));  

	// lnamesArr.push(l_name);
	// localStorage.setItem('Last_Name', JSON.stringify(lnamesArr));  

	localStorage.setItem("First_Name", f_name);
	localStorage.setItem("Last_Name", l_name);
	localStorage.setItem("email", email);
	localStorage.setItem("phone", phone);
	localStorage.setItem("status", status);

}

