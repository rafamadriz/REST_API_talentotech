# Api Rest in Node.js

## Usage

### Registration

```http
POST https://rest-api-talentotech.vercel.app/auth/register

{
    "email": "your@email.com",
    "password": "mypasswd"
}
```

### Login

```http
POST https://rest-api-talentotech.vercel.app/auth/login

{
    "email": "your@email.com",
    "password": "mypasswd"
}
```

You will get a response with a token which you will need as authorization for other requests.

E.g `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InF4eE1oMTFVdXJUZGdlbzlOd0hxIiwiZW1haWwiOiJtZUB4LmNvbSIsImlhdCI6MTc2NDE2NDUwNSwiZXhwIjoxNzY0MTY4MTA1fQ.24r9qBs4HF1ukNsHPF-dNPiDyRiAl4btMC8Pt1OD1Ww`

### Create a product

```http
POST https://rest-api-talentotech.vercel.app/api/products/create
Authorization: Basic <YOUR_TOKEN>

{
    "name": "Pantalon",
    "price": 8000,
    "categories": [ "Ropa", "Mujer" ]
}
```

Response:

```json
{
    "id": "lWaqp4iUuYPi6SCspuvG",
    "price": 8000,
    "name": "Pantalon",
    "categories": [
        "Ropa",
        "Mujer"
    ]
}
```

### Get Product by ID

```http
GET https://rest-api-talentotech.vercel.app/api/products/lWaqp4iUuYPi6SCspuvG
Authorization: Basic <YOUR_TOKEN>
```

### Delete product by ID

```http
DELETE https://rest-api-talentotech.vercel.app/api/products/lWaqp4iUuYPi6SCspuvG
Authorization: Basic <YOUR_TOKEN>
```

### Get all products 

```http
GET https://rest-api-talentotech.vercel.app/api/products
Authorization: Basic <YOUR_TOKEN>
```
