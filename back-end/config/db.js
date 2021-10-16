const mongoose = require('mongoose')

const connect = async ()=>{
    try {
       await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true                 
        });
        console.log('DB Connected !!!');
    } catch (error) {
         console.log('Err Connect: ' +error.message);
         process.exit(1);        
    }
    finally{
        mongoose.connection.close();
    }
}
  module.exports= {connect} // bên app gọi = databse.connect(); /
//  module.exports= {connect} // bên app gọi = databse.connect(); / cho cach 2
// //module.exports= connect     // bee
 