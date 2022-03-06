function output(){

    let userPerson = document.getElementById("usrname").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let userBirthday = month+"-"+ day + "-" + year;
    let male = document.getElementById("male");
    let female = document.getElementById("female");

    if (userPerson === "") {
        alert("Kindly Enter Your Name")

    }
    else if (year === "") {
        alert("Kindly enter your year of birth")
    }
    else if (day === ""){
        alert("Enter a date between 1 & 31");
    }
    else if (month === "") {
        alert("Enter a month between 1 & 12");
    }
    else {
        let datee = new Date(userBirthday);
        let datePop = datee.getDate();
        let monthPop = datee.getMonth();
        let yearPop = datee.getFullYear();

        if (isNaN(datePop) === true && isNaN(monthPop) === true && isNaN(yearPop) === true){
            alert("Check your month or date and enter a valid value");
            alert("Seems either your month or date has an invalid value");
          }
        else if (parseInt(datePop)<=0 && parseInt(datePop)>31){
            alert("Enter a date between 1 & 31");
        }
        else if (parseInt(monthPop)<=0 && parseInt(monthPop)>12){
            alert("Enter month between 1 and 12");
        }
        else {
            let dayValue = dayOfTheWeek(datePop, (monthPop + 1), yearPop);
            
                document.getElementById("nametitle").innerHTML = `Hi, ${userPerson}`; `if I got your name right`;
                
                document.getElementById("borndate").innerHTML = `You were born on ` + dayValue[1] + " " +  userBirthday;
                document.getElementById("nameakan").innerHTML = `Your Akan name is: ` + dayValue[0];
               
        }
     
        
    }
 
}
  
function reset(){
    document.getElementById('akandata').reset();
}
function dayOfTheWeek(day, month, year){
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    maleGhanian = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    femaleGhanian = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    
    
    let dayOfWeek = (day + parseInt(((month + 1) * 26) / 10) + year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
    if (male.checked === true) {
      return [maleGhanian[dayOfWeek] , weekDays[dayOfWeek]];
        
    }
    else if (female.checked === true ){
      return [femaleGhanian[dayOfWeek] , weekDays[dayOfWeek]];
        
    }
    else {
        alert("Kindly select your gender");
    }
    
}


