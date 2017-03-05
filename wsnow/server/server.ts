if (process.env.NODE_ENV === "production")
    require("newrelic");

let PORT = process.env.PORT || 3333;

import * as express from "express"
import * as os from "os"
import * as http from "http"
import {ExpressConfig} from "./config/express.conf"
import {DBConfig} from "./config/db.conf"
import {Routes} from "./routes"

// 初始化数据库
DBConfig.init()

// Web Server 初始化
const app = express()
ExpressConfig.init(app)

// 初始化路由
const router = express.Router()
Routes.init(app, router)

// 启动Server
http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
