const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(cors())
cors({credentials: true, origin: true})

const products = {
    name:'skates',
    company:'Bauer',
    size:12,
    id:15623,
    picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlgWOTmrxUV6VvT_MZlNP9nne2e61h8p3RlP96JaI84zEuyuU2&usqp=CAU'
}
const stringProducts = JSON.stringify(products);


app.get('/',(req, res) => {
    res.json(products);
})


app.listen(PORT,() =>console.log(`Listenin' on ${PORT}`))
