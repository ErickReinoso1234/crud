import { Router } from "express";
import { authRequired } from "../middlewares/validate.js";
import { registerShema, loginShema } from "../schemas/auth.schemas.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import {
  login,
  register,
  logout,
  profile,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", validatorSchema(registerShema), register);

router.post("/login", validatorSchema(loginShema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

export default router;
