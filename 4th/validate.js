function validate() {
    if (document.myform.Name.value=="") {
        alert("please provide a username!");
        document.myform.Name.focus();
        return false;
    }
    if (document.myform.age.value=="") {
        alert("please provide a Age!");
        document.myform.age.focus();
        return false;
    }
    if (document.myform.EMail.value=="") {
        alert("please provide a Password!");
        document.myform.Email.focus();
        return false;
    }
    if (document.myform.zip.value==""||isNaN(document.myform.Zip.value)||document.myform.Zip.value.length != 5) {
        alert("please provide a zip format #####.");
        document.myform.zip.focus();
        return false;
    }
    if(document.myform.contact.value=="-1"){
        alert("Please provide a country!");
        return false;
    }
    return(true);
}