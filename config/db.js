
const mongoose = require('mongoose')

const config = require('config')

const db = config.get('mongoURI')


const connectDB = ()=>{
    mongoose.connect(db,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false
    }).then( ()=> console.log('mongoDB Connected'))
    .catch((e)=> {
        console.log(e)
        process.exit(1);
    })
}

module.exports = connectDB