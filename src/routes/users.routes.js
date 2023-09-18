import { Router } from "express";
import {createUser, getUsers, updateUser, deleteUser, getUserById, updateUserStatus} from "../controllers/users.controllers.js"
const router = Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.get('/users/:id', getUserById)
router.patch('/users/:id', updateUserStatus)


export default router