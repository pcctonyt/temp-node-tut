setInterval(() => {
    console.log("hello world");
}, 2000)
console.log("I will run first");
// process stays alive unless
// Kill Process CONTROL + C
//unexpected error
// doesn't stop running the hello worlds because setInterval() is asynchronous running in those 2000ms increments unlike second example setTimeout()