
function clearError() {
   let errors = document.querySelectorAll(".error");
   errors.forEach((el)=>{
    el.innerText = "";
    
   })
 }

function fun1() {
   // debugger
  clearError();

  // const number = document.querySelector("#mobilenumber").value;
  let returnval = true;

  let name = document.forms["myform"]["name"].value;
  let email = document.forms["myform"]["email"].value;
  let pass = document.forms["myform"]["pass"].value;
  let cpass = document.forms["myform"]["cpass"].value;

  let number = document.forms["myform"]["mobilenumber"].value;


  ///check number Validation
   numbercheck = /^[6789][0-9]{9}$/;
   if(numbercheck.test(number)){
      console.log(number);
      returnval = false;
   }
   else{
      showerror("mobilenumber","Please Enter Number");
   }
      
 ////check name  

    namecheck = /^[aA-zZ]{3,15}$/;

    if(namecheck.test(name))
    {console.log(name);
      returnval=false;
    }
    else{
      showerror("name","Name Must be minimimu 3 and max20 char");
      returnval=false;
    }

    ///check email  
 
    checkemail = /^[aA-zZ0-9]{4,20}@[aA-zZ]{2,20}.{2,10}$/; 
    if(checkemail.test(email))
    {console.log(name);
      returnval=false;
    }
    else{
      showerror("email","ghjhfPlese Enter Correct Email Address");
      returnval=false;
    }

    //check Password 

    checkpassword = /^(?=.*[a-z])(?=.*A-Z)(?=.*\d)(?=.*[@#!$%^&*])[A-Za-z\d@#!$%^&*]{8,15}$/;
      
    if(checkpassword.test(pass))
    {
      returnval = false;
    }

    else{
      showerror("pass","Plese Enter Password include 1 uppercase 1 lowercase 1 number 1 special");
      returnval = false;
    }

    if(pass==cpass){
      returnval = false;
    }
    else{
      showerror("cpass","Plese Enter Password include 1 uppercase 1 lowercase 1 number 1 special");
      returnval = false;
    }
        

    return returnval;
 
}
     


function showerror(id, msg) {
  ids = document.getElementById(id);
  let n = (ids.nextSibling.nextSibling.innerHTML = msg);

  
}


