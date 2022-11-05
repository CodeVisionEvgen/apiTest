let bparser =  require('body-parser');
module.exports = (app) => {
    let routes = [{
    method: 'get',
    path: '/',
    middleware: [(req,res,next)=>{
        console.log(1)
        next();
    },
    (req,res,next)=>{
        console.log(2)
        next();
    }],
    work: (req,res) => {
        res.send('hi')
    }
    },
    {
        method: 'get',
        path: '/a',
        work: (req,res) => {
            res.send('oigf')
        }
    },
    {
        method: 'post',
        path: '/hello',
        work: (req,res) => {
            res.send(req.body);
        },
        middleware: [
            bparser.urlencoded({
                extended: true
            })
        ]
    }
];
    routes.forEach(rout => {
        !rout.middleware && (rout.middleware = []);
        app[rout.method](rout.path,rout.middleware,rout.work);
    });
}