const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

users.filter(({ languages }) => languages.length >= 3 ? {} : false);
users.map(({ email }) => email);
users.reduce((accum, { id, name, email, languages }) => {
    accum[id] = {name, email, languages};
    return accum;
}, {});


const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];


// PROBLEM 1 - create an array of the first letters of each fruit
fruits.map(fruit => fruit[0]);

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
customers.map(({ name, age }) => {
   return {name, age};
});

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
customers.filter(({ occupation }) => occupation === "Teacher" || occupation === "Police Officer").map(({ name, age }) => {return {name, age}});

// PROBLEM 4 - determine the average age of customers

let averageAge = customers.reduce((total, { age }) => {
    total += age;
    return total;
}, 0)/customers.length;


// Given the following array...
const names = ["John", "Max", "Ronald"];
// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
names.map(name => `${name} Smith`);
// - Create an array where each word is in all caps
names.map(name => name.toUpperCase());
// - Create an array where all names have more than 3 letters
names.filter(name => {
   if(name.length > 3){
       return name;
   }
});
// - Create an array of names with only the last two letters of each name
names.map(name => name[name.length-2] + name[name.length-1]);
// - Create a total count of all letters
names.reduce((total, name) => {
    total += name.length;
    return total;
}, 0);
// - Create a string of all letters in alphabetical order
names.reduce((string, name) =>{
    string += name.toLowerCase();
    return string.split("").sort().join("");
}, "");
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
names.map((name) =>{
    return {name: name, wordLength: name.length, firstLetter: name[0], lastLetter: name[name.length-1]}
});
// - Create a string of all vowels in the entire array of names
names.reduce(name => {

});
// - Create a single object with properties


// Given the following array...
const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];
// complete the bonuses below...
// - Calculate the average age of family members
// - Create an array of family objects without the age property
// - Create an array of all minors
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and ages
family.reduce((object, { name, gender, age }) => {
    if(typeof object["names"] === "undefined"){
        object["names"] = [];
    }
    if(typeof object["genders"] === "undefined"){
        object["genders"] = [];
    }
    if(typeof object["ages"] === "undefined"){
        object["ages"] = [];
    }
    object["names"].push(name);
    object["genders"].push(gender);
    object["ages"].push(age);
   return object;
}, {});
//output same as above
let familyObj = {
    names: family.map(({ name }) => name),
    genders: family.map(({ gender }) => gender),
    ages: family.map(({ age }) => age)
};