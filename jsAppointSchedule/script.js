let userName = document.getElementById("name");
let phone = document.getElementById("number");
let email = document.getElementById("email");
let address = document.getElementById("address");
let purpose = document.getElementById("purpose");
let datetime_local = document.getElementById("datetime");
let counselor = document.getElementById("counselors");  
let note =  document.getElementById("note");
let counselorAvailability = { 
    counselor1: 0,
    counselor2: 0,
    counselor3: 0,

}
let career;
let growth;
let changeOfCareer;
 

let name_err = document.getElementById("name_err")
let num_err = document.getElementById("num_err")
let email_err = document.getElementById("email_err")
let add_err = document.getElementById("add_err")
let purp_err = document.getElementById("purp_err")
let datetime_err = document.getElementById("datetime_err")
let counselor_err = document.getElementById("counselor_err")
let note_err = document.getElementById("note_err")
let price;
switch (purpose){
case career:
    price = 100000; 
    break
case growth:
    price = 50000;
    break
case changeOfCareer:
    price = 180000 
    break;
default:
    price=0;
} 




function validate(){
    console.log(email.value)
    console.log(userName.value)
    
    if(userName.value === ""){
       name_err.innerHTML = "Invalid Name"
        
    }
      if(phone.value ==""){
          num_err.innerHTML = "Invalid Phone Number"
    }
     if(email.value ===""){
        email_err.innerHTML = "Invalid Email"
    }
     if(address.value ===""){
        add_err.innerHTML = "Invalid Address"
    }
     if(purpose.value ===""){
        purp_err.innerHTML = "This Field Cannot be Empty"
    }
    
     if(datetime.value ===""){
        datetime_err.innerHTML ="This Field Cannot be Empty"
    }
     if(counselor.value ===""){
        counselor_err.innerHTML = "This Field Cannot be Empty"
    } 
     if(note.value ===""){
        note_err.innerHTML = "This Field Cannot be Empty"
    }
    else{
            window.location.href = "confirm.html";{
        alert("Appointment Sucessfully Booked") 
    }
}
}




