import * as express from "express"
import {
  UserController
} from "./user.controller"

export class UserRoutes {
  static init(app: express.Application, router: express.Router) {
    router.route("/api/users")
      // 获取用户列表
      .get(UserController.list)
      // 创建用户
      .post(UserController.create)
    router.route("/api/users/:id")
      // 获取用户信息
      .get(UserController.get)
      // 更新用户信息
      .post(UserController.save)
      // 删除用户
      .delete(UserController.delete)
  }
}
