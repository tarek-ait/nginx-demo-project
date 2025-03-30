const express = require("express");
const path = require("path");
const app = express();
// a light weight server module
const port = 3000;


app.use('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("request received");
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});