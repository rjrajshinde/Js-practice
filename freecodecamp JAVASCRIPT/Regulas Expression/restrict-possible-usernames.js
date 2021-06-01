// Restrict Possible UsernamesPassed
// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

// Usernames can only use alpha-numeric characters.

// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// Username letters can be lowercase and uppercase.

// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Change the regex userCheck to fit the constraints listed above.


let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);



// Code Explanation
      // ^ - start of input
      // [a-z] - first character is a letter
      // [a-z]+ - following characters are letters
      // \d*$ - input ends with 0 or more digits
      // | - or
      // ^[a-z] - first character is a letter
      // \d\d+ - following characters are 2 or more digits
      // $ - end of input