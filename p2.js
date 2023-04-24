function suma (){
    var num1,num2,suma1;
    num1=parseInt(document.getElementById("n1").value);
    num2=parseInt(document.getElementById("n2").value);
    suma1=num1+num2;
    document.getElementById("resp").innerHTML = suma1;
}

function resta (){
    var num1,num2,resta1;
    num1=parseInt(document.getElementById("n1").value);
    num2=parseInt(document.getElementById("n2").value);
    resta1=num1-num2;
    document.getElementById("resp").innerHTML = resta1;
}

function multi (){
    var num1,num2,mult1;
    num1=parseInt(document.getElementById("n1").value);
    num2=parseInt(document.getElementById("n2").value);
    mult1=num1*num2;
    document.getElementById("resp").innerHTML = mult1;
}

function divi (){
    var num1,num2,divi1 ;
    num1=parseInt(document.getElementById("n1").value);
    num2=parseInt(document.getElementById("n2").value);
    divi1=num1/num2;
    document.getElementById("resp").innerHTML = divi1;
}
