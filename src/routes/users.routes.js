import { Router } from "express";
import {createUser, getUsers} from "../controllers/users.controllers.js"
const router = Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.put('/users/:id')
router.delete('/users/:id')
router.get('/users/:id')


export default router