import { Router } from "express";
import { httpGetUsers } from "./users.controller.js";

export const usersRouter = Router();

usersRouter.get('/', httpGetUsers);