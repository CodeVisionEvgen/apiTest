const app = require('express')();
const api = require('./module/api');

async function initApp() {
    api(app);
    app.listen(4000,()=>{
        console.log(`start`)
    })
};

initApp()