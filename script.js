let s_name = document.getElementById("name");
let s_id = document.getElementById("roll");
let s_dept = document.getElementById("dept");
let s_gpa = document.getElementById("gpa");
let s_btn = document.getElementById("btn");
let para = document.getElementById("para");
let tbody = document.getElementById("tbody");

let formHandle = (e) => {
  e.preventDefault();
  if (s_name.value == "") {
    alert("please enter your name");
  } else if (s_id.value == "") {
    alert("please enter your id");
  } else if (s_dept.value == "") {
    alert("please enter your dept.");
  } else if (s_gpa.value == "") {
    alert("please enter your gpa");
  } else {
    let tr = document.createElement("tr");

    //name add
    let td = document.createElement("td");
    td.innerHTML = s_name.value;
    tr.appendChild(td);
    //id add
    let td1 = document.createElement("td");
    td1.innerHTML = s_id.value;
    tr.appendChild(td1);
    //dept add
    let td2 = document.createElement("td");
    td2.innerHTML = s_dept.value;
    tr.appendChild(td2);
    //cgpa add
    let td3 = document.createElement("td");
    td3.innerHTML = s_gpa.value;
    tr.appendChild(td3);

    tbody.appendChild(tr);

    s_name.value = "";
    s_id.value = "";
    s_dept.value = "";
    s_gpa.value = "";
  }
};

s_btn.addEventListener("click", formHandle);
