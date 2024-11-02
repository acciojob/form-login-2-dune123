//your JS code here. If required.


function addValue(){
    let firstName=document.getElementById("firstName").value;
    let secondName=document.getElementById("lastName").value;
    let phNumebr=document.getElementById("phNumber").value;
    let emailId=document.getElementById("emailID").value;

    alert( "First Name: " + firstName + "\n" +
      "Second Name: " + secondName + "\n" +
      "Phone Number: " + phNumebr + "\n" +
      "Email ID: " + emailId
    )
}