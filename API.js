// JAVASCRIPT-API-Tutorial-start //


// 1. To use JSON data from a JavaScript API, fetch must be used. Below is an example -

document.getElementById('API-Button').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
})





// 2. To convert any JavaScript Array, Object, or Value into a JSON string, JSON.stringify is used. Below is an example -

const Data1 = { Id: 1, Name: "KING ALVI", Job: "Businessman" };
console.log(Data1);
const stringifyByJSON1 = JSON.stringify(Data1);
console.log(stringifyByJSON1);





// 3. To convert a JSON string back into a JavaScript Array, Object, or Value, JSON.parse is used. Below is an example -

const Data2 = { Id: 1, Name: "KING ALVI", Job: "Businessman" };
const stringifyByJSON2 = JSON.stringify(Data2);
console.log(stringifyByJSON2);
const parseByJSON = JSON.parse(stringifyByJSON2);
console.log(parseByJSON);





// 4. In JavaScript, API data is typically fetched using two types of fetch operations. Below are examples -

//// 1. Normal fetch - where operations occur synchronously.

const loadUserFetch = () => {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => console.log(error));
}

//// 2. Async/Await fetch - where operations occur step by step.
//// First, the fetch operation occurs, then the response is converted into JSON, and finally, the API data is displayed.

const LoadData2 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
}

LoadData2();

// JAVASCRIPT-API-Tutorial-end //