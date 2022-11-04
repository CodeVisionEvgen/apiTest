const app = require('express')();
const api = require('./module/api');

api.forEach(route=>{
        app[route.method](route.path,(req,res)=>{
            let userController = new route.controller(req,res);
            userController.send()
        })
})

app.listen(4000,()=>{
    console.log(`start`)
})