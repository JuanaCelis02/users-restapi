//Tiene la configuración de express

import express from "express"
import loginRoutes from "./routes/login.routes.js"
import usersRoutes from "./routes/users.routes.js"
import rolesRoutes from "./routes/roles.routes.js"
import userRoleRoutes from "./routes/usersRoles.routes.js"
import cors from "cors"

const app = express();

//middlewares
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:8080', // URL de tu frontend
  methods: 'GET,POST, PUT, DELETE', // Métodos permitidos (ajusta según tus necesidades)
};

app.use(cors(corsOptions));

app.use(loginRoutes)
app.use(usersRoutes)
app.use(rolesRoutes)
app.use(userRoleRoutes)

export default app; //Aplicación de servidor