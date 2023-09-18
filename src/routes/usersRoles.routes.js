import { Router } from "express";
import {getUsersRole, getRolesAndUsers, createUserRole, updateUserRoles, deleteUserRole} from "../controllers/userRole.controller.js"
import "../models/UserRole.js"

const router = Router()

router.get("/usersRoles", getUsersRole)
router.get("/rolesUsers", getRolesAndUsers)
router.post("/userRoles", createUserRole)
router.put("/userRoles", updateUserRoles)
router.delete("/userRoles", deleteUserRole)


export default router