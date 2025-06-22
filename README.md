# Abrahan's Portfolio

## Descripción del Proyecto

Este es un portfolio personal diseñado para mostrar mis proyectos, habilidades y permitir a los visitantes contactarme. Está construido con una arquitectura de microservicios, separando claramente el frontend y el backend para una mayor escalabilidad y mantenibilidad.

## Estructura del Proyecto

El repositorio está dividido en dos directorios principales:

- `frontend/`: Contiene la aplicación web del lado del cliente, construida con Next.js.
- `backend/`: Contiene la API del lado del servidor, construida con NestJS.

## Tecnologías Utilizadas

### Frontend

- **Framework:** Next.js (versión 13.5.6)
- **Librerías/Dependencias:**
  - React (^18.2.0): Para la construcción de la interfaz de usuario.
  - Framer Motion (^11.2.0): Utilizado para animaciones fluidas e interactivas.
  - Axios (^1.10.0): Un cliente HTTP basado en promesas para realizar peticiones a la API.
  - Tailwind CSS (para estilos): Un framework CSS de primera utilidad para construir diseños personalizados rápidamente.

### Backend

- **Framework:** NestJS (^11.0.1)
- **Librerías/Dependencias:**
  - TypeORM (^0.3.24): Un ORM (Object-Relational Mapper) utilizado para interactuar con la base de datos PostgreSQL, facilitando la manipulación de datos.
  - PostgreSQL (a través de `pg`, ^8.16.0): La base de datos relacional y su controlador para Node.js.
  - RxJS (^7.8.1): Utilizado para programación reactiva, manejando flujos de datos asíncronos y eventos.
  - @nestjs/config (^4.0.2): Para la gestión de configuraciones de la aplicación, como variables de entorno.
  - @nestjs/mapped-types: Proporciona utilidades para la transformación de tipos y la creación de DTOs (Data Transfer Objects).
  - @nestjs/platform-express: Adaptador que permite a NestJS funcionar sobre la plataforma Express.js.

## Despliegue

- **Frontend:** Desplegado en [Render](https://portafolioabrahan-fronted.onrender.com)
- **Backend:** Desplegado en [Render](https://portafolioabrahan-backend.onrender.com)
