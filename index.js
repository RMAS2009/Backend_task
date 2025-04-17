const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
const PORT = process.env.PORT || 5000;







const paymentRoutes = require('./routes/paymentRoutes');
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);
app.use('/payments',paymentRoutes);


app.get('/',(req,res)=>{
    res.send("Welcome to Authorization System");
})

app.listen(PORT, ()=>{
    console.log('listening on port 5000');
})