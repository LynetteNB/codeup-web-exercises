console.log("Hello from external JavaScript");
alert("Welcome to my website!");
var favoriteColor = prompt("What is your favorite color?");
favoriteColor = favoriteColor.trim();
favoriteColor = favoriteColor[0].toUpperCase() + favoriteColor.substring(1, favoriteColor.length).toLowerCase().trim();
alert("OMG! " + favoriteColor + " is my favorite color too!");