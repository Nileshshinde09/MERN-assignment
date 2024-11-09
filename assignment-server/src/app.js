import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { limiter } from "./middleware/index.js"
import requestIp from "request-ip"


const app = express();
app.use(
    cors({
        origin:process.env.CORS_ORIGIN==="*"?"*":process.env.CORS_ORIGIN?.split(","),
        credentials:true,
    })
)
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
})

app.use(requestIp.mw());
app.use(limiter);
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());


//HealthCheck route
//-------------------------------------------------------------
import healthcheck from "./routes/healthcheck.routes.js"
app.use("/api/v1/healthcheck", healthcheck)
//-------------------------------------------------------------

export {app};