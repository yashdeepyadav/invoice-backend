const mongoose= require('mongoose');

const connectdb = ()=>{
  mongoose.connect("mongodb://localhost:27017/aaaaaaaaaaaa",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
  console.log("Connected with DATABASE")
}).catch((err)=>{
  console.log("DATABASE ERROR")
  console.log(err);
})
}

module.exports = connectdb;