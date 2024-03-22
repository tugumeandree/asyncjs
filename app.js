//GET GET Request (Fetch Users):
fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => console.log('Users:', data.data))
  .catch(error => console.error('Error fetching users:', error));


  //POST POST Request (Create User):

  fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    job: 'Software Developer'
  })
})
  .then(response => response.json())
  .then(data => console.log('Created User:', data))
  .catch(error => console.error('Error creating user:', error));

  //PUT PUT Request (Update User):
  fetch('https://reqres.in/api/users/2', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Jane Doe',
    job: 'Product Manager'
  })
})
  .then(response => response.json())
  .then(data => console.log('Updated User:', data))
  .catch(error => console.error('Error updating user:', error));

  //DELETE DELETE Request (Delete User):

  fetch('https://reqres.in/api/users/2', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('User deleted successfully');
    } else {
      throw new Error('Failed to delete user');
    }
  })
  .catch(error => console.error('Error deleting user:', error));

  //PATCH PATCH Request (Partially Update User):
  fetch('https://reqres.in/api/users/2', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    job: 'Project Manager'
  })
})
  .then(response => response.json())
  .then(data => console.log('Partially Updated User:', data))
  .catch(error => console.error('Error partially updating user:', error));
