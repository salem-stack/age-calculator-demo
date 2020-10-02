function ageCalculate(){
    
   var birthDate =document.getElementById('date').value;
     var name =document.getElementById('name').value;
 
 
      
        var myName = name.toString();
        var yourAge = parseInt(birthDate);

        days_lived = yourAge * 365;
         
         
          if (isNaN(yourAge)) {
              document.getElementById("result").innerHTML = (" You've entered an Invalid age");
          }
         else {
             document.getElementById("result").innerHTML = "My name is "+ myName + 
             "<br/><br/> And below is my age breakdown: <br/>" + days_lived + " days lived " ;
            
         
         if (yourAge < 20) {
            document.getElementById("message").innerHTML = ("You are Under-age");
        }
        else{
            document.getElementById("message").innerHTML = ("You are an Adult");
        }
    }
 
 }