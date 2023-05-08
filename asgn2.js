
//2nd day assignment ->1
let arrMax = [1,2,43,25,13,45];
var max=0;

arrMax.forEach(
    
    (element, index, prices) =>{
    
        if(element>max)
        {
            max=element;
        }
       
});
console.log(max)

// Assignment 2
let list=[1,2,3,4,5,6,7,8,9,10];
let adjustedlist = []
adjustedlist=list.map(

       (element, index, list) =>
        {
            return element*10;
           
        });
console.log(adjustedlist)

// //Assignment 3
let sum=0;
let arr=[10,11,34,9,12];
arr.forEach(
    
        (element, index, arr) =>{
          
          if(element%2==0)
               {
                  sum+=element;
              }
             });
console.log(sum);

//Assignment 4
let numbers = [4, -4, 10, 203, 53, 11];
var result = numbers.reduce(function(a, b) {
    return Math.min(a, b);
});

console.log(result);
