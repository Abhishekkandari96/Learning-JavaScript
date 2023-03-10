
//variable declaration
//1-          var name=value;     (old method)
                    var a;
                    a=5;
                    console.log(a);
                   
                    var b="abhishek";
                    console.log(b);

                    var c='a';
                    console.log(c);
                    console.log(a+" "+b+" "+c);

//2-            let name=value;(similar to var)
//3             const name= value; (it cannot be changed)

//operators
                /*
                1 assignment : =
                2 addition : +
                3 multiply : *
                4 divide : /
                5 mod : %
                6 power= base**power

                property are there
                1=concatenation using +

                

                */

//  data type
/*
special property= datatype of variable can be changed 

String
1 let x="hello";
      x='hello';
      x="hell'o";
      x='hel"lo';
      x='hel\'o'




*/
                let x=100; //(dyanmic data variable);
                x='hello';
                console.log(x);
                x="hello";
                console.log(x);
                x='hello';
                console.log(x);
                x="hell'o";
                console.log(x);
                x='hel"lo';
                console.log(x);
                x='hel\'o'
                console.log(x);


/*
2- number
        let num=value;
*/
        let y=34;
        console.log(y);
        y=-34;
        console.log(y);
        y=-34.56;
        console.log(y);
 /*
2- boolean
        let x=condition;
*/
        let bool=2>3;
        console.log(bool);
        bool=2<3;
        console.log(bool);
        bool=false;
        console.log(bool);
        bool=true;
        console.log(bool);
  /*
2- Array
       let arr=[1,2,3,4];
*/   

        let arr=[1,2,34,4];
        console.log(arr);
        arr=["abbu","bibu","prachi"];
        console.log(arr);
/* 2- object
       let man={name:"abbu" ,age:50};
*/ 
        let man={name:"abbu" ,age:50};
        console.log(man);

       //note- typeof variable
       console.log(typeof 5);

//  comparison and logical oprators
/*
            1:equal value ==
        Note in Js it ignores data type
        ex it gives true for 5=="5";

*/
                   console.log(5=="5");
/*
            2:equal value equal data type  ===
        Note in Js it ignores data type
        ex it gives true for 5=="5";

*/
                    console.log(5==="5");    
/*
            3:not equal value !=
       

*/
            console.log(5!="5");
/*
            4:not equal value equal type !==
       

*/
                console.log(5!=="5");
/*
            5: greter thenand less then(><)
           

*/
/*
            6 : greter then and less then  and equal(><=)
           

*/

// logical oprator
/*

            1= AND
            &&
*/
/*
            2=OR
            ||
*/

/*
            3=NOT
            !
*/


//conditions
var condition1=10;
if(condition1>=5){

    console.log("if run");
    if(condition1==10){
        console.log("nested if run");

    }
    else{
        console.log("nested else run")
    }
}
else if(condition1==5 || 5>10 ){
    console.log("else if run");
}
else{
    console.log("else run");
}

//terniary oprator

// 1 way
let ternopr=0;// if it is 0 show login in screen if 1 shoe logout in screen
if(ternopr==0){
    document.write("Login");

}
else{
    Document.write("Logout");
}
document.write("\n");
//2 way
   let option=   ternopr == 0? "Login":"Logout";
   document.write(option);

//nulllish oprator
    let user;
    alert(user?? "Guest"); //if user is undefine/null print guest


 // Switch statement

 // used when strict comparison ===
 document.write("<br>");
 var input=0;
 switch(input){
    case 1: 
    document.write(1); break;
    case 2: 
    document.write(2); break
    default: 
    document.write("default");

 }

 //loop in jas
 /*
                    1=for
                    for(intialise;ending;update){

                    }
                    2=do while
                    do{
                            update 
                    }while(true)

                    3=while;
                    while(true){

                        update
                    }


 /*
 break and continue keyword
*/

// method to intract with user--> pause the script as it is pop upexicution
/*
1- alert

alert() -- to show a messege



*/
 alert("Welcome")

/*
1- prompt
shows messege , take input which hwe have to store in variaable. if cancel or esc is pressed it return null



*/
var prmpt=prompt("enter your age","give age");
if(prmpt==null){
    document.write("<br>");
    document.write("blank age")
}
else{
    document.write("<br>");
    document.write(prmpt);
}

/*
1- confirm
shows a messege, confirm with ok pr cancel. it retur true or false for cancel/ esc


*/
var cfm=confirm("are you sure");// return true /false
if(cfm){
    document.write("<br>");
 document.write("confirm is OK");
}else{
    document.write("<br>");
    document.write("confirm is cancel");
}


//type conversion
//1- implicit
let im= 5+null;  // treat null as 0;
console.log(typeof im);
console.log(im);
//2-explicit
//using function
let str=2+6;
console.log( String(str)+"4");// to string
console.log(Number("35"))// to number
let booli=true;
console.log(Number(booli));// boolean to number
console.log(Boolean(0));//  number to boolean
/*
empty string to boolean == give false


*/

