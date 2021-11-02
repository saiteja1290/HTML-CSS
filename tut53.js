function greet(var1) { //var doesnt work
    console.log(var1 + " Is a good boy"); 
}

let var1 = "Teja";
let var2 = "Teja2";
let var3 = "Teja3";
greet(var1);
greet(var2);
greet(var3);

function greet2(var4 , greettext) {
    console.log(var4 + greettext + " , Hello!");
}

let var4 = "Teja";
let var5 = "Teja2";
let var6 = "Teja3";
let greettext = " Oohaiyo!";

greet2(var4 , greettext);
greet2(var5 , greettext);
greet2(var6 , greettext);

function add(a) {
    console.log(a+b+c);
}

let a = 5;
let b = 6;
let c = 7;

add(a);
add(b);
add(c);

function sum(a,b,c) {
    d = a+b+c ;
    return d;
}

let varreturn = sum(1,2,3);
console.log(varreturn);
