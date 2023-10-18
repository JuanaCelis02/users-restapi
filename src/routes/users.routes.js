import { Router } from "express";
import {createUser, getUsers, updateUser, deleteUser, getUserById, updateUserStatus} from "../controllers/users.controllers.js"
import { body, validationResult } from "express-validator";
import { authUser } from '../middlewares/login.middleware.js';

const router = Router()

// Define el esquema de validación usando express-validator
export const createUserValidation = [
  body("name").notEmpty().withMessage("El campo 'name' es obligatorio.").isString(),
  body("lastName").notEmpty().withMessage("El campo 'lastName' es obligatorio.").isString(),
  body("email").notEmpty().notEmpty().isString(),
  body("password").notEmpty().notEmpty().isString(),
  body("numberDocument").notEmpty().withMessage("El campo 'numberDocument' es obligatorio.").isString(),
  body("birthDate").optional().notEmpty().isDate().isString(),
  body("phoneNumber").optional().notEmpty().isString(),
  body("status").optional().notEmpty().isBoolean(),
  body("registrationDate").optional().notEmpty().isDate(),
  body("direction").optional().notEmpty().isString(),

   // Personaliza el mensaje de error para los campos opcionales
   (req, res, next) => {
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un código de estado 400 y los errores
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        return res.status(400).json({ errors: errorMessages });
    }

    next();
  },
];


router.get('/users', authUser, getUsers)
router.post('/users', createUser)
router.put('/users/:id', authUser, updateUser)
router.delete('/users/:id', authUser, deleteUser)
router.get('/users/:id', authUser, getUserById)
router.patch('/users/:id', authUser, updateUserStatus)


export default router