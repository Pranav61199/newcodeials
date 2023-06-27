const express=require('express');
const app=express();
const port=1000;

app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){

    if(err){
        console.log(`error in running the server:${err}`);
    }

    console.log(`Server is running fine on port: ${port}`);
});