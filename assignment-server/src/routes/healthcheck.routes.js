import { Router } from "express";
import { healthcheck } from "../controller/index.js";

const router = Router();

router.route("/").get(
     healthcheck
)

export default router