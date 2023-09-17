import {User} from '../models/User.js'
import {Role} from '../models/Role.js'
import { UserRole } from '../models/UserRole.js';

export const createUserRole = async (req, res) => {
    try {
        // Recupera los datos del cuerpo de la solicitud
        const { userId, roleId } = req.body;

        // Verifica si el usuario y el rol existen
        const user = await User.findByPk(userId);
        const role = await Role.findByPk(roleId);

        if (!user || !role) {
            return res.status(404).json({ message: "Usuario o rol no encontrado." });
        }

        // Crea la relación en la tabla intermedia UserRole
        await user.addRole(role);

        res.status(201).json({ message: "Relación usuario-rol creada con éxito." });
    } catch (error) {
        console.error(error);
        console.error(error.name);
        return res.status(500).json({ message: error.message });
    }
};

export const getUsersRole = async (req, res) => {
    try {
        const usersWithRoles = await User.findAll({
            include: {
                model: Role,
            },
        });
        res.json(usersWithRoles);
    } catch (error) {
        console.error(error);
        console.error(error.name);
        return res.status(500).json({ message: error.message });
    }
};

export const getRolesAndUsers = async (req, res) => {
    try {
        const rolesWithUsers = await Role.findAll({
            include: {
                model: User,
            },
        });
        res.json(rolesWithUsers);
    } catch (error) {
        console.error(error);
        console.error(error.name);
        return res.status(500).json({ message: error.message });
    }
};
