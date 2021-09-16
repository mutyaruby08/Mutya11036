

let bx = document.getElementsByClassName('box')[0];
bx.style.backgroundColor = '#D4F1F4';
bx.style.border = "thick solid #189AB4"
bx.style.width = "315px";
bx.style.borderRadius = "23px";


let p1 = document.getElementsByClassName('p1')[0];
p1.style.fontSize = "large";
p1.style.fontFamily = "Tw Cen MT,Impact,Charcoal,sans-serif";
p1.style.paddingLeft = "35px";


let p2 = document.getElementsByClassName('p1')[1];
p2.style.fontSize = "large";
p2.style.fontFamily = "Tw Cen MT,Impact,Charcoal,sans-serif";
p2.style.textAlign = "center";

let p3 = document.getElementsByClassName('p1')[2];
p3.style.fontSize = "x-large";
p3.style.fontFamily = "Romantic, Impact,sans-serif";
p3.style.textAlign = "left";
p3.style.paddingLeft = "54px";


let oper = document.getElementsByClassName('box')[1];
oper.style.paddingLeft = "100px";


let bod = document.getElementsByClassName('body')[0];
bod.style.backgroundColor = 'white';
bod.style.paddingLeft = "458px";
bod.style.paddingTop = "80px";


let nameC= document.getElementsByClassName('nameCal')[0];
nameC.style.paddingLeft = "33px";
nameC.style.fontFamily = "Romantic, Impact,sans-serif";


let modspc = document.getElementsByClassName('box')[2];
modspc.style.paddingLeft = "115px";


let mod = document.getElementsByClassName('mode')[0];
mod.style.fontFamily = "Tw Cen MT,Impact,Charcoal,sans-serif";


mod.addEventListener("click", function() {
    if(bod.style.backgroundColor == "white"){

        bod.style.backgroundColor = "black";
        bx.style.backgroundColor = "#61707d";
        nameC.style.color = "white";
        p1.style.color = "white";
        p2.style.color = "white";
        p3.style.color = "white";
        mod.style.backgroundColor = "white";
        document.getElementsByClassName("mode")[0].innerHTML = "Light Mode";
        mod.style.color = "black";
    }
    else if (bod.style.backgroundColor == "black"){
        bod.style.backgroundColor = "white";
        bx.style.backgroundColor = "#D4F1F4";
        nameC.style.color = "black";
        p1.style.color = "black";
        p2.style.color = "black";
        p3.style.color = "black";
        mod.style.backgroundColor = "white";
        document.getElementsByClassName("mode")[0].innerHTML = "Dark Mode";
        mod.style.color = "black";
    }
  });


function addition(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    let res = document.getElementById("res");
    res.innerHTML = num1+num2;
}

function subtraction(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    let res = document.getElementById("res");
    res.innerHTML = num1-num2;
}

function multiply(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    let res = document.getElementById("res");
    res.innerHTML = num1*num2;
}

function division(){
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    let res = document.getElementById("res");
    res.innerHTML = num1/num2;
}





