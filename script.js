var studentDetails = [];
var nameUI;
var ageUI;
var gradeUI
var sectionUI
var scienceUI;
var englishUI;
var mathematicsUI;
var computerApplnUI;
var addStudentUI;

function EnterData() {
    nameUI = document.querySelector("#name");
    ageUI = document.querySelector("#age");
    gradeUI = document.querySelector("#grade");
    sectionUI = document.querySelector("#section");
    scienceUI = document.querySelector("#s");
    englishUI = document.querySelector("#e");
    mathematicsUI = document.querySelector("#m");
    computerApplnUI = document.querySelector("#ca");
    addStudentUI = document.querySelector("#submitdata");
    tableUI = document.querySelector("#showData");
    showDataUI = document.querySelector("#showDatatable");
}

document.addEventListener("DOMContentLoaded", function () {
    EnterData();
    addStudentUI.addEventListener("click", createStudent);
});

function createStudent(e) {
    e.preventDefault();
    var obj = {
        name: nameUI.value,
        age: ageUI.value,
        grade: gradeUI.value,
        section: sectionUI.value,
        science: scienceUI.value | "0",
        english: englishUI.value | "0",
        mathematics: mathematicsUI.value | "0",
        computerApplnUI: computerApplnUI.value | "0",
        sum:
            (parseInt(scienceUI.value) +
                parseInt(englishUI.value) +
                parseInt(mathematicsUI.value) +
                parseInt(computerApplnUI.value)

            ) |
            "0"
    };
    studentDetails.push(obj);
    showData(studentDetails);
}

function showData(filterData) {
    var sumnum = 0;
    showDataUI.innerHTML = "";

    filterData.forEach(function (student) {
        var trow = document.createElement("tr");
        sum = 0;
        for (key in student) {
            var tbody = document.createElement("td");
            tbody.className = "tdata";
            tbody.innerText = student[key];
            trow.appendChild(tbody);
        }
        showDataUI.appendChild(trow);
    });

    filterData.forEach(function (ele) {
        sumnum += parseInt(ele.sum);
    });
    trow.appendChild(tbody);
    showDataUI.appendChild(trow);
}
var ascendingbtn = document.getElementById("Ascending");
ascendingbtn.addEventListener("click", ascending);
function ascending() {
    var newdata = sum.sort(function (a, b) {
        return a - b;
    });
    showData(newdata);
}
var descendingbtn = document.getElementById("Descending");
descendingbtn.addEventListener("click", descending);
function descending() {
    var newdata = sumnum.sort(function (a, b) {
        return b.average - a.average;
    });
    showData(newdata);
}