
const express = require('express')

const app = express();

const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=> res.json({msg:'welocome to momentbyte'}) )

// define routes

app.use('/api/users',require('./routes/users'))
app.use('/api/contact',require('./routes/contact'))

app.use('/api/auth',require('./routes/auth'))



app.listen(PORT,()=>{
    
        console.log(`server started on port ${PORT}`)
       
})
