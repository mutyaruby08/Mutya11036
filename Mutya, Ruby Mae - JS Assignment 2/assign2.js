const obj = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
},
{
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
},
{
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
},
{
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
},
{
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}]

let input = parseInt(prompt("Enter number from 1 - 4:"));


function onlyMale()
{
let arrNames = [];

for(let x of obj)
{
if(x.gender == "male")
arrNames.push(x.name);
}
alert(arrNames);
}

function onlyFemale(){
let arrNames = [];

for(let x of obj)
{
if(x.gender == "female")
arrNames.push(x.name);
}
alert(arrNames);
}

function onlyNA(){
let arrNames = [];
    
for(let x of obj)
{
if(x.gender == "n/a")
arrNames.push(x.name);
}
alert(arrNames);
}

function findHeight(){
let arrNames = [];
for(let x of obj)
{
if(x.height > 150)
arrNames.push(x.name);
}
alert(arrNames);
}

switch(input){
    case 1:
        onlyMale();break;
    case 2:
        onlyFemale();break;
    case 3: onlyNA(); break;
    case 4: findHeight();break;
    default:
        alert("Invalid");break;
}