const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    //console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
// router.get('/hello/:name',async (ctx,next) => {
//     var name = ctx.params.name;
//     console.log(name)
//     ctx.response.body =  `<h1>Hello, ${name}!</h1>`;
// })

// router.get('/',async (ctx,next) => {
//     ctx.response.body = '<h1>Index</h1>'
// })
// router.get('/', async (ctx, next) => {
//     ctx.response.body = `<h1>Index</h1>
//         <form action="/signin" method="post">
//             <p>Name: <input name="name" value=""></p>
//             <p>Password: <input name="password" type="password"></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>`;
// });

// router.post('/signin', async (ctx, next) => {
//     var
//         name = ctx.request.body.name || '',
//         password = ctx.request.body.password || '';
//     console.log(`signin with name: ${name}, password: ${password}`);
//     if (name === 'koa' && password === '12345') {
//         ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
//     } else {
//         ctx.response.body = `<h1>Login failed!</h1>
//         <p><a href="/">Try again</a></p>`;
//     }
// });

app.use(bodyParser());
app.use(controller());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');