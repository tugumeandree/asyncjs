import {babyDummyData} from "./data/babiesdata.js";
console.log(babyDummyData);
 
     //GET Get the UL element where you want to display the data
const babyList = document.getElementById('babies-list');
// const sitterList = document.getElementById('sitters-list');
   
    //  CREATE  Create a new <li> element to display the data
const babyDataLi = document.createElement('li');
// const sitterDataLi = document.createElement('li');

// Specify the index of the baby you want to display
const babyIndex = 0; // Change this to the index of the desired baby

// Get the baby object from the array based on the index
const baby = babyDummyData.babies[babyIndex];
// SET Set the inner HTML of the new <div> element to the data
babyDataLi.innerHTML = `
  <h2>${baby.name}</h2>
  <p>Age: ${baby.age}</p>
  <p>Gender: ${baby.gender}</p>
  <img src="${baby.image}" alt="${baby.name}" style="max-width: 100px; max-height: 100px;">
`;

// Append the new <div> element to the container
babyList.appendChild(babyDataLi);


// console.log(fetch('data/babies.json'));
// console.log(fetch('https://reqres.in/api/users'));

// fetch('data/babies.json').then(function(response){
//     return response.json();
// });


// fetch().then();
// fetch().then().catch();
// fetch().then().then().catch();
// fetch().then().then().finally();

//fetch(resource)
//'https://reqres.in/api/users'
//https://jsonplaceholder.typicode.com/users
//'https://jsonplaceholder.typicode.com/photos'
//https://jsonplaceholder.typicode.com/posts
//fetch(resource, options)

//What to learn
//Promises


