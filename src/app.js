//Tiene la configuración de express

import express from "express"
import usersRoutes from "./routes/users.routes.js" 

const app = express();

//middlewares
app.use(express.json());


app.use(usersRoutes)

export default app; //Aplicación de servidor