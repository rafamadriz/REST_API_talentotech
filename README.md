# Api Rest en Node.js

## Description

API REST for product management made with NODE.js and Express.

## Instalación

1. Clone repo
2. Install dependencies

```bash
npm install
```

3. Setup env variables with corresponding values in `.env`

4. Run in dev mode

```bash
npm run dev
```

## API Docs

### Get all products

- **GET** `/products`
- **Descripción:** Returns a list of all products
- Example response:

```json
[
  { "id": "l8F0WCBBUc1Q7jxYmdu9", "categories": [ "Ropa", "Hombre" ], "name": "Camiseta"", price": 5200, },
  { "id": "lWaqp4iUuYPi6SCspuvG", "categories": [ "Ropa", "Mujer" ], "name": "Pantalon", "price": 8000 }
]
```

<!-- ### Buscar productos por nombre -->
<!---->
<!-- - **GET** `/products/search?name=palabra` -->
<!-- - **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada. -->
<!-- - **Parámetros:** -->
<!--   - `name` (query, requerido): texto a buscar en el nombre del producto. -->
<!-- - **Ejemplo de uso:** `/products/search?name=camiseta` -->
<!-- - **Respuesta ejemplo:** -->
<!---->
<!-- ```json -->
<!-- [{ "id": 1, "name": "Camiseta Deportiva", "price": 150 }] -->
<!-- ``` -->

### Get product by ID

- **GET** `/products/:id`
- **Descripción:** Returns specific product by ID
- **Parámetros:**
  - `id` (path, required): product ID.
- **Ejemplo de uso:** `/products/l8F0WCBBUc1Q7jxYmdu9`
- **Respuesta ejemplo:**

```json
{ "id": "l8F0WCBBUc1Q7jxYmdu9", "categories": [ "Ropa", "Hombre" ], "name": "Camiseta"", price": 5200, },
```

### Create a product

- **POST** `/products`
- **Descripción:** Create a new product.
- **Body (JSON):**

```json
{ "name": "Nuevo Producto", "price": 999 }
```

- **Respuesta ejemplo:**

```json
{ "id": 6, "name": "Nuevo Producto", "price": 999 }
```

<!-- ### Actualizar un producto (PUT) -->
<!---->
<!-- - **PUT** `/products/:id` -->
<!-- - **Descripción:** Actualiza completamente un producto existente. -->
<!-- - **Parámetros:** -->
<!--   - `id` (path, requerido): ID del producto a actualizar. -->
<!-- - **Body (JSON):** -->
<!---->
<!-- ```json -->
<!-- { "name": "Producto Actualizado", "price": 500 } -->
<!-- ``` -->
<!---->
<!-- - **Respuesta ejemplo:** -->
<!---->
<!-- ```json -->
<!-- { "id": 1, "name": "Producto Actualizado", "price": 500 } -->
<!-- ``` -->

<!-- ### Actualizar parcialmente un producto (PATCH) -->
<!---->
<!-- - **PATCH** `/products/:id` -->
<!-- - **Descripción:** Actualiza parcialmente un producto existente. -->
<!-- - **Parámetros:** -->
<!--   - `id` (path, requerido): ID del producto a actualizar. -->
<!-- - **Body (JSON):** Solo los campos que se desean actualizar -->
<!---->
<!-- ```json -->
<!-- { "price": 600 } -->
<!-- ``` -->
<!---->
<!-- - **Respuesta ejemplo:** -->
<!---->
<!-- ```json -->
<!-- { "id": 1, "name": "Camiseta Deportiva", "price": 600 } -->
<!-- ``` -->
<!---->
### Delete product by ID

- **DELETE** `/products/:id`
- **Descripción:** Delete product by ID.
- **Parámetros:**
  - `id` (path, requerido): product ID to delete.

<!-- ## Códigos de estado -->
<!---->
<!-- - `200` - OK: Operación exitosa -->
<!-- - `201` - Created: Recurso creado exitosamente -->
<!-- - `204` - No Content: Recurso eliminado exitosamente -->
<!-- - `400` - Bad Request: Datos de entrada inválidos -->
<!-- - `404` - Not Found: Recurso no encontrado -->

<!-- ## Estructura del proyecto -->
<!---->
<!-- ``` -->
<!-- src/ -->
<!-- ├── Controllers/ -->
<!-- │   └── products.controller.js -->
<!-- ├── Models/ -->
<!-- │   └── Product.js -->
<!-- └── Routes/ -->
<!-- └── products.router.js -->
<!-- ``` -->
<!---->
<!-- ## Tecnologías utilizadas -->
<!---->
<!-- - Node.js -->
<!-- - Express.js -->
<!-- - ES6 Modules -->
