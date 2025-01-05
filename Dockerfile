# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de configuración del proyecto
COPY package*.json ./
COPY astro.config.mjs ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación Astro
RUN npm run build

# Instala un servidor web ligero (sirve para servir archivos estáticos)
RUN npm install -g serve

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["serve", "dist", "-p", "3000"]
