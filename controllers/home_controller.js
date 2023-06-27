module.exports.home=function(req,res){


    return res.render('home',{
        title:"The home file"
    });

    //return res.end('<h1>Router & controller is working fine</h1>');
}