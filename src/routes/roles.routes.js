import { Router } from "express"
import {createRoles, getRoles, deleteRole, updateRole, getRoleById} from "../controllers/roles.controllers.js"
import { authUser } from '../middlewares/login.middleware.js';

const router = Router()
router.get('/roles', authUser, getRoles)
router.post('/roles', authUser, createRoles)
router.put('/roles/:id', authUser, updateRole)
router.delete('/roles/:id', authUser, deleteRole)
router.get('/roles/:id', authUser, getRoleById)


export default router