const app = require('./app');

const connectdb = require('./database')

connectdb();






app.listen(3001,()=>{
  console.log(`Server is wwwwwwwww working on 3001`);
})