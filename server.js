const express = require("express");
const path = require("path");
const app = express();

// a light weight server module
const port = 3000;

const appName = process.env.APP_NAME;

app.use('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("request received");
    console.log(`App name: ${appName}`);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`App name: ${appName}`);
});