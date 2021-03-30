"use strict";
function maxNumber(x, y) {
    if (x > y) {
        alert(x);
        return x;
    } else {
        alert(y);
        return y;
    }

}
function maxOfThree(x, y, z) {
    var larg = x > y ? x : y;
    var largest = larg > z ? larg : z;
    alert(largest);
    return largest;


}
function isVowel(x) {
    let z = parseInt(x);
    var num;
    num = z > 0 ? true : false;
    console.log(typeof z);
    if (x.length === 1 && num === false) {
        alert("Is Vowl");
    }
    else {
        alert("Not Vowl");
    }
}
function sum(a) {

    var sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    alert(sum);

}
function multiply(a) {

    let sum = 1;
    for (let i = 0; i < a.length; i++) {
        sum *= a[i];
    }
    alert(sum);

}
function reverse(a) {
   // alert(a.split('').reverse().join(''));
   let rev=[];
   for(let i=a.length-1;i>=0;--i)
   {
       rev.push(a.charAt(i));
   }
   alert(rev.join(''));
}
function findLongestWord(a) {
    var arr = a.split(' ');
    var longest = a[0];
    for (const c of arr) {
        longest = longest.length > c.length ? longest : c;
    }
    alert(longest);
}
function filterLongWords(a, x) {
    var arr = a.split(' ');
    const c = arr.filter(function (elem, i, array) {
        return elem.length > x;
    });
    alert(c);
}
function computeSumOfSquares(arr) {
    //const square = function (number) { return number * number };
    // const factorial =function fac(n){returnn <2?1:square(n) +fac(n -1)};
    const v=arr.map(s=>s*s).reduce((acc,seq)=> acc+seq);
   // const f = arr.reduce(function (prevVal, elem, i, array) { return prevVal + square(elem); });
    alert(v);
}
function printOddNumbersOnly(arr) {

    const c = arr.filter(function (elem, i, array) {
        return elem % 2 != 0;
    });
    alert(c);
}
function computeSumOfSquaresOfEvensOnly(arr) {
    const c = arr.filter(function (elem, i, array) {
        return elem % 2 == 0;
    });
    console.log(c);
    const square = function (number) { return number * number };
    const f = c.reduce(function (prevVal, elem, i, array) { return square(prevVal) + square(elem); });
    
    //or 
    const v=c.filter(x=> x%2==0).map(x=>x*x).reduce((acc,seq)=>acc+seq);
    alert(v);
}
// function sumNew(arr) {
//     const f = arr.reduce(function (prevVal, elem, i, array) { return prevVal + elem; });
//      alert(f);
//  }
function multilyNew(arr) {
    const v= arr.map(s=> s*s).reduce((acc,seq)=> acc+seq );
   // const f = arr.reduce(function (prevVal, elem, i, array) { return prevVal * elem; });
    alert(v);
}
function findSecondBiggest(arr) {
    var big = arr[0] > arr[1] ? arr[0] : arr[1];
    var secBig = arr[0] > arr[1] ? arr[1] : arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (big < arr[i]) {
            console.log();
            // secBig=big;
            big = arr[i];
        } else if (secBig < arr[i]) {
            secBig = arr[i];
        }
    }


    alert(secBig);
}

function printFibo(num, a, b) {
    alert(fib(num, a, b));

}
function fib(n, a, b) {
    let arr = [a, b];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr;
}

function fibonacci(a, b, num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}