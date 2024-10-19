// Checking Usernames 
var current_users = ['user1', 'user2', 'admin', 'guest', 'member'];
var new_users = ['User1', 'newuser', 'Guest', 'admin2', 'visitor'];
new_users.forEach(function (newUser) {
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(newUser.toLowerCase())) {
        console.log("The username ".concat(newUser, " is already taken. Please choose a different username."));
    }
    else {
        console.log("The username ".concat(newUser, " is available."));
    }
});
