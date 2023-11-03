//Tiene la configuración de express

import express from "express"
import loginRoutes from "./routes/login.routes.js"
import usersRoutes from "./routes/users.routes.js"
import cors from "cors"


const app = express();

//middlewares
app.use(express.json());

const corsOptions = {
  origin: '*', // Acepta trafico de todas las rutas
  methods: 'GET,POST, PUT, DELETE', // Métodos permitidos (ajusta según tus necesidades)
};

app.use(cors(corsOptions));

app.use(loginRoutes)
app.use(usersRoutes)

export default app; //Aplicación de servidor