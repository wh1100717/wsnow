import * as express from "express"
import {
  AuthRoutes
} from "./auth/auth.route"
import {
  UserRoutes
} from "./user/user.route"

export class APIRoutes {
  static init(app: express.Application, router: express.Router) {
    // 权限验证路由
    AuthRoutes.init(app, router)
    // 用户管理路由
    UserRoutes.init(app, router)
  }
}
