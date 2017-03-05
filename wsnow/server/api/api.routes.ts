import * as express from "express"
import {
  UserRoutes
} from "./user/user.route"

export class APIRoutes {
  static init(router: express.Router) {
    // 用户管理路由
    UserRoutes.init(router)
  }
}
