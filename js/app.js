var submit = document.getElementById("submit");

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var dd = document.getElementById("day").value;
var mm = document.getElementById("month").value;
var yy = document.getElementById("year").value;
var date = new Date(yy + "-" + mm + "-" + dd);
var daysOfWeek = date.getDay();
var malegender = document.getElementsByName("male");
var femalegender = document.getElementsByName("female");


if (dd < 1 || dd > 31) {
    alert("invalid day");
} else if (mm < 1 || mm > 12) {
    alert("invalid month");
}