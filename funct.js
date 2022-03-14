//1. Reversing a value
function reverseNum(){
    var to = document.getElementById("reverse");
    var Num = document.getElementById("reverse").value;
    var strnum = "" + Num;
    var g = strnum.length - 1;
    var t = new Array(g);
    for(var u = 0; u <= g; u++){
        t[u] = strnum.charAt(g - u);
    }
    var reverse = t.join("");
    r1.innerHTML = reverse;
}

//2. Returning argument type
function typeofType(){
    let x = 45.7; //Data is input here
    r2.innerHTML = typeof(x);
}

//3. Using function as parameter
function sayHello(){ //Does not have a call yet
    console.log("Hello")
}
    function greet(){
        sayHello();
    }

//4. Returning maximum and minimum numbers
function MM(){
    var k = 'y';
    var count = 0;
    var values = new Array();
    var min, max;
    do{
        var c = prompt("Input array values to get minimum and maximum values, press y to stop"); //Lets the user use a sentinel value to stop the prompt loop
        var d = parseFloat(c);
        values[count] = d;
        count++;
        if (c == k){
            values.pop(); //Removes the sentinel value from the array
        }
    }while(c != k); //Stops loop if sentinel value is entered
    var min = values[0], max = 0;
    for(var op = 0; op < values.length; op++){
        if(max < values[op]){
            max = values[op]
        }
        if(min > values[op]){
            min = values[op]
        }
    }
    var arrValues = ("Array values: " + values + "<br />");
    mm1.innerHTML = arrValues;
    var minmax = ("The minimum value is " + min + " and the maximum value is " + max);
    mm2.innerHTML = minmax;
}

//5. Returning Even and Odd numbers
const ar = new Array(7, 4, 2, 9, 11, 8); //Array values are supplied here
var newEven = new Array();
var newOdd = new Array();
function EvenAndOdd(){
    var k = 'y';
    var count = 0;
    var values = new Array();
    do{
        var c = prompt("Input array values, press y to stop"); //Lets the user use a sentinel value to stop the prompt loop
        var d = parseFloat(c);
        values[count] = d;
        count++;
        if (c == k){
            values.pop(); //Removes the sentinel value from the array
        }
    }while(c != k);
    function Even(){
        for(let q = 0; q < values.length; q++){
            if(values[q] % 2 == 0){
                newEven[q] = values[q]
            }
        }
        var even = ("Even numbers- " + newEven.join(" "));
        eo1.innerHTML = even;
    }
    function odd(){
        for(let q = 0; q < values.length; q++){
            if(values[q] % 2 !== 0){
                newOdd[q] = values[q]
            }
        }
        var Odd = ("Odd numbers- " + newOdd.join(" "));
        eo2.innerHTML = Odd;
    }
    Even();
    odd();
}

//Returning Prime numbers
function prime(){
    var k = 'y';
    var count = 0;
    var values = new Array();
    do{
        var c = prompt("Input array values, press y to stop"); //Lets the user use a sentinel value to stop the prompt loop
        var d = parseFloat(c);
        values[count] = d;
        count++;
        if (c == k){
            values.pop(); //Removes the sentinel value from the array
        }
    }while(c != k);
    var yum = new Array();
    //var count = new Array(2, 3, 7, 19, 17, 22);
    var count = values;
    for(let i = 0; i < count.length; i++){
        var isPrime = 0;
        var p = count.length - 1;
        for(let u = 2; u < count[i]; u++){
            if(count[i] % u == 0){
                isPrime = 1;
                break;
            }
        }
        if(count[i] == 2 || (count[i] > 1 && isPrime == 0)){
            yum[i] = count[i];
            
        }
        
    }
    if(yum.length > 0){
        Prime.innerHTML = "The prime numbers in the array generated: " + yum.join(" ");
    }else{
        Prime.innerHTML = "No prime number found";
    }

}

