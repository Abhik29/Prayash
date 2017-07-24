(function(){
    'use strict';

    let express = require('express');
    let path = require('path');
    let app = express();


    //set port 
    app.set('PORT',process.env.PORT || 3000);
    app.use(express.static(path.resolve(__dirname,'../dist')));
    app.get('/*',function(req,res) {
        res.sendFile('index.html',{root:path.resolve(__dirname,'../dist')});
    })
    app.listen(app.set('PORT'),function(){
        console.log(`server listening at port ${app.set('PORT')}!`);
    })
})();