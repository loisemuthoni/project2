var submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var dd = document.getElementById("day").value;
    var mm = document.getElementById("month").value;
    var yy = document.getElementById("year").value;
    var date = new Date(yy + "-" + mm + "-" + dd);
    var daysOfWeek = date.getDay();
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var output = document.getElementById("output");
    var name = document.getElementById("name").value;

    if (dd < 1 || dd > 31) {
        alert("invalid day");
    } else if (mm < 1 || mm > 12) {
        alert("invalid month");

    } else if (yy.toString().length !== 4) {
        alert("invalid year");
    } else if (male.checked) {
        output.innerHTML = "Hey!" + name + ". Your Akan Name Is " + maleAkanNames[daysOfWeek];
    } else {
        output.innerHTML = "Hey!" + name + ". Your Akan Name Is " + femaleAkanNames[daysOfWeek];
    }
})