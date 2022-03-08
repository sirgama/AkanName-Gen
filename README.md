# AKAN NAME GENERATOR
<img  src="./images/akan%20readme%20shot.png">

 

## Table of Contents

- [AKAN NAME GENERATOR](#akan-name-generator)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
    - [SITE LINK - GH-PAGES](#site-link---gh-pages)
    - [BDD](#bdd)
    - [Technology Used](#technology-used)
  - [Author(s)](#authors)
  - [License](#license)
  - [Contact](#contact)

## Description
<p>This is a simple web application that takes a user's birthday and calculates the day of the week they were born and then depending on their gender outputs their Akan Name. <br>

Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born. Here are Ghanian day names.</p>

## Installation
<p>If you want to clone this repository to your local machine, use the following command: </p>
<code> $ git clone https://github.com/sirgama/AkanName-Gen.git</code><br>
<code>$ cd AkanName-Gen</code><br>
<p>if you are using VS-code, run this:<br>
<code>$ code .</code>



### SITE LINK - GH-PAGES
The landing page is being hosted by Github Pages. The link to the page is:

<a href="https://sirgama.github.io/AkanName-Gen/">https://sirgama.github.io/AkanName-Gen/</a>

### BDD
1. Displays Form For Entering Date and Gender
   - INPUT: User Enters Birthday via 3 inputs Day, Month & Year.
   - INPUT: User chooses either Male or Female
   - OUTPUT: Akan Name is Diplayed According What the User as Entered and Choosed

2. Displays an Error Message if Date Input Left Blank
   - INPUT: ""
   - OUTPUT: Enter Date Between 1 & 31

3. Displays an Error Message if Month Input is Left Blank
   - INPUT: ""
   - OUTPUT: Enter Month Between 1 & 12

4. Displays an Error Message if Year Input is Left Blank
   - INPUT: ""
   - OUTPUT: Enter Year Between 1940 and 2022

5. Displays an Error Message if One or All Inputs is Left Blank or an incorrect value is entered
   - INPUT: "month 13" or "day 45"
   - OUTPUT: Check your month or date and enter a valid value
   - OUTPUT: Seems either your month or date has an invalid value

6. Displays an Error Message if Gender Not Chosen
   - INPUT: "" 
   - OUTPUT: Kindly select your gender 

7. Clears Form and Reset the Message on Click
   - INPUT: Click Reset Button
   - OUTPUT: Clears the Form Data

### Technology Used
* HTML - which was used to build the structure of the pages.

* CSS - which was used to add custom styling to MD bootstrap classes.

* JAVASCRIPT - Used to add functionality to buttons and calculations.

* MDBOOTSTRAP - Used to add responsiveness for small screens.

## Author(s)

Gamaliel Sirengo - Software Dev, Moringa School.


## License

MIT License

Copyright (c) [2022] [Gamaliel Sirengo]. All Rights Reserved.
<a href="./LICENSE"> LICENSE</a>

## Contact
* EMAIL - sirgama@protonmail.ch
* TELEGRAM - https://t.me/sirgama
