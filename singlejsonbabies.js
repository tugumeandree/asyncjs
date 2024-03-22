// fetch('data/babies.json')
// .then(response => response.json())
// .then(data => showInfo(data))

// function showInfo(data){
//     console.table(data.babies)
// }

fetch('data/babies.json')
.then(response => response.json())
.then(data => showBaby(data.babies, 0)) // Display the first baby by default
.catch(error => console.error('Error fetching data:', error));

function showBaby(babies, index) {
const baby = babies[index];
if (!baby) {
  console.error('Invalid index or no data for baby:', index);
  return;
}

const container = document.getElementById('baby-details');
container.innerHTML = `
  <h2>${baby.name}</h2>
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
}
