function output(){

    let userPerson = document.getElementById("usrname").value;
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value) ;
    let year = document.getElementById("year").value;
    let userBirthday = month+"-"+ day + "-" + year;
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let weekDays = ["Monday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
    maleGhanian = ['Kwadwo','Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame','Kwasi', ];
    femaleGhanian = ['Adwoa','Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama','Akosua'];
    
    
    

    if (userPerson === "") {
        alert("Kindly Enter Your Name")

    }
    else if (day === ""){
        alert("Enter a date between 1 & 31");
    }
    else if (month === "") {
        alert("Enter a month between 1 & 12");
    }
    else if (year === "") {
        alert("Kindly enter your year of birth")
    }
    else {
        let datee = new Date(userBirthday);
        let datePop = datee.getDate();
        let monthPop = datee.getMonth();
        let yearPop = datee.getFullYear();
        let yy = year.slice(2,4);
        let cc = year.slice(0,2);

        if (isNaN(datePop) === true && isNaN(monthPop) === true && isNaN(yearPop) === true){
            alert("Check your month or date and enter a valid value");
            alert("Seems either your month or date has an invalid value");
          }
        else if (parseInt(datePop)<=0 && parseInt(datePop)>31){
            alert("Enter a date between 1 & 31");
        }
        else if (parseInt(monthPop)<=0 && parseInt(monthPop)>15){
            alert("Enter month between 1 and 12");
        }
        else {
            let dayOfWeek = ( ( (cc/4) -2*cc-1) + ((5* yy/4) ) + ((26*(month+1)/10)) +day ) % 7;
            let index = weekDays.indexOf(weekDays[parseInt(dayOfWeek)]);
            console.log(index, datee, datePop, monthPop, yearPop);


            console.log(parseInt(dayOfWeek));
            
            if (male.checked === true){
                document.getElementById("nametitle").innerHTML = `Hi, ${userPerson}`; `if I got your name right`;
                
                document.getElementById("borndate").innerHTML = `You were born on ` + weekDays[parseInt(dayOfWeek)] + " " +  userBirthday;
                document.getElementById("nameakan").innerHTML = `Your Akan name is: ` + maleGhanian[index];
            }
            else if (female.checked === true){
                document.getElementById("nametitle").innerHTML = `Hi, ${userPerson}`; `if I got your name right`;
                
                document.getElementById("borndate").innerHTML = `You were born on ` + weekDays[parseInt(dayOfWeek)] + " " +  userBirthday;
                document.getElementById("nameakan").innerHTML = `Your Akan name is: ` + femaleGhanian[index];
            }
            else {
                alert("Kindly select your gender");
            }
            
                
               
        }
     
        
    }
 
}
  
function reset(){
    document.getElementById('akandata').reset();
}

