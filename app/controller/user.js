const { Controller } = require('egg');

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    // 接口返回的结果
    // this.app.foo();
    // this.ctx.getIP();
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    };
  }
  async create() {
    const { ctx } = this;
    // console.log('%c Line:18 🫥 ctx.request.body', 'font-size:18px;color:#ffffff;background:#669966', ctx);
    ctx.body = {
      name: `创建成功 ${ctx.request.body.name}`,
    };
  }
}
module.exports = UserController;
