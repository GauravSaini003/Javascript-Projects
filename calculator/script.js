// let listValues = document.getElementsByClassName("first_row");
// let output = document.getElementById('result_area');
// let allClear = document.getElementById('allClear');
// let del = document.getElementById('del');
// let zero = document.getElementById('zeros');
// let ans = document.getElementById('answer');

// let Inputstring = "";
// let result ="";
// // Convert the HTMLCollection to an array to use forEach
// Array.from(listValues).forEach(element => {
//     // Add event listener to each element
//     element.addEventListener('click', () => {
//         let val = element.textContent;
       

//           Inputstring += val;
//          output.value = Inputstring;
 
   
 
//     });
// });

// del.addEventListener('click',()=>{
//     let deletion = Inputstring.slice(0,-1);
//     output.value = deletion;
//     Inputstring = deletion;
// })



// ans.addEventListener('click', function() {
//     try {
//         result = eval(Inputstring);
//         output.value = result;
//         Inputstring = ""; // Clear Inputstring if you want to start fresh
//     } catch (error) {
//         console.error("Invalid expression");
//         output.value = "Error";
//         Inputstring = ""; // Clear Inputstring if there's an error
//     }
// });

// allClear.addEventListener('click', () => {
//     output.value = '';
//     Inputstring = "";
// });
// zero.addEventListener('click', () => {
//     output.value = 0;
//     Inputstring = " ";
// });







// This is the way we can do the things 
let listValues = document.getElementsByClassName("first_row");
let output = document.getElementById('result_area');
let allClear = document.getElementById('allClear');
let del = document.getElementById('del');
let zero = document.getElementById('zeros');
let ans = document.getElementById('answer');

let Inputstring = "";
let result ="";



// These are the different values that shows in the output field

Array.from(listValues).forEach((items)=>{

items.addEventListener('click', ()=>{

let value = items.textContent ;
Inputstring += value;
output.value = Inputstring;

});
});


allClear.addEventListener('click',()=>{
output.value ='';
Inputstring='';
});

zero.addEventListener('click',()=>{
    output.value ='0';
    Inputstring='';
    });

ans.addEventListener('click',()=>{
   
if(Inputstring ==="")
    {
        alert('fill the value');
    }
    
else{
    try{
    result = eval(Inputstring);
    output.value = result;
    Inputstring ='';
    }
    catch(error)
    {
        console.error(error);
        output.value ='Error';
        Inputstring ='';
    }
}

        });

del.addEventListener('click',()=>{
Inputstring = Inputstring.slice(0,-1);
output.value =Inputstring;
});