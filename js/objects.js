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
            title: "Harry Potter",
            keywords: ["fantasy", "magic", "friendship"],
            available: true,
            dateAvailable: "Now"
        },
        {
            author: {firstName: "Rick", lastName: "Riordan"},
            title: "Percy Jackson",
            keywords: ["myths", "greek gods", "pre-teen"],
            available: true,
            dateAvailable: "Now"
        },
        // {
        //     author: {firstName: "Eoin", lastName: "Colfer"},
        //     title: "Artemis Fowl",
        //     keywords: ["genius", "puzzles", "code-breaking"],
        //     available: true,
        //     dateAvailable: "Now"
        // },
        // {
        //     author: {firstName: "Veronica", lastName: "Roth"},
        //     title: "Divergent",
        //     keywords: ["dystopian", "adolescent"],
        //     available: true,
        //     dateAvailable: "Now"
        // },
        // {
        //     author: {firstName: "Suzanne", lastName: "Collins"},
        //     title: "The Hunger Games",
        //     keywords: ["dystopian", "love", "death"],
        //     available: true,
        //     dateAvailable: "Now"
        // }
    ];
     // console.log(books[0].title) // "The Salmon of Doubt"
     // console.log(books[0].author.firstName) // "Douglas"
     // console.log(books[0].author.lastName) // "Adams"
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
    books.createBook = function(title, authorName) {
        var authorArray = authorName.split(" ");
        var book = {author: {firstName: authorArray[0], lastName: authorArray[1]}, title: title, keywords: [], available: true, dateAvailable: "Now"};
        books.push(book);
    };
    books.lend = function(book) {
        var bookI;
        this.forEach(function(el, index) {el.title == book ? bookI = index : false});
        this[bookI].available = false;
        var date = new Date();
        date.setDate(date.getDate() + 14);
        this[bookI].dateAvailable = date;
    };
    books.receive = function(book) {
        var bookI;
        this.forEach(function(el, index) {el.title == book ? bookI = index : false});
        this[bookI].dateAvailable = "Now";
        this[bookI].available = true;
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
        var bookList = "";
        for(var i = 0; i < books.length; i++) {
            bookList += "Book # " + (i+1) + "\n" + showBookInfo(books[i]);
        } return bookList;
    }
    function showBookInfo(object) {
        var isAvailable;
        object.available == true ? isAvailable = "Available" : isAvailable = "Not Available until";
        return "Title: " + object.title + "\nAuthor: " + object.author.firstName + " " + object.author.lastName + "\n" + isAvailable + " " + object.dateAvailable + "\nKeywords: " + object.keywords + "\n-------\n";
    }
    // BONUS 2 (expanding on the books object exercise):
    // Add a property "keywords" that contains an array of possible genres the book may be categorized by
    // Add a boolean property "available" and set it to true
    // Add a dateAvailable property that has a string of the date/time when the book will be available
    // Add a method lend() that...
    // - changes the available property to false if it is not already false
    // - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
    // (to do this, research the JS Date object and use methods from it in your code)
    // Add a method receive() that...
    // - changes the available property to true
    // - changes the dateAvailable property to the string "now"
    // BONUS 3 (expanding on the books object exercise):
    // Create an application to take in user input to build the books array of objects.
    //     Allow the user to continue adding books or to finish adding books.
    //     Once the books have been added, output the books array in the console.
    //     Allow a user to delete a book or a group of books by title or author last name
    // Allow a user to edit a book by index number in the books array
    var library = prompt("Please choose what you would like to do from the following choices:\n1: Add a book to your library.\n2. Delete a book from your library.\n3. Edit a book in your library.\n4. Display all books in your library.");
    while(library) {
        switch (library) {
            case "1":
                userCreateBook();
                break;
            case "2":
                deleteBook();
                break;
            case "3":
                editBook();
                break;
            case "4":
                alert(showAllBooks());
                break;
            case null:
                break;
            default:
                alert("That is not a valid option.");
        }
        library = prompt("Please choose what you would like to do from the following choices:\n1: Add a book to your library.\n2. Delete a book from your library.\n3. Edit a book in your library.\n4. Display all books in your library.")
    }
    function userCreateBook() {
        do {
            var bookTitle = prompt("Please tell me the title of the book.");
            var author = prompt("Please enter the author's first and last name.");
            books.createBook(bookTitle, author);
        } while(confirm("Would you like to add more books to your library?"))
    }
    function deleteBook() {
        do {
            var deleteBook = prompt("Please enter the title of the book or last name of the author of the book you would like to delete:");
            var noChange = 0;
            books.forEach(function (book, index) {
                if (book.title == deleteBook || book.author.lastName == deleteBook) {
                    books.splice(index, 1);
                    alert("You have deleted " + book.title);
                } else {
                    noChange++;
                }
            });
            if (noChange == books.length) {
                alert("There is no such book in your library.");
            }
        } while (confirm("Would you like to delete more books from your library?"));
    }
    function editBook() {
        do {
            var editBookIndex = prompt("Please enter the number of the book you would like to edit:\n" + showAllBooks());
            var toEdit = prompt("What information would you like to edit? Title, Author, or Keywords");
            toEdit = toEdit.toLowerCase();
            if (toEdit == "title") {
                books[editBookIndex - 1].title = prompt("Please enter the new title for the book.");
            } else if (toEdit == "author") {
                var author = prompt("Please enter the author's name.");
                author = author.split(" ");
                books[editBookIndex - 1].author.firstName = author[0];
                books[editBookIndex - 1].author.lastName = author[1];
            } else if (toEdit == "keywords") {
                var keywords = prompt("Please enter keywords for this array separated by commas.");
                books[editBookIndex - 1].keywords = keywords.toLowerCase().split(", ");
            }
        } while (confirm("Would you like to edit any more book information from your library?"))
    }

//})();
// ================================= OBJECTS BONUSES
// BONUS 1 (create a dog object):
// The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array
var dog ={
        breed: "Bulldog",
        weightInPounds: 20,
        age: 3,
        color: "gray",
        sterilized: false,
        shotRecords: [{typeOfShot: "rabies", date: "Mon Jan 29 2018 08:13:07 GMT-0600 (CST)"}],
        bark: function() {console.log("Woof!");},
        getOlder: function() {this.age += 1;},
        fix: function() {this.sterilized ? console.log("Dog is already sterilized!") : this.sterilized = true},
        vaccinate: function(newShot) {dog.shotRecords.push({typeOfShot: newShot, date: Date()})}
}

