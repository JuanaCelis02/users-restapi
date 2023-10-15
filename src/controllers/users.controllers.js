import { User } from "../models/User.js";
import { validationResult } from "express-validator";

export const getUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Página actual, predeterminada a 1 si no se proporciona.
    const pageSize = parseInt(req.query.pageSize) || 10; // Tamaño de página, predeterminado a 10 si no se proporciona.

    const offset = (page - 1) * pageSize;

    const {count, rows} = await User.findAndCountAll({
      limit: pageSize,
      offset: offset,
    });
    res.json({
      users: rows,
      total: count
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
      },
    });

    if(!user)
      return res.status(404).json({message: "User does not exist"})
    res.json(user)
    
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}


export const createUser = async (req, res) => {
  try {
    // Validación con express-validator
    const errors = validationResult(req);

    // Si hay errores de validación, responde con un código de estado 400 y los errores
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Si la validación pasa, crea el nuevo usuario
    const {
      name,
      lastName,
      email,
      password,
      numberDocument,
      bithDate,
      phoneNumber,
      status,
      registrationDate,
      direction,
    } = req.body;

    const newUser = await User.create({
      name,
      lastName,
      email,
      password,
      numberDocument,
      bithDate,
      phoneNumber,
      status,
      registrationDate,
      direction,
    });

    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastName, email, password, phoneNumber, status, direction } = req.body;

    // Busca el usuario por su ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Actualiza los campos del usuario
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.phoneNumber = phoneNumber;
    user.status = status;
    user.direction = direction;

    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    await User.destroy({
      where: { id },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Busca el usuario por su ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    // Actualiza el estado del usuario
    user.status = status;
    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};