# Sistema de Gestión de Buses - Reto Técnico FullStack

Solución al Reto Técnico Practicante Desarrollador FullStack SEP 2025 de CIVA.

**Stack:** Spring Boot 3 + PostgreSQL + React 19 + TypeScript

---

## Requisitos Previos

- Java 17+
- Maven 3+
- PostgreSQL 15+
- Node.js 18+

---

## Configuración e Instalación

### 1. Base de Datos

Crear la base de datos en PostgreSQL:

```sql
CREATE DATABASE civa_db;
```

Las tablas y datos de ejemplo se crean automáticamente al iniciar el backend.

---

### 2. Backend

#### Configuración

El backend ya tiene valores por defecto configurados en `application.properties`. **No es necesario modificar nada** si usas:

- PostgreSQL en `localhost:5432`
- Usuario: `postgres`
- Contraseña: `123`

**Variables de entorno disponibles** (si necesitas cambiar los valores):

```properties
# Base de datos
DB_URL=jdbc:postgresql://localhost:5432/civa_db
DB_USER=postgres
DB_PASSWORD=123

# JWT
JWT_SECRET=7c7c79c919a447e7b6a1f4f394b24626fa72d1e5fcb64e94a883dd13f9
JWT_EXPIRATION=60000

# CORS
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000

# Usuario por defecto
APP_DEFAULT_USER=admin
APP_DEFAULT_PASS=admin123456
```

#### Ejecutar

Desde la carpeta `backend/`:

**Desde tu IDE**
- Abre el proyecto en IntelliJ IDEA, Eclipse o VS Code
- Ejecuta la clase principal que contiene `@SpringBootApplication`


El backend estará disponible en `http://localhost:8080`

---

### 3. Frontend

#### Configuración

El proyecto ya incluye el archivo `.env` con los valores por defecto. Si necesitas modificarlos, edita `frontend/.env`:

```env
VITE_API_URL=http://localhost:8080
VITE_AUTH_ENDPOINT=/auth/login
VITE_BUS_ENDPOINT=/bus
VITE_TOKEN_KEY=token
```
> **Nota:** Para el proyecto de práctica técnico, el `.env` está incluido en el repositorio. En producción, este archivo NO debe subirse a Git.

#### Ejecutar

```bash
cd civa-bus-frontend
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

---

## Credenciales de Acceso

```
Usuario: admin
Contraseña: admin123456
```

---

## API Endpoints

### Autenticación

**POST** `/auth/login`
```json
{
  "username": "admin",
  "password": "admin123456"
}
```

### Buses (requieren token JWT)

**GET** `/bus?page=0&size=10` - Lista de buses con paginación

**GET** `/bus/{id}` - Detalle de un bus

---

## Estructura del Proyecto

```
civa-fullstack/
├── backend/          # Spring Boot + PostgreSQL
│   ├── src/
│   │   ├── controller/      # REST endpoints
│   │   ├── service/         # Lógica de negocio
│   │   ├── repository/      # JPA repositories
│   │   ├── entity/          # Entidades (Bus, Marca)
│   │   ├── dto/             # Data Transfer Objects
│   │   ├── mapper/          # Conversión Entity ↔ DTO
│   │   ├── security/        # JWT + Spring Security
│   │   └── exception/       # Manejo de errores
│   └── resources/
│       ├── schema.sql       # Estructura de tablas
│       └── data.sql         # Datos de ejemplo
│
└── frontend/         # React + TypeScript
    ├── src/
    │   ├── components/      # Componentes UI
    │   ├── hooks/           # Custom hooks
    │   ├── services/        # API calls
    │   └── types/           # TypeScript interfaces
    └── .env                 # Variables de entorno
```

---

## Funcionalidades Implementadas

### Backend
- API REST con Spring Boot 3
- Base de datos PostgreSQL con relación Bus-Marca
- Paginación en endpoint `/bus`
- Seguridad JWT en todos los endpoints
- Manejo de excepciones (404, 500)
- Datos de ejemplo precargados (5 marcas, 20 buses)

### Frontend
- React 19 con TypeScript
- Autenticación con JWT
- Tabla de buses con paginación
- Modal de detalle por bus
- Selector de tamaño de página (5, 10, 20, 50)
- Manejo de estados con `useState` y `useEffect`
- Fetching con `fetch` API
- Diseño responsive con TailwindCSS

---

## Solución de Problemas Comunes

### Backend no inicia
- Verificar que PostgreSQL esté corriendo
- Confirmar que existe la base de datos `civa_db`
- Revisar credenciales en `application.properties`

### Frontend no conecta
- Verificar que el backend esté corriendo en puerto 8080
- Revisar archivo `.env` en la carpeta frontend

### Token expirado
El token JWT expira en 60 segundos. Simplemente vuelve a iniciar sesión.

---

## Tecnologías

**Backend:** Java 21, Spring Boot 3, Spring Security, JWT, PostgreSQL, JPA/Hibernate

**Frontend:** React 19, TypeScript, Vite, TailwindCSS, Fetch API
