document.addEventListener('readystatechange', event => { 
"use strict";
    
    if (event.target.readyState === "complete") {
        const  btnb = document.getElementById('buttonB');
        const txtArea=document.getElementById("txtArea");
        const chkBox=document.getElementById("chkBox");
        
        btnb.onclick = function(){
           //alert("Hello, world!");biFont
        // txtArea.style.fontSize="12pt";
           
          
           //let fontSize = parseInt(currentFont);
           btnb.onclick =function(){ 
            setInterval(incRate, 500);

            };
            const incRate=function(){
                var div = parseInt(window.getComputedStyle(document.getElementById('txtArea'), null).getPropertyValue('font-size'));
                document.getElementById("txtArea").style.fontSize= parseInt(div)+2+"pt";
            };
          // txtArea.classList.toggle("biFont");
        };
        chkBox.onchange= function(){
            //alert("Hello, world!");
            if(txtArea.className!="bigFont")
            {
                txtArea.className="bigFont";
            }
            else 
            {
               // txtArea.className=undefined;
                txtArea.classList.toggle("normalFont");
            }
           
            //txtArea.style.fontSize='4em';
         };
    }
});

    

/*
window.onload=myFun;
const multiply=(num1,num2)=> num1*num2;
const a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
    ];
   const a1=a.map(s=>s.length); 
   const a2=a.filter(s=>s.length>7);
   const a3=a.find(s=>s.length>7); */
/*$(document).ready(function() {   //same as: $(function() { 
    let  btnb = document.getElementById('buttonB');
    btnb.onclick = function(){
        console.log('Hii');
    };
});*/


   

