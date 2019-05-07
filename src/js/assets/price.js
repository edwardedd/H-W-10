var dollar = 26.7;
var samsung = 750 * dollar;
var nokia = 650 * dollar;

var Samsung = document.getElementById('samsung');
var Nokia = document.getElementById('nokia');
var answer = document.getElementById('answer');

if (dollar > 26 || dollar === 26) {
	Samsung.innerHTML = samsung;
	Nokia.innerHTML = nokia;
} else {
	document.getElementById('app').style.display = "none";
	answer.innerHTML = 'товару не має.халепа'
}