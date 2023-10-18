import { Router } from "express";
import { login } from "../controllers/login.controllers.js"
import { authUser } from '../middlewares/login.middleware.js';

const router = Router()

router.post('/login', login);

export default router