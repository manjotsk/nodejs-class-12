const bcrypt = require('bcrypt');
const fs = require('fs');

const hashedPasswordInDatabase = fs.readFileSync('password.txt', 'utf8');

const password = process.argv[2];

console.log(
    "Is password correct? ",
    bcrypt.compareSync(password, hashedPasswordInDatabase)
)