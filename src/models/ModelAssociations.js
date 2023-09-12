import { User } from './User.js';
import { Role } from './Role.js';


//Establecer relaciones
User.belongsToMany(Role, { through: "UserRole"});
Role.belongsToMany(User, { through: "UserRole"});

export { User, Role }

