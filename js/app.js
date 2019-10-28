var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getDayOfWeek()
var dd = parseInt(document.getElementById("day").value);
var mm = parseInt(document.getElementById("month").value);
var cc = parseInt((document.getElementById("year").value).slice(0, 2));
var yy = parseInt((document.getElementById("year").value).slice(-2));
var malegender = (document.getElementsByName("male").value);
var femalegender = (document.getElementsByName("female").value);
var submit = document.getElementById("submit");

var result = math.trunc(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;