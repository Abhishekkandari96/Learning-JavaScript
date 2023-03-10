// String


let str="Abhishek kandari";

let greet=`hi ${str}`;//template literal
console.log(greet);
console.log(str);
/*
escape sequence
"Abhishek \n kandari";
*/

let strlength=str.length;
let strindexchar=str[3];
let compare=str=="Abhishek kandari"
console.log(strlength);
console.log(strindexchar);
console.log(compare);
/*
predefine functions of string
 str.substr(start,length);
 str.substring(start,end);
 str.IndexOf("char/string", start)
 str.replace(what,which)
*/


//Array

let arr=["maths","sst","hindi","english"];
let book=new Array("maths",1,"hindi","english");
console.log(book);
//ubdate
book[1]="c.s";
console.log(book);

// operatuins on Array

var arrlength=arr.length;
book.push("hindi");
console.log(book);//add at last
book.unshift("grammer");//add at first
console.log(book);
book.pop()// del from last
console.log(book);
book.shift()//del from first;
console.log(book);
book.splice(1,1) // remove elemnt from 1 to 1 index;
console.log(book);
var position =book.indexOf('hindi');
console.log(position);
book.length=0// empty the erray
var isArray=Array.isArray(book);
console.log(isArray);

let text="this is random";
let arrStr=text.split(' ');// string to arr
console.log(arrStr);
let strArr=arrStr.join("-");// arr to string
console.log(strArr);
let newarr=arrStr.concat(arr);// concat to array
console.log(newarr);


//loop;
book.forEach(myfu);
function myfu(value){
    console.log(value)
}


//matrix(multidimentionall)


let  mat=[arr,arrStr,newarr];
console.log(mat);
console.log(mat[1][0]);
console.log(mat[1]);
