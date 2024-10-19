// Checking Usernames 

let current_users: string[] = ['user1', 'user2', 'admin', 'guest', 'member'];
let new_users: string[] = ['User1', 'newuser', 'Guest', 'admin2', 'visitor'];

new_users.forEach(newUser => {
  if (current_users.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
    console.log(`The username ${newUser} is already taken. Please choose a different username.`);
  } else {
    console.log(`The username ${newUser} is available.`);
  }
});
