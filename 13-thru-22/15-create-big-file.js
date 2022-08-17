//USE STREAMS WHEN READING FILES
// VARIABLES NOT ALWAYS GOOD ENOUGH ON REALLY BIG STRINGS, SOMETIMES THROWS AN ERROR

const { writeFileSync } = require("fs");
for( let i = 0; i < 10000; i++) {
    writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" })
}