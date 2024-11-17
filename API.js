                                              // JAVASCRIPT API Tutorial start //




// ১। JAVASCRIPT API এর JSON Data কে ব্যবহার করতে হলে fetch ব্যবহার করতে হবে । নিচে তার উধাহরন দেওয়া হলো - 

document.getElementById('API-Button').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
})










// ২। JAVASCRIPT এর যেকোন Array , Object বা Value কে JSON এর String এ convert করার জন্য JSON.stringify ব্যাবহার করা হয় । নিচে তার উধাহরন দেওয়া হলো -

const Data1 = { Id: 1, Name: "KING ALVI", Job: "Bisnessman" };
console.log(Data1);
const stringifyByJSON1 = JSON.stringify(Data1);
console.log(stringifyByJSON1);










// ৩। JAVASCRIPT এর যেকোন Array , Object বা Value কে JSON এর String থেকে পুনুরায় JAVASCRIPT এর Array , Object বা Value তে রুপান্তর করার জন্য JSON.parse ব্যবহার করা হয় । নিচে তার উধাহরন দেওয়া হলো - 

const Data2 = { Id: 1, Name: "KING ALVI", Job: "Bisnessman" };
const stringifyByJSON2 = JSON.stringify(Data2);
console.log(stringifyByJSON2);
const parseByJSON = JSON.parse(stringifyByJSON2);
console.log(parseByJSON);










// ৪। JAVASCRIPT এ API Data কে ব্যবহার করার জন্য মূলত দুই রকমের fetch Operation করা হয় । নিচে আমার তার উধাহরণ দেওয়া হল -


//// ১ । এটি হলো Normal fetch , যেখানে একসাথে Operation হয়ে থাকে । 

const loadUserFetch = () => {
    const url = 'https://randomuser.https://randomuser.me/api/?gender-female';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => console.log(error));
}

//// ২ । এটি হলো await fetch , যেখানে একটি পর একটি Opreration হয়ে থাকে । প্রথমে fetch এর Operation হয়ে থাকে । তারপর fetch Operation থেকে যে Responce পাওয়া যায় , সেই Responce কে json এ Convert করা হয় । এরপর সব শেষে API এর Data কে Show করা হয় । নিচে আমার তার উধাহরণ দেওয়া হল - 

const loadUserAsync = async () => {
    const url = 'https://randomuser.https://randomuser.me/api/?gender-female';
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUser(data.results[0]);
    }
    catch (error) {
        console.log(error);
    }
}





                                              // JAVASCRIPT API Tutorial end //
