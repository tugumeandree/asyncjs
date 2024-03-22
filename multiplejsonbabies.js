document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('data-container');
  
    fetch('/data/babies.json')
      .then(response => response.json())
      .then(data => {
        data.babies.forEach(baby => {
          const babyDiv = document.createElement('div');
          babyDiv.innerHTML = `
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
          container.appendChild(babyDiv);
        });
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  });
  