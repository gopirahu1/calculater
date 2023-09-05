function addition(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    c=a+b;
    document.getElementById("onu").innerHTML=c;
}
function subtraction(){
    a= document.getElementById("num1").value;
    b=document.getElementById("num2").value;
    c=a-b;
    document.getElementById("onu").innerHTML=c;
}
function multiplication(){
    a= document.getElementById("num1").value;
    b=document.getElementById("num2").value;
    c=a*b;
    document.getElementById("onu").innerHTML=c;
}
function division(){
    a= document.getElementById("num1").value;
    b=document.getElementById("num2").value;
    c=a/b;
    document.getElementById("onu").innerHTML=c;}