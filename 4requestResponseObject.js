
const koa = require('koa');

var app = new koa();

var obj = {
    id: 1,
    name: "jahid",
    mob: "+880 17171717"
}
app.use(async (ctx)=>{
    ctx.body = JSON.stringify (obj);
    console.log(ctx.response);
});

app.listen(4000, ()=>{
    console.log("running 4000 port...")
})