import * as express from "express"
import {
  userDao
} from "../user/user.dao"


export class AuthController {
  static async get_user(query: any) {
    const user = await userDao.getOneByQuery(query, {})
    return user
  }
}
