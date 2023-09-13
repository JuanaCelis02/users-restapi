import { Role } from "../models/Role.js";

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.json(roles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

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
    res.send("creating Role");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRole = async(req, res) => {
    try {
        const {id} = req.params;
        await Role.destroy({
            where: {id},
        });
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
