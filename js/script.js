
function output(){

    let userPerson = document.getElementById("usrname").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let userBirthday = month+"-"+ day + "-" + year;

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
            document.getElementById("nametitle").innerHTML = "Hi, " + userPerson + ". I hope I got your name right";
        }
      
        
    }
   

};



