/////////////////section 1////////////////

//////////question 1 ///////////
var main = document.getElementById("main-content")

///////////question 2//////////////////
console.log(main.childNodes);


///////////////question 3////////////
var firstname =  main.firstChild.innerHTML += "Nimra"
var lastname = main.firstChild.nextSibling .innerHTML += "Muhammad"
var email = main.firstChild.nextSibling.nextSibling .innerHTML += "abc@gmail.com"
var country = main.lastChild.previousSibling .innerHTML += "Pakistan"
var country = main.lastChild.innerHTML += "+12345678"

console.log(firstname)
console.log(lastname)
console.log(email)
console.log(country)

//////////////////question 4//////////////

var input1 = document.getElementById("first-name")
input1.value = "Nimra"
console.log(input1)

////////////question 5//////////////
var input2 = document.getElementById("last-name")
input2.value = "irfan"
console.log(input2)

var input3 = document.getElementById("email")
input3.value = "abc@gmail.com"
console.log(input3)

///////////section 2////////////

var mainform = document.getElementById("form-content")
console.log(mainform.nodeType)

var a = document.getElementById("lastName")
console.log(a.childNodes)
console.log(a.nodeType)

var nameText = document.getElementById("lastName")
nameText.innerHTML += " Irfan"

var main2 = document.getElementById("main-content")
console.log(main2.firstChild)
console.log(main2.lastChild)

var checksib = document.getElementById("lastName")
console.log(checksib.nextSibling)
console.log(checksib.previousSibling)

var emailpar = document.getElementById("email")
console.log(emailpar.parentNode)