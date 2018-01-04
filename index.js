const path       = require('path')
const Koa        = require('koa')
const bodyParser = require('koa-bodyparser')
const session    = require('koa-session-minimal')
const MysqlStroe = require('koa-mysql-session')
const md5        = require('md5')
const nunjucks   = require('koa-nunjucks-2')
const koaStatic  = require('koa-static')

const app        = new Koa()

const config     = require('./config')
const routes     = require('./routes')



// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST
}

// 配置session中间件
app.use(session({
  key:'USER_ID',
  store: new MysqlStroe(sessionMysqlConfig)
}))

// 设置静态资源
app.use(koaStatic(path.join(__dirname, './public')))

// 设置模板
app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, './views'),
  nunjucksConfig: {
    trimBlocks: true  // 开始转义，放xss
  }
}))

// 解析中间件
app.use(bodyParser())

// 路由
routes(app)

app.listen(config.port)
console.log("[demo] session is starting at port " + config.port)
