// alert("Heyyy")
function addNewWeField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter");
    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
    
}
function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter");
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    aqOb.insertBefore(newNode,aqAddButtonOb);

}

//generating cv
function generateCV(){
    // console.log("heyy");
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
    document.getElementById("linkedInT").innerHTML=document.getElementById("LinkedInField").value;
    document.getElementById("mailT").innerHTML=document.getElementById("mailField").value;
    document.getElementById("gitHubT").innerHTML=document.getElementById("gitHubField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;
    document.getElementById("mailT").innerHTML=document.getElementById("mailField").value;

    let wes=document.getElementsByClassName("weField");
    let str="";
    for(let i of wes){
        str=str+ `<li> ${i.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    let aqs=document.getElementsByClassName("eqField");
    let str1="";
    for(let i of aqs){
        str1=str1+ `<li> ${i.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

function printCV(){
    window.print();
}