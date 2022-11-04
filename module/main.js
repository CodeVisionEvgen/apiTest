module.exports = class Main {
    constructor(req,res) {
        this.req = req;
        this.res = res;
    }
    send() {
        this.res.send('test')
    }
}