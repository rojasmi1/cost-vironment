const Koa = require('koa');
const serveStatic = require('koa-static');
const app = new Koa();

app.use(serveStatic(`${__dirname}/build`));

app.listen(3000);
console.log(`Serving ${__dirname}/build on port 3000`);