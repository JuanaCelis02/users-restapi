import { Role } from "../models/Role.js";

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findOne({
      where: {
        id,
      },
    });

    if(!role)
      return res.status(404).json({message: "Role does not exist"})
    res.json(role)
    
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}

export const createRoles = async (req, res) => {
  try {
    const { roleName, descriptionRole, statusRole, creationDate } = req.body;

    const newRole = await Role.create({
      roleName,
      descriptionRole,
      statusRole,
      creationDate,
    });
    res.json(newRole);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { roleName, descriptionRole, statusRole } = req.body;

    // Busca el rol por su ID
    const role = await Role.findByPk(id);

    if (!role) {
      return res.status(404).json({ message: "Rol no encontrado." });
    }

    // Actualiza los campos del rol
    role.roleName = roleName;
    role.descriptionRole = descriptionRole;
    role.statusRole = statusRole;

    await role.save();

    res.json(role);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

  export const deleteRole = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Role.findByPk(id);
  
      if (!role) {
        return res.status(404).json({ message: "Rol no encontrado." });
      }
  
      await Role.destroy({
        where: { id },
      });
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
