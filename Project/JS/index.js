// let x  =2 ;
// console.log("hey i am const" , x)
// var x=4
// console.log(x)

var a = 10;
var a = 20;   // ✅ redeclare allowed
a = 30;       // ✅ update allowed

console.log(a); // 30


var b ;
console.log(c)

var c;



                                                    // type in js 

// premitive type

console.log("premitive type")
 var a = 2;
  var b =a;
   console.log(a)
   console.log(b);
   a+= 2;
   console.log(a)
   console.log(b);
   console.log(a)
   
   

   // reference type 
console.log("refrence type")
   var x=[1,2,3,4,5]
   var y = x;
   console.log(x);
   console.log(y);

   x.pop()
   console.log(y);
   console.log(x);
   console.log(y);
   


                                                 // condtional 
   if(-1){
    console.log("not true")
   }

   
// loops


// var n  =14
// for(i = 2; i<n; i++){
//     // console.log(i)
// }

var i =12; 
while(i<15){
    console.log(i); // 12,13,14
    i++;
}
// console.log(i); // 15