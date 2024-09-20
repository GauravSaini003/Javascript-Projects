// Here we can see the how many way we can create the object


// Object Literal
// var obj_01 = {
//     name:'Gaurav Saini',
//     age:'24',
//     location:'Dehradun'
// };

// Object.keys(obj_01).forEach((key )=>{
//     console.log(key ,obj_01[key] , );
    
// })

// In this we are using the entries object and 
// Object.entries(obj_01).forEach(([key , value])=> console.log(key,value));

// const person = { name: 'Alice', age: 25, city: 'New York' };

// Object.values(person).forEach(value => {
//   console.log(value);
// });


// Object.entries(obj_01).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
//   });
  




// Object Constructer:


// let obj_02 = new Object();
// obj_02.name = 'Gaurav Saini';
// obj_02.location = function(){
//   this.area='Railway Station',
//   this.homeNumber = 'L 49 D'
    
// }
// obj_02.otherInfo ={
//     father:'Rakesh saini',
//     mother:'Babita saini'
// }

// obj_02.location(); // first we have to invoke this function 
// console.log(obj_02.area);
// console.log(obj_02.otherInfo.father);






// create object using create method


// Create an object with no prototype
var object = Object.create(null);

// Add properties using dot notation
object.name = 'Gaurav Saini';
object.age = 25;

// Add properties using bracket notation
object['location'] = 'Dehradun';
object['phoneNumber'] = '8191843680';

console.log(object);
// Output: { name: 'Gaurav Saini', age: 25, location: 'Dehradun', phoneNumber: '8191843680' }






