//Tiene la configuración de express

import express from "express"
import usersRoutes from "./routes/users.routes.js" 
import rolesRoutes from "./routes/roles.routes.js"

const app = express();

//middlewares
app.use(express.json());


app.use(usersRoutes)
app.use(rolesRoutes)

export default app; //Aplicación de servidor