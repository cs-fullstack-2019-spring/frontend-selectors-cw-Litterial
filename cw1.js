
/*
1) Print the first p tag to the console using the ID, class, and tag selectors.*/


var pID= document.getElementById('first');    /*id*/
console.log(pID.textContent);
var pClass=document.getElementsByClassName("special");  /*class*/
console.log(pClass[0].textContent);   /*array*/
var ptag = document.getElementsByTagName('p');   /*tag*/
console.log(ptag[0].textContent);   /*array*/


/*2) Print the special class using both the query selector and query all selector.*/

var classquery= document.querySelector(".special")
console.log(classquery.textContent);    /*query does first element*/
var classqueryALL=document.querySelectorAll(".special")
for(var i=0; i<classqueryALL.length;i++)
{
    console.log(classqueryALL[i].textContent);   /*query all does all elements; it's also an array*/
}


/*3) Change the color of the h1 statement to blue.*/
var blueh1=document.getElementsByTagName("h1");
for(var j=0;j<blueh1.length;j++)
{
    blueh1[j].style.color="blue";     /*all elements will be blue*/
}


/*
4) Change the color of the last p tag to yellow.*/
var lastP=document.getElementsByTagName('p')
lastP[(lastP.length)-1].style.color="yellow";    /*last element will be yellow*/
