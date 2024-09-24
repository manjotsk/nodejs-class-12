const md5 = require('md5');


const isValid = false;
let initialPassword = 0

// password to crack
const passwordHashToCrack = "25d55ad283aa400af464c76d713c07ad"

const listOfChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const crack = async () => {
    while (!isValid) {
        console.log(`Trying password ${initialPassword}`);
        const passwd = `${initialPassword}`
        const hash = md5(passwd);
        // console.log(`Hash is ${hash}`);
        if (hash === passwordHashToCrack) {
            console.log(`Password is ${passwd}`);
            break;
        }
        initialPassword++;
        /// wait for 0.1 seconds
        // await new Promise((resolve) => setTimeout(resolve, 30));
    }
}

crack()