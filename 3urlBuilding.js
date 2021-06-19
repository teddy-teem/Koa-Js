const koa = require('koa');
const routers = require('koa-router');

let apps = new koa();
let myRoute = new routers();

myRoute.get('/:id', home);
myRoute.get('/help/:helpName', help);
async function home(ctx){
    ctx.body = "I am from home my id is " + ctx.params.id;
}
async function help(ctx){
    ctx.body = "I am from help, my help name is "+ ctx.params.helpName;
}

myRoute.get("/about/name/:id([0-9]{5})", async (ctx)=>{
    ctx.body="I am about id ";
});
apps.use(myRoute.routes());

apps.listen(3000, ()=>{
    console.log("Running on port "+ 3000 +"...");
})
