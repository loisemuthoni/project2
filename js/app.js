var submit = document.getElementById("submit");

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getDayOfWeek()
var dd = document.getElementById("day").value;
var mm = document.getElementById("month").value;
var cc = document.getElementById("year").value
var yy = document.getElementById("year").value
var malegender = document.getElementsByName("male");
var femalegender = document.getElementsByName("female");

var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;