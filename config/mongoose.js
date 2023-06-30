const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/codeials_development');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"errpr in connection"));

db.once('open',function(){

    console.log('connected to db');
});

module.exports=db;