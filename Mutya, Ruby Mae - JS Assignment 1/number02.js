

let obj = [{username : "user1", password: "password"},

{username : "user2", password: "password1"},

{username : "user3", password: "password2"},

{username : "user4", password: "thispassword"} ];


let user = prompt("Enter Username:");
let pass = prompt("Enter Password:");

for (let x of obj){
    if((x.username === user) && (x.password === pass)){
        alert("Valid");break;
    }else{
        alert("Invalid");break;}
}








