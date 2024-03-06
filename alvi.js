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





// Most Important Example - 4 

document.getElementById('post-btn').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(Data => fetchData(Data))

    const fetchData = (Data) => {
        const postContainer = document.getElementById('Post-Container');
        for (const post of Data) {
            const createElemant = document.createElement('div');
            createElemant.classList.add('Post-Container')
            createElemant.innerHTML = `
        <hr/>
        <h1>${post.id}. ${post.title}</h1>
        <p>${post.body}</p>
        <hr/>
        `
            postContainer.appendChild(createElemant);
        }
    }
})





// Example - 5

document.getElementById('quote-btn').addEventListener('click', function () {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(Data => quoteLine(Data))


    const quoteLine = (Data) => {
        const quotePlace = document.getElementById('quote');
        quotePlace.innerText = Data.quote;
    }

})





// Most Important Example-6

document.getElementById('user-btn').addEventListener('click', function () {

    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(Data => userInformation(Data.results));

    const userInformation = Data => {

        const userContainer = document.getElementById('user-container');

        for (const user of Data) {
            const createElemant = document.createElement('div');
            createElemant.classList.add('user-container');
            createElemant.innerHTML = `
            <h1 class="user-info">User information</h1>
            <img src="${user.picture.large}">
            <p>Name : ${user.name.title}.${user.name.first} ${user.name.last} </p>
            <p>Gender : ${user.gender} </p>
            <p>Email : ${user.email}</p>
            <p>Location : ${user.location.city} , ${user.location.state} , ${user.location.country}

            `
            userContainer.appendChild(createElemant);
        }

    }

})





// Most Important Example -7

document.getElementById('country-btn').addEventListener('click', function () {

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(Data => countryInfo(Data));

    const countryInfo = Data => {

        const countryContainer = document.getElementById('country-container');

        Data.forEach(country => {
            const createElemant = document.createElement('div');
            createElemant.classList.add('country');
            createElemant.innerHTML = `
        <h2> Country Name : ${country.name.common} </h2>
        <img src="${country.flags.png}">
        <h3> Official Name : ${country.name.official} </h3>
        <h3> Capital : ${country.capital ? country.capital[0] : 'No Capital'} </h3>
        <button onclick="countryApi('${country.cca2}')"> Detail Information </button>
        `;
            countryContainer.appendChild(createElemant);

        });
    };

})


const countryApi = (Data) => {
    const detailCountryData = `https://restcountries.com/v3.1/alpha/${Data}`
    fetch(detailCountryData)
        .then(res => res.json())
        .then(Data => countryDetailInfo(Data[0]))
}

const countryDetailInfo = (Country) => {

    console.log(Country)
    const countryInfoContainer = document.getElementById('country-info-container');
    countryInfoContainer.classList.add('country-detail-container')
    countryInfoContainer.innerHTML = `
    <img src="${Country.flags.png}">
    <h2> Country Officral Name : ${Country.name.official} </h2>
    <h2> Continents : ${Country.continents} </h2>
    <h2> Capital : ${Country.capital} </h2>
    <h2> Freedom Status : ${Country.independent === true ? " This is a Independent Country " : " This is not a Independent Country "} </h2>
`

}





// Example - 8 

document.getElementById('food-button').addEventListener('click', function () {

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(Data => foodDataDisplay(Data.meals))

    const foodDataDisplay = Data => {

        const foodContainer = document.getElementById('food-card-container');

        Data.forEach(food => {
            const createElemant = document.createElement('div');
            createElemant.classList.add('col')
            createElemant.innerHTML = `
             <div class="card">
               <img src="${food.strMealThumb}" class="card-img-top h-25 w-50" alt="...">
               <div class="card-body">
                   <h3 class="card-title">Food Name : ${food.strMeal} </h3>
                   <br><br>
                   <center> <h4> Food Ingredients </h4> </center>
                   <h5> ${food.strIngredient1} , ${food.strIngredient2} , ${food.strIngredient3} , ${food.strIngredient4} , ${food.strIngredient5} , ${food.strIngredient6} , ${food.strIngredient7} , ${food.strIngredient8} , ${food.strIngredient9} </h5>
                   <br><br>
                   <center> <h4> Food Instructions </h4> </center>
                   <p class="card-text">${food.strInstructions}</p>
                   <p class="card-text"> Watch the video : <a href="#" class="stretched-link text-danger" style="position: relative;"> ${food.strYoutube} </a> </p>
               </div>
             </div>
        `
            foodContainer.appendChild(createElemant);
        });

    }

})