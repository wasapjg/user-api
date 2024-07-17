# API de Usuarios

Este proyecto es una API de usuarios construida con Node.js, Express, MySQL y TypeScript. Permite registrar y autenticar usuarios utilizando JSON Web Tokens (JWT) para la validación.

## Características

- Registro de nuevos usuarios
- Autenticación de usuarios mediante JWT
- Almacenamiento de datos en una base de datos MySQL

## Requisitos previos

- Node.js (v14 o superior)
- MySQL (v5.7 o superior)

## Instalación

1. Clona el repositorio: `git clone https://github.com/wasapjg/user-api.git`
2. Navega al directorio del proyecto: `cd user-api`
3. Instala las dependencias: `npm install`

## Uso

1. Crea una base de datos llamada userdb en MySQL.
2. Crea la tabla users con la siguiente estructura:
    ```
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    ```
3. Crea un archivo .env en la raíz del proyecto y añade lo siguiente: 
   ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=tu_contraseña
    DB_NAME=userdb
    JWT_SECRET=tu_clave_secreta
    ```
4. Ejecuta la aplicación: `npm run dev`
5. Accede a la aplicación en tu navegador: `http://localhost:5000`

## Ejemplos

**Ejemplo de Registro**
```
curl -X POST http://localhost:5000/api/users/register \
-H "Content-Type: application/json" \
-d '{"username": "testuser", "password": "testpassword"}'
```

**Ejemplo de Inicio de Sesión**
```
curl -X POST http://localhost:5000/api/users/login \
-H "Content-Type: application/json" \
-d '{"username": "testuser", "password": "testpassword"}'
```

## Contribución

Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m "Agrega nueva funcionalidad"`
4. Sube tus cambios: `git push origin nueva-funcionalidad`
5. Abre un pull request en GitHub.

## Licencia

Este proyecto está bajo la Licencia [Nombre de la Licencia]. Ver el archivo `LICENSE` para más detalles.