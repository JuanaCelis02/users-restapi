import { User } from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    //throw new Error('query failed')
    const users = await User.findAll();
    res.json(users);
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
    const {
      name,
      lastName,
      numberDocument,
      birthDate,
      phoneNumber,
      status,
      registrationDate,
      direction,
    } = req.body;

    const newUser = await User.create({
      name,
      lastName,
      numberDocument,
      birthDate,
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
    const { name, lastName, phoneNumber, status, direction } = req.body;

    const user = await User.findByPk(id);
    user.name = name,
    user.lastName = lastName,
    user.phoneNumber = phoneNumber, 
    user.status = status,
    user.direction = direction
    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
