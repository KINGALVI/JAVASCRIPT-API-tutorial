// JAVASCRIPT এর যেকোন Array , Object বা Value কে JSON এর String এ convert করার জন্য JSON.stringify ব্যাবহার করা হয় । নিচে তার উধাহরন দেওয়া হলো -

const Data1 = { Id: 1, Name: "KING ALVI", Job: "Bisnessman" };
console.log(Data1);
const stringifyByJSON1 = JSON.stringify(Data1);
console.log(stringifyByJSON1);





// JAVASCRIPT এর যেকোন Array , Object বা Value কে JSON এর String থেকে পুনুরায় JAVASCRIPT এর Array , Object বা Value তে রুপান্তর করার জন্য JSON.parse ব্যবহার করা হয় । নিচে তার উধাহরন দেওয়া হলো - 

const Data2 = { Id: 1, Name: "KING ALVI", Job: "Bisnessman" };
const stringifyByJSON2 = JSON.stringify(Data2);
console.log(stringifyByJSON2);
const parseByJSON = JSON.parse(stringifyByJSON2);
console.log(parseByJSON);