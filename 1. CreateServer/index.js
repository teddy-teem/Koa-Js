console.clear();

const koa = require('koa');
const port = 3000;
const app = new koa();

app.use(async ctx => (ctx.body={Text:"Welcome to koa"}));
app.listen(port, ()=>{
    console.log("Server running...");
})
