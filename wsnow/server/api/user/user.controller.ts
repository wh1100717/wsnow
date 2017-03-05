import * as express from "express"
import * as mongoose from "mongoose"
import {
  userDao
} from "./user.dao"
import {
  std_output
} from "../../utils"


class UserController {
  async list(req: express.Request) {
    try {
      const user_list = await userDao.getAll()
      return std_output("success", "", user_list)
    } catch (error) {
      return std_output("fail", "获取用户列表失败")
    }
  }
  async create(req: express.Request) {
    try {
      const {
        name,
        email,
        phone,
        type
      } = req.body
      const currentUser = req.user
      // 创建用户
      const user = await userDao.getByQuery({
        email: email
      }, {})
      if (user.length > 0) {
        return std_output("fail", "该邮箱已注册")
      }
      await userDao.create({
        name,
        email,
        phone,
        type,
        password: "8888",
        create_by: currentUser._id,
        update_by: currentUser._id
      })
      return std_output("success")
    } catch (error) {
      return std_output("fail", "创建用户失败")
    }
  }
  async get(req: express.Request) {
    try {
      const {
        id
      } = req.params
      const currentUser = req.user
      const user = await userDao.getById(id)
      if (user.length == 0) {
        return std_output("fail", "未查询到该用户")
      }
      return std_output("success", "", user)
    } catch (error) {
      return std_output("fail", "获取用户信息失败")
    }
  }
  async save(req: express.Request) {
    try {
      const {
        id
      } = req.params
      const {
        name,
        email,
        phone,
        type
      } = req.body
      const currentUser = req.user
      // 更新用户
      const user = await userDao.getById(id)
      if (user.lenght == 0) {
        return std_output("fail", "未查询到该用户")
      }
      await userDao.update({
        _id: id
      }, {
        name,
        email,
        phone,
        type,
        update_by: currentUser._id,
        update_time: Date.now()
      }, {
        multi: true
      })
      return std_output("success")
    } catch (error) {
      return std_output("fail", "创建/更新用户失败")
    }
  }
  async delete(req: express.Request) {
    try {
      const {
        id
      } = req.params
      const currentUser = req.user
      const user = await userDao.getById(id)
      if (user.length == 0) {
        return std_output("fail", "未找到该用户，是否已经被删除？")
      }
      await userDao.delete({
        _id: id
      })
      return std_output("success")
    } catch (error) {
      return std_output("fail", "删除用户失败")
    }
  }
}

export const userController = new UserController()
