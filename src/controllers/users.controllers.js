import { User } from "../models/User.js";

export const getUsers = async(req, res) => {
    try {
        //throw new Error('query failed')
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

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
      res.json(newUser)
      res.send("creating user");
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};

export const updateUser = async(req, res) => {};

export const deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        await User.destroy({
            where : { id }, 
        });
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
