const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const friends = [
    {id: 1, name: 'Dimeji'},
    {id: 2, name: 'Ifiok'},
    {id: 3, name: 'Brenda'}
]

app.get('/api/friends', (req,res,next) => {
    res.json(friends);
})
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
} )