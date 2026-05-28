# GreenWatch

GreenWatch es una plataforma web desarrollada para el monitoreo y gestión de reportes ambientales.  
El sistema permite registrar, visualizar y administrar incidencias ambientales mediante una arquitectura moderna full stack.

---

# Características principales

- Registro de reportes ambientales
- Visualización de reportes
- API REST
- Arquitectura cliente-servidor
- Frontend moderno con React
- Backend con Express
- Base de datos relacional MySQL
- ORM Prisma
- Migración completa a TypeScript

---

# Tecnologías utilizadas

## Frontend
- React
- Vite
- TypeScript
- React Router DOM
- Axios

## Backend
- Node.js
- Express.js
- TypeScript
- Prisma ORM

## Base de datos
- MySQL

---

# Estructura del proyecto

```bash
GreenWatch/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── prisma/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── types/
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── CHANGELOG.md
└── README.md
```

---

# Instalación

## 1. Clonar repositorio

```bash
git clone https://github.com/TUUSUARIO/GreenWatch.git
```

---

# Instalación Frontend

```bash
cd frontend
npm install
```

---

# Instalación Backend

```bash
cd backend
npm install
```

---

# Configuración de base de datos

Instalar:
- XAMPP
o
- MySQL Server

Crear base de datos:

```sql
CREATE DATABASE greenwatch;
```

---

# Variables de entorno

Crear archivo:

```bash
backend/.env
```

Contenido:

```env
DATABASE_URL="mysql://root:@localhost:3306/greenwatch"

PORT=3000
```

---

# Ejecutar backend

```bash
cd backend
npm run dev
```

Servidor:

```bash
http://localhost:3000
```

---

# Ejecutar frontend

```bash
cd frontend
npm run dev
```

Aplicación:

```bash
http://localhost:5173
```

---

# Migraciones Prisma

Ejecutar:

```bash
npx prisma migrate dev --name init
```

---

# Endpoints principales

## Obtener reportes

```http
GET /api/reportes
```

---

## Crear reporte

```http
POST /api/reportes
```

Ejemplo:

```json
{
  "titulo": "Basura en parque",
  "descripcion": "Acumulación de residuos"
}
```

---

# Arquitectura del sistema

GreenWatch utiliza una arquitectura cliente-servidor.

## Frontend
Encargado de:
- interfaz de usuario
- formularios
- navegación
- consumo de API

## Backend
Encargado de:
- lógica de negocio
- validaciones
- acceso a base de datos
- API REST

## Base de datos
Encargada de:
- almacenamiento persistente
- manejo de reportes
- integridad de datos

---

# Buenas prácticas implementadas

- Uso de TypeScript
- Tipado fuerte
- Separación de responsabilidades
- Uso de ORM Prisma
- Variables de entorno
- Arquitectura modular
- API RESTful

---

# Futuras mejoras

- Autenticación JWT
- Dashboard administrativo
- Mapa interactivo
- Subida de imágenes
- Roles de usuario
- Notificaciones
- Reportes geolocalizados

---

# Autor
Elmer Geovanny Aranda Fimbres
Jorge Emiliano Nava Ramirez
Pedro Emanuel Solis Camara Y Dominguez
Proyecto desarrollado como proyecto universitario.

---

# Licencia

Uso académico y educativo.
