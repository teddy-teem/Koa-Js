
const koa = require('koa');
const koaRouter = require('koa-router');

const apps = new koa();

apps.use(async function (ctx, next){
    try{
        await next();
    }
    catch(er){
        ctx.body = er.message + er.status;
        ctx.status = er.status || 500;
        ctx.app.emit('error', er, ctx);
    }
});

apps.use(function (ctx){
    ctx.throw('Error Occured', 500);
})


apps.listen(2000,()=>{
    console.log("Running...");
});