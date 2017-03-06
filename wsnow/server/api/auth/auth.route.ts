import * as express from "express"
import * as passport from "passport"
import {
  AuthController
} from "./auth.controller"

export class AuthRoutes {
  static init(app: express.Application, router: express.Router) {
    app.post("/api/login", passport.authenticate('local'), (req, res) => {
      return res.send({
        status: "success"
      })
    })

    app.route("/api/logout")
      .get((req, res) => {
        req.logout()
        res.redirect("/login")
      })
      .post((req, res) => {
        req.logout()
        res.redirect("login")
      })
    
    app.route("*").all(async (req, res, next) => {
      if (req.user) {
        next()
      } else {
        // 如果没有登录则跳转到登录页面
        res.redirect("/login")
      }
    })
  }
}
