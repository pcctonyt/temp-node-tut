// npm - gloabl command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

//The event loop allows Node.js to perform non-blocking I/O since JavaScript is single threaded (synchronous) Nodejs.dev/ for docs type event loop in YouTube course-api.com/slides for smilga's slides

const { readFile } = require("fs");


const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, "utf8", (err,data) => {
            if(err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

//getText("./content/first.txt").then(result => console.log(result)).catch(err => console.log(err))

const start = async() => {
    const first = await getText("./content/first.txt");
    console.log(first)
}

start()



//The process stays alive because .listen() is asynchronous.  Don't confuse it with the response, this just sets up the server, there might be an error

/* Node.js and Express.js - Full Course freeCodeCamp.org  3:03:31 left off*/