const koa = require('koa');
const app = new koa();
let userCount = 0;
app.use(async ctx => {
	userCount++;
  ctx.body = 'We have had ' + userCount + ' visits!\n';
});
app.listen(5000);
