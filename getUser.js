// Fetch a list of users
fetch('https://reqres.in/api/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    console.log('Users:', data.data); // The 'data' property contains the array of users
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });




// console.log(fetch('https://reqres.in/api/users'));
// .then(response => console.log(response))
//.then(data => console.log(data) )
//.catch(error => console.log(error))
//promise, response , data or catch an error



// Fetch a list of users and display them on the screen
fetch('https://reqres.in/api/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  })
  .then(data => {
    const userListDiv = document.getElementById('user-list');
    const users = data.data;

    // Create a list element to hold the user names
    const userList = document.createElement('ul');

    // Add each user name to the list
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.first_name} ${user.last_name}`;
      userList.appendChild(listItem);
    });

    // Append the list to the user list container
    userListDiv.appendChild(userList);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
