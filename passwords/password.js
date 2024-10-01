const bcrypt = require('bcrypt');
const md5 = require('md5');
const fs = require('fs');

const password = process.argv[2];

console.log("Password: ", password);
// Default algorithm is: Blowfish
const blowfishHash = bcrypt.hashSync(password, 10)

fs.writeFileSync('password.txt', blowfishHash);
console.log("Blowfish Hash: ", blowfishHash);
// MD5
console.log("MD5 Hash: ", md5(password))
