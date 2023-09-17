//Tiene la configuración de express

import express from "express"
import usersRoutes from "./routes/users.routes.js" 
import rolesRoutes from "./routes/roles.routes.js"
import userRoleRoutes from "./routes/usersRoles.routes.js"

const app = express();

//middlewares
app.use(express.json());


app.use(usersRoutes)
app.use(rolesRoutes)
app.use(userRoleRoutes)

export default app; //Aplicación de servidor