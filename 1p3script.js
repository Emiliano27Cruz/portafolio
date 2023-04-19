function suma(){
    var num1, num2, sum;
    num1=prompt("Ingresa el primer numero", "Numero 1");
    num2=prompt("Ingresa el segundo numero", "Numero 2");
    sum=num1+num2;
    sum=parseInt(num1)+parseInt(num2);
    alert("La suma es "+sum);
}

function resta(){
    var num1, num2, res;
    num1=prompt("Ingresa el primer numero", "Numero 1");
    num2=prompt("Ingresa el segundo numero", "Numero 2");
    res=num1-num2;
    res=parseInt(num1)-parseInt(num2);
    alert("La resta es "+res);
}

function multi(){
    var num1, num2, mult;
    num1=prompt("Ingresa el primer numero", "Numero 1");
    num2=prompt("Ingresa el segundo numero", "Numero 2");
    mult=num1*num2;
    mult=parseInt(num1)*parseInt(num2);
    alert("La multiplicación es "+mult);
}

function divi(){
    var num1, num2, d;
    num1=prompt("Ingresa el primer numero", "Numero 1");
    num2=prompt("Ingresa el segundo numero", "Numero 2");
    d=num1*num2;
    d=parseInt(num1)/parseInt(num2);
    alert("La división es "+d);
}

function posi(){
    var num1;
    num1=prompt("Ingresa el numero", "Numero");
    if(parseInt(num1)>=0)
        alert("El numero es positivo");
    else
        alert("El numero es negativo");
}