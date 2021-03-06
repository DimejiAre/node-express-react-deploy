require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.use(express.static(__dirname + '/client/build'));
app.use(cors());
app.use(express.json());

const friends = [
    {id: 1, name: 'Dimeji'},
    {id: 2, name: 'Ifiok'},
    {id: 3, name: 'Brenda'}
]

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

app.get('/api/friends', (req,res) => {
    res.json(friends);
})
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
} )