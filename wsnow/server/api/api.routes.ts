import * as express from "express"
import {
  UserRoutes
} from "./user/user.route"

export class APIRoutes {
  static init(app: express.Application, router: express.Router) {
    // 用户管理路由
    UserRoutes.init(app, router)
  }
}
