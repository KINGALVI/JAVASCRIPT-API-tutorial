// Example - 1

document.getElementById('Users-Button').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(Data => console.log(Data))
})





// Example - 2 

document.getElementById('Comments-Button').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(Data => fetchData(Data));

    const fetchData = (Data) => {
        for (const users of Data) {
            console.log(users);
        }
    }
})





// Example - 3 

document.getElementById('Email-Button').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(Data => fetchData(Data))

    const fetchData = (Data) => {

        const ul = document.getElementById('Email-list')

        for (const Emails of Data) {
            const createElemant = document.createElement('li');
            createElemant.innerText = Emails.email
            ul.appendChild(createElemant);
        }
    }
})