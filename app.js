const koa = require('koa');
var http = require('http');
const app = new koa();
var userCount = 0;
/*var server = http.createServer(function (req, res) {
    userCount++;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello!\n');
    res.write('We have had ' + userCount + ' visits!\n');
    res.end();
 
});*/
//http.createServer(app.callback()).listen(3000);
//app.use(ctx => {ctx.body="hi";});
app.use(async ctx => {
	userCount++;
  ctx.body = 'We have had ' + userCount + ' visits!\n';
});
app.listen(5000);
//server.listen(4000)