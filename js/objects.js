//(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     */
     //Example:
    var person = {firstName: "Lynette", lastName: "Barrera"};
      console.log(person.firstName) // "Rick"
      console.log(person.lastName) // "Sanchez"



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     */
    person.sayHello = function() {
      return "Hello from " + this.firstName + " " + this.lastName + "!";
    };
    console.log(person.sayHello()) // "Hello from Rick Sanchez!"


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
    var discount = .12;
    var newPay;
    for(var i = 0; i <shoppers.length; i++) {
        if(shoppers[i].amount > 200) {
            shoppers[i].newPay = (1-discount) * shoppers[i].amount;
            if (shoppers[i].newPay - parseInt(shoppers[i].newPay) > 0) {
                shoppers[i].newPay = shoppers[i].newPay.toFixed(2);
            }
            console.log(shoppers[i].name + " has spent $" + shoppers[i].amount + " and is eligible for the " + discount*100 + "% discount! The new amount is $" + shoppers[i].newPay + " with $" + discount*shoppers[i].amount + " amount in savings!");
        } else {
            shoppers[i].newPay = shoppers[i].amount;
            console.log(shoppers[i].name + " has spent $" + shoppers[i].amount + " and is not eligible for the " + discount*100 + "% discount. The amount to be paid is $" + shoppers[i].newPay + ".");
        }

    }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     */
    var books = [
        {
           author: {firstName: "J.K.", lastName: "Rowling"},
           title: "Harry Potter"
        },
        {
            author: {firstName: "Rick", lastName: "Riordan"},
            title: "Percy Jackson"
        },
        {
            author: {firstName: "Eoin", lastName: "Colfer"},
            title: "Artemis Fowl"
        },
        {
            author: {firstName: "Veronica", lastName: "Roth"},
            title: "Divergent"
        },
        {
            author: {firstName: "Suzanne", lastName: "Collins"},
            title: "The Hunger Games"
        }
    ];
     console.log(books[0].title) // "The Salmon of Doubt"
     console.log(books[0].author.firstName) // "Douglas"
     console.log(books[0].author.lastName) // "Adams"

    books.createBook = function(title, authorName) {
        var authorArray = authorName.split(" ");
        var book = {author: {firstName: authorArray[0], lastName: authorArray[1]}, title: title};
        books.push(book);
    };

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    function showAllBooks() {
        for(var i = 0; i < books.length; i++) {
            console.log("Book # " + (i+1) + "\n");
            showBookInfo(books[i]);
        }
    }
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    // function createBook(title, authorName) {
    //     var authorArray = authorName.split(" ");
    //     var book = {title: title, author: {firstName: authorArray[0], lastName: authorArray[1]}};
    //     return book;
    // }
    function showBookInfo(object) {
        console.log("Title: " + object.title + "\nAuthor: " + object.author.firstName + " " + object.author.lastName + "\n-------")
    }
//})();
