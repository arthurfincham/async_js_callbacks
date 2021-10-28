// const readline = require('readline');
// const got = require('got');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

//  ----- Do not touch anything above this line! ;-) --------

// console.log(1)

// rl.question('What is the secret word? ', (answer) => {
//   console.log(3)
//   console.log(`Thanks for entering the secret word: ${answer}. You can go on.`);
//   console.log(4)
// });
// console.log(2)

// console.log(1)
// got("https://async-workshops-api.herokuapp.com/people")
//   .json()
//   .then((peopleResponse) => {
//     console.log("People response:", peopleResponse);
//     console.log(3);
//   });
// console.log(2)

// console.log(1)
// let getReturnValue = got("https://async-workshops-api.herokuapp.com/people")
//   .json()
//   .then((peopleResponse) => {
//     console.log("People response:", peopleResponse);
//     console.log(3);
//   });
// console.log(2);

// console.log(1)
// got("https://async-workshops-api.herokuapp.com/people")
//   .json()
//   .then((peopleResponse) => {
//     peopleResponse.forEach((person) => console.log(person.name));
//     console.log(3);
//   });
// console.log(2)


// console.log(1)
// setTimeout(() => {
//   console.log("Hi there!");
//   console.log(3);
// }, 0);
// console.log(2)

var users = ['Arthur', 'Leo', 'Fleur']

function addUser(user, callback){
  setTimeout(function(){
    users.push(user);
    callback();
  }, 3000)
};

function getUsers(){
  setTimeout(function(){
    console.log(users);
  }, 0)
};

addUser('Holly', getUsers);