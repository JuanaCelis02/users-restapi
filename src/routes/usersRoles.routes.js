import { Router } from "express";
import {getUsersRole, getRolesAndUsers, createUserRole} from "../controllers/userRole.controller.js"
import "../models/UserRole.js"

const router = Router()

router.get("/usersRoles", getUsersRole)
router.get("/rolesUsers", getRolesAndUsers)
router.post("/userAddRole", createUserRole)


export default router