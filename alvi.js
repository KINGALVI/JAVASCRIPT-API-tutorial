// Example - 1

document.getElementById('Users-Button').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(Data => console.log(Data))
})