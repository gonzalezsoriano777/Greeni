const express = require('express');
const app = express();


app.get('/:name', (req, res) => {
    res.send('Hey ' + req.params.name + ' Nice to meet you!')
})

app.listen(8080, function(){
    console.log('Listening to port 8080');
})