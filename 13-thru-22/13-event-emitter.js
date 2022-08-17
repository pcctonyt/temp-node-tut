// either extend an existing class or create a new one
//.on() - listen for an event
//.emit() - emit an event
//strings passed in to both need to match
// can have as many listeners as needed and order matters, listen then emit
//EVENTS ARE A CORE BUILDING BLOCK OF NODE EVEN IF WE DONT WRITE THEM OURSELVES

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
    console.log(`data received ${name} with age: ${age}`)
})
customEmitter.on("response", () => {
    console.log("some other logic here ")
})

customEmitter.emit("response", "tony", 47)

