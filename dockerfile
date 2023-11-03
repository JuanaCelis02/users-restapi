# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expón el puerto en el que se ejecutará tu aplicación
EXPOSE 4000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
