const express = require('express')
const app = express();
const port = 8080;
const path = require('path')

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname + '/index.html'))
})