
init();
class myTryDebug extends Error {
    constructor(args,status,ip){
        super(args)
        this.name = "myTryDebug"
        this.status = status
        this.ip = ip
    }
}


const newDb = new myTryDebug("new error")

newDb.status = 400

console.error(newDb.message)
function doAthing() {
    byDoingSomethingElse();
}

function byDoingSomethingElse() {
    throw new Error('Uh oh!');
}

function init() {

        doAthing();
 
}

