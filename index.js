const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/welcome', (req, res) => {
    res.send("Welcome to Lab # 6 of Sir Laeeq Khan Niazi");
})

app.listen(PORT, ()=>{
    console.log(`Server up and running on port ${PORT}.`);
})