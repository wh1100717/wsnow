import * as express from "express"
import * as fs from "fs"
import * as path from "path"

import {
  APIRoutes
} from "../api/api.routes"

const router = express.Router

class StaticDispatcher {
  static sendIndex(req: express.Request, res: express.Response): void {
    const _root = process.cwd()
    const _env = process.env.NODE_ENV
    const _folder = _env === "production" ? "dist" : "dev"

    res.type(".html")

    fs.createReadStream(path.join(`${_root}/wsnow/client/${_folder}/index.html`)).pipe(res)
  }
}

export class Routes {
  static init(app: express.Application, router: express.Router) {
    APIRoutes.init(router)

    router
      .route("*")
      .get(StaticDispatcher.sendIndex)

    app.use("/", router)
  }
}
