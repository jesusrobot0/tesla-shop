# Descripción

## Instalación

Para correr en desarrollo

1. Clonar el repositorio
2. Crear una copia del `.env.template` y renombrarlo a `.env` y cambiar las variables de entorno
3. Instalar las dependencias del proyecto `pnpm install`
4. Levantar la base de datos `docker compose up -d`
5. Ejecutar las migraciones de Prisma `pnpm dlx prisma migrate dev`
6. Ejecutar seed `npm run seed`
7. Puedes observar la data de la base de datos directamente desde prisma ejecutando `pnpm dlx prisma studio`
8. Ejecutar el proyecto en desarrollo `pnpm dev`

Para correr en producción

1. Clonar el repositorio
2. Instalar las dependencias del proyecto `pnpm install`
3. Ejecutar el proyecto en desarrollo `pnpm start`
