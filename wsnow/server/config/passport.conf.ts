import * as express from "express"
import * as passport from "passport"
import {
  Strategy
} from "passport-local"
import {
  AuthController
} from "../api/auth/auth.controller"

passport.use(new Strategy({
  usernameField: 'email',
  passwordField: 'password'
}, async(username, password, cb) => {
  try {
    if (username.indexOf('@') === -1) {
      username = username + '@hdinvesting.cn'
    }
    const user = await AuthController.get_user({
      email: username
    })
    if (!user || password !== user.password) {
      return cb(null, false)
    } else {
      return cb(null, user)
    }
  } catch (err) {
    return cb(err)
  }
}))

passport.serializeUser((user, cb) => {
  cb(null, user._id)
})

passport.deserializeUser(async(id, cb) => {
  try {
    let user = await AuthController.get_user({
      _id: id
    })
    user = user._doc
    delete user.password
    cb(null, user)
  } catch (err) {
    cb(err)
  }
})


export class PassportConfig {
  static init(application: express.Application): void {
    application.use(passport.initialize())
    application.use(passport.session())
  }
}
