import { Router } from "express"
import {createRoles, getRoles, deleteRole, updateRole, getRoleById} from "../controllers/roles.controllers.js"

const router = Router()
router.get('/roles', getRoles)
router.post('/roles', createRoles)
router.put('/roles/:id', updateRole)
router.delete('/roles/:id',deleteRole)
router.get('/roles/:id', getRoleById)


export default router