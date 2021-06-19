const koa = require('koa');
const router = require('koa-router');
const fs  = require('fs');
const { create } = require('domain');

const apps = new koa();
const myRouter = new router();

myRouter.get('/', welcome);
async function welcome(ctx){
    ctx.type = 'html';
    ctx.body= fs.createReadStream('./html/index.html');
}

myRouter.get('/error', error);
async function error(ctx){
    ctx.body = "Sorry this site occures error number " + ctx.status;
}
async function handleError(ctx){
    if(404 == ctx.status){
        ctx.redirect('/error');
    }
}

apps.use(myRouter.routes());
apps.use(handleError);
apps.listen(3000, ()=>{
    console.log('Running on 3000 port...');
});