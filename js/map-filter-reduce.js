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

users.filter(user => {
   if(user.languages.length >= 3){
       return user;
   }
});
users.map(user => user.email);



users.reduce((object, user) => {
    let {id, name, email, languages} = user;
    object[id] = {name, email, languages};
    return object;
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
customers.map(customer => {
   return {name: customer.name, age: customer.age};
});

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
customers.filter(customer => {
    if (customer.occupation === "Teacher" || customer.occupation === "Police Officer"){
        return customer;
    }
}).map(customer => {
    return {name: customer.name, age: customer.age};
});

// PROBLEM 4 - determine the average age of customers

let averageAge = customers.reduce((total, customer) => {
    total += customer.age;
    return total;
}, 0)/customers.length;










//            PROBLEM 1 HINT - use .map()






















//            PROBLEM 2 HINT - use .map()
















//            PROBLEM 3 HINT - use .filter()


















//            PROBLEM 4 HINT - use .reduce()

