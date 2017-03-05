import * as express from "express"
import {
  userController
} from "./user.controller"

export class UserRoutes {
  static init(router: express.Router) {
    router.route("/api/users")
      // 获取用户列表
      .get(userController.list)
      // 创建用户
      .post(userController.create)
    router.route("/api/users/:id")
      // 获取用户信息
      .get(userController.get)
      // 更新用户信息
      .post(userController.save)
      // 删除用户
      .delete(userController.delete)
  }
}
