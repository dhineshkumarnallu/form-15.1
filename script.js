let data = {};
const personForm = document.getElementById("form");
const divr=document.createElement('div');
const headings = [ "FirstName","LastName", "Address","State","Country","Pincode",
 "Gender","Choice of food1","Choice of food1"];
const table = document.createElement("table");
table.setAttribute("class","table");
const tablehead = document.createElement("thead");
const tablebody = document.createElement("tbody");
const people = [
  
];
const textarea=document.getElementById('address');
textarea.setAttribute('onkeyup','handleInputChange(this)');

function renderHeading(data = []) {
  const headingNodes = [];
  for (let i = 0; i < data.length; i++) {
    const headingTag = document.createElement("td");
    const para = document.createElement("p");
    para.innerText = headings[i];
    headingTag.appendChild(para);
    headingNodes.push(headingTag);
  }
  return headingNodes;
}

function renderRow(data = {}) {
  const tableRow = document.createElement("tr");
  const values = Object.values(data);
  for (let i = 0; i < values.length; i++) {
    const tableCell = document.createElement("td");
    tableCell.innerText = values[i];
    tableRow.append(tableCell);
  }
  return tableRow;
}

function renderRows(data = []) {
  const rows = [];
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const item = renderRow(data[i]);
      rows.push(item);
    }
  }
  return rows;
}

tablehead.append(...renderHeading(headings));
table.appendChild(tablehead);

function handleInputChange(e) {
  if (e.type === "text") {
    console.log(e.value);
    data[e.id] = e.value;
  } else {
    data[e.name] = e.id;
    console.log(e.id);
  }
  console.log(data);
}
function handleChange(e){
  if(e.type === "checkbox"){
    console.log(e.value);
    data[e.id]=e.value;
  }
}
     


function handleSubmit(e) {
  
  if (Object.values(data).length > 2) {
    people.push(data );
  } else {
    alert("Some of fields are blank");
  }
  refreshTable(people);
}


// CREATING TABLE BODY

function refreshTable(data = []) {
  tablebody.innerHTML = "";
  tablebody.append(...renderRows(data));
  // APPENMDING TABLE BODY
  table.appendChild(tablebody);
 divr.appendChild(table);
 document.body.append(divr);
}

refreshTable(people);

