const express = require('express');

const app = express();

const invoice = require('./routes/invoiceroutes')

app.use(express.json())

app.use("",invoice)

const connectdb = require('./database')

connectdb();


app.listen(3001,()=>{
  console.log(`Server is wwwwwwwww working on 3001`);
})

module.exports = app
