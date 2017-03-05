import * as mongoose from "mongoose"

import {BaseDao} from '../../utils/base.dao'

export const userSchema = new mongoose.Schema({
    // 邮箱
    email: {type: String, required: true, trim: true},
    // 电话
    phone: {type: String, required: true, trim: true},
    // 密码
    password: {type: String, required: true, trim: true},
    // 用户类型
    type: {type: String, default: "normal"},
    // 用户名
    name: {type: String, required: true},
    // 创建时间
    create_at: {type: Date, dafault: Date.now},
    // 创建人
    create_by: {type: mongoose.Schema.Types.ObjectId},
    // 更新时间
    update_at: {type: Date, default: Date.now},
    // 更新人
    update_by: {type: mongoose.Schema.Types.ObjectId}
}, {collection: "users"})

const userModel = mongoose.model('user', userSchema)

export const userDao = new BaseDao(userModel)
