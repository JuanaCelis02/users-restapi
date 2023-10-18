import jwt from 'jsonwebtoken';

export const authUser = async (req, res, next) => {
   // Obtener el token del encabezado de la solicitud
   const token = req.header('Authorization');

   // Verificar si se proporcionó un token
   if (!token) {
     return res.status(401).json({ message: 'Acceso no autorizado. Falta el token de autenticación.' });
   }
 
   try {
     // Verificar y descifrar el token
     const decoded = jwt.verify(token, 'w6TN36weC2'); // Reemplaza con tu clave secreta
 
     // Agregar el ID del usuario autenticado al objeto de solicitud
     req.user = decoded;
 
     // Continuar con la ejecución de la solicitud
     next();
   } catch (error) {
     return res.status(401).json({ message: 'Token no válido' });
   }
};