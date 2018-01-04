const router = require("koa-router")()
const lib = require('../lib/mysql.js')

module.exports = (app) => {
  router
    .get("/", async (ctx, next) => {
      ctx.response.body = "home/index"
    })
    .get('/reg', async (ctx, next) => {
      await ctx.render('reg')
    })
    .post('/reg', async (ctx, next) => {
      let params = ctx.request.body
      let name = params.name
      let pass = params.pass
      console.log(params)
      // console.log(`name: ${name}`)
      // console.log(`pass: ${pass}`)
      lib.reg([name, pass])
      ctx.response.body = 'ok'
    })


  app
    .use(router.routes())
    .use(router.allowedMethods())
}