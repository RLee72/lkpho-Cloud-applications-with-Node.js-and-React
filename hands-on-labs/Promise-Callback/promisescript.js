// Creating a promise method. 
// The promise will get resolved when the timer times out after 6 seconds
let myPromise1 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Promise 1 resolved")
    }, 6000)
})

let myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved")
    }, 3000)
})

let myPromise3 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("Promise 3 resolved")
    }, 6000)
})

let myPromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 4 resolved")
    }, 3000)
})

// Consol log before calling the promise
console.log("Before calling promise");

// the third promise is invoked after the fourth promise is resolved
myPromise3.then((successMessage) => {
    console.log("From Callback " + successMessage)
    myPromise4.then((successMessage) => {
        console.log("From Callback " + successMessage)
    })
})

// Call the promise
// wait for it to be resolved
// print message
myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
})

myPromise2.then((successMessage) => {
    console.log("From Callback "+ successMessage)
})

// Console log after calling the promise
console.log("After calling promise");

// The order in which the console logs are executed tell you that the 
// statements after the promise call are executed one after the other and the promise 
// is simultaneouly getting resolved or rejected.