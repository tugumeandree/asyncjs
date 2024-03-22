// Fetch a single user by ID
fetch('https://reqres.in/api/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  })
  .then(data => {
    console.log('User:', data.data); // The 'data' property contains the user object
  })
  .catch(error => {
    console.error('Error fetching user:', error);
  });





  // Function to fetch users based on a query parameter
  function fetchUsers(page) {
    fetch(`https://reqres.in/api/users?page=${page}`)
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
  }

  // Call fetchUsers with page 1 initially
  fetchUsers(1);
