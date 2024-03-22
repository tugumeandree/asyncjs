import { babyDummyData } from './data/babiesdata.js';


// Get the container element where you want to display the data
const container = document.getElementById('data-container');

// Loop through each baby in the babyDummyData array
babyDummyData.babies.forEach(baby => {
  // Create a new <div> element to display the baby's data
  const babyDiv = document.createElement('div');

  // Set the inner HTML of the new <div> element to the baby's data
  babyDiv.innerHTML = `
    <h3>${baby.name}</h3>
    <p>Gender: ${baby.gender}</p>
    <p>Age: ${baby.age}</p>
    <p>Location: ${baby.location}</p>
    <p>Person Brought By: ${baby.personBroughtBy}</p>
    <p>Time Of Arrival: ${baby.timeOfArrival}</p>
    <p>Parents Names: ${baby.parentsNames.join(', ')}</p>
    <p>Fee In Ugx: ${baby.feeInUgx}</p>
    <p>Period Of Stay: ${baby.periodOfStay}</p>
    <p>Baby Number: ${baby.babyNumber}</p>
    <img src="${baby.image}" alt="${baby.name}" style="max-width: 100px; max-height: 100px;">
  `;

  // Append the new <div> element to the container
  container.appendChild(babyDiv);
});
