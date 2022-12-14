const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('<h1>Bot online</h1>');
});
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Bot ready.');
    });
    return true;
} 
