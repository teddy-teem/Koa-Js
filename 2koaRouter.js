const koa = require('koa');
const routers = require('koa-router');

let apps = new koa();
let myRoute = new routers();

myRoute.get('/', home);
myRoute.get('/help', help);
async function home(ctx){
    ctx.body = "I am from home";
}
async function help(ctx){
    ctx.body = "I am from help";
}

apps.use(myRoute.routes());

apps.listen(3000, ()=>{
    console.log("Running on port "+ 3000 +"...");
    console.log(myRoute);
})
