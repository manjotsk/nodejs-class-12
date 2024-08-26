/**
 * 
function func2(){
    return "hello Amritsar!"
}

function func1() {
    // return "hello tangra!"
    // return 123 // number
    // return; // undefined
    // return null
    // return true
    // return {name:"manjot"}
    // return [1,2,3,4,5]
    // return [{name:'manjot'},{name:'prabh'}]
    // return new Date()
    return func2
}



const val1 = func1()

console.log(typeof val1())
console.log(val1())
*/

function func3() {
    return "Hello Punjab!"
}

function func2(){
    return func3
}

function func1() {
    console.log(`func1`)
    console.log(`func1`)
    console.log(`func1`)
    console.log(`func1`)
    console.log(`func1`)
    return func2
}


// const val1 = func3()
// const val1 = func2()()
const val1 = func1()()()

console.log(typeof val1)
console.log(val1)
