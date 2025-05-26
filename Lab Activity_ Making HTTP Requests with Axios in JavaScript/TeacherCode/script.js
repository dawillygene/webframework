const output = document.getElementById("output");

function renderUsers(users){
    output.innerHTML = '<h2>Users: </h2>' + users.map(user => `<li>${user.name}</li>`).join('')+'</ul>';
} 

function getUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
    console.log('GET response:', response);
    renderUsers(response.data);
    })
    .catch(error => {
    console.error('GET error:', error);output.innerHTML = `<p style="color:red;">Error fetching users:
    ${error.message}</p>`;
    });
    }

    function createUser() {
        const newUser = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com'
        };
        axios.post('https://jsonplaceholder.typicode.com/users', newUser)
        .then(response => {
        console.log('POST response:', response);
        output.innerHTML = `<p>User created: ${response.data.name}</p>`;
        })
        .catch(error => {
        console.error('POST error:', error);
        output.innerHTML = `<p style="color:red;">Error creating user:
        ${error.message}</p>`;
        });
        }