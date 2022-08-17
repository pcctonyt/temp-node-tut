// "data" is the event in class streamReadable
// reads data in 64KB chunks, big.txt is actually 169KB

const { createReadStream } = require("fs"); 

const stream = createReadStream("./content/big.txt", { highWaterMark: 90000, encoding: "utf8"});

//default 64KB  TO CHANGE THAT DEFAULT SETTING, WE PASS IN THE OBJECT AS BELOW:
// last buffer - remainder
// highWaterMark - control size
// const stream = createReacStream("./content/big.txt", { highWaterMark: 90000 });
//const stream = createReadStream("../content/big.txt", { encoding: "utf8" })

stream.on("data", (result) => {
    console.log(result);
})
stream.on("error", (err) => {
    console.log(err)
})
