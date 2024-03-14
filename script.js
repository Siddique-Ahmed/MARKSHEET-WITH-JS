var studentName = prompt("Enter your name...");
var math =+prompt("Enter your math marks");
var physics =+prompt("Enter your physics marks");
var urdu =+prompt("Enter your urdu marks");
var islamiyat =+prompt("Enter your islamiyat marks");
var biology =+prompt("Enter your biology marks");
var english =+prompt("Enter your english marks");
var sindhi =+prompt("Enter your sindhi marks");
var chemistry =+prompt("Enter your chemistry marks");
var total = math + physics + urdu + islamiyat + biology + english +sindhi + chemistry;
var percen = total / 800 * 100;
var grade;

if(percen >= 80){
    grade = "A+"
}else if(percen >= 70){
    grade = "A"
}
else if(percen >= 60){
    grade = "B"
}
else if(percen >= 50){
    grade = "C"
}
else if(percen >= 40){
    grade = "D"
}
else{
    grade = "fail"
};

document.write(
    `<table border="2px solid red" cellpadding="5px" cellspacing="5px">
    <tr>
    <td>Student Name</td>
    <td>Math</td>
    <td>Physics</td>
    <td>Urdu</td>
    <td>Islamiyat</td>
    <td>Biology</td>
    <td>English</td>
    <td>Sindhi</td>
    <td>Chemistry</td>
    <td>Total</td>
    <td>Percentage</td>
    <td>Grade</td>
    </tr>
    <tr>
    <td>${studentName}</td>
    <td>${math}</td>
    <td>${physics}</td>
    <td>${urdu}</td>
    <td>${islamiyat}</td>
    <td>${biology}</td>
    <td>${english}</td>
    <td>${sindhi}</td>
    <td>${chemistry}</td>
    <td>${total}</td>
    <td>${percen}%</td>
    <td>${grade}</td>
    </tr>
    </table>`
)