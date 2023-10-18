import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from "../models/User.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Busca al usuario por su dirección de correo electrónico en la base de datos
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales invalidas' });
    }

    // Compara la contraseña proporcionada con la contraseña encriptada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales invalidas' });
    }

    // Si las credenciales son válidas, genera un token JWT
    const token = jwt.sign({ userId: user.id }, 'w6TN36weC2', {
      expiresIn: '1h', // Establece la expiración del token según tus necesidades
    });

    res.json({ token, userId: user.id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};