import { Router } from "express";
import { authRequired } from "../middlewares/validate.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import { createTaskchema } from "../schemas/task.chema.js";

const router = Router();

router.get("/task", authRequired, getTasks);

router.get("/task/:id", authRequired, getTask);

router.post(
  "/task",
  authRequired,
  validatorSchema(createTaskchema),
  createTask
);

router.put("/task/:id", authRequired, updateTask);

router.delete("/task/:id", authRequired, deleteTask);
export default router;
