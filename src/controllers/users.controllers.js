import {User} from '../models/User.js'

export const getUsers = (req, res) => {
    res.send('getting users')
}

export const createUser = async(req, res) => {
       
    const {name, lastName, numberDocument, birthDate,phoneNumber, status, registrationDate, direction} = req.body

    const newUser = await User.create({
        name, 
        lastName, 
        numberDocument, 
        birthDate,
        phoneNumber, 
        status, 
        registrationDate, 
        direction
    })

    console.log(newUser)

    res.send('creating user')
}