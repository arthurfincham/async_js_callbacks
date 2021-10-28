var users = ["Arthur", "Leo", "Fleur"];


function addUser(user, callback) {
  setTimeout(function () {
    // callback won't be called until this has run (3000ms)
    users.push(user);
    callback();
  }, 3000);
}

function getUsers() {
  setTimeout(function () {
    console.log(users);
  }, 0);
}

// Here, getUsers() will not be called until addUser() is finished and Holly is added to users.
addUser("Holly", getUsers);
