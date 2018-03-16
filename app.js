const koa = require('koa');
const logger = require('koa-logger');
const app = new koa();
let userCount = 0;
app.use(logger()); // loger middle ware : note that middlewares are sequential and they can modify the result which would be input of the next middleware 
app.use(async ctx => {
	if (ctx.url == '/reset'){
		userCount = 0;
		ctx.body = `Parr had ${userCount} visits!\n`;
	}else if (ctx.url == '/view'){
		ctx.body = `Parr had ${userCount} visits!\n`;
	}else if (ctx.url == '/increment'){
		userCount ++;
		ctx.body = `Parr had ${userCount} visits!\n`;
	}

	console.log(` mwthod: ${ctx.method} `);
	console.log(` url: ${ctx.url} `);
  	 // `` for string operations
});

app.listen(5000);


//async folan => {
///bahman;
//}