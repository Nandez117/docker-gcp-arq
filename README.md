# Pokeneas - Pokedex en Express

Aplicación web en Node.js/Express que expone una "Pokedex" de **Pokeneas** (criaturas nacidas en Antioquia). Pensada para desplegarse en contenedores Docker sobre un cluster de Docker Swarm en GCP.

## Características

- Catálogo de 8 Pokeneas en un arreglo en memoria (sin base de datos).
- Cada Pokenea tiene: `id`, `nombre`, `altura`, `habilidad`, `imagen` y `fraseFilosofica`.
- Las imágenes se sirven desde un bucket de Google Cloud Storage.
- Muestra el `id` del contenedor (`os.hostname()`) para verificar el balanceo entre réplicas de Swarm.

## Estructura del proyecto

```
.
├── index.js                      # Punto de entrada (servidor Express)
├── Dockerfile                    # Imagen de la aplicación
├── package.json
└── src
    ├── controllers
    │   └── pokeneaController.js   # Lógica de las rutas
    ├── data
    │   └── pokeneas.js            # Arreglo de Pokeneas
    ├── routes
    │   └── pokeneaRoutes.js       # Definición de rutas
    └── views
        └── renderPokenea.js       # Render del HTML de la vista
```

## Rutas

| Método | Ruta            | Descripción                                                                 |
|--------|-----------------|-----------------------------------------------------------------------------|
| GET    | `/`             | Vista HTML con imagen y frase filosófica de un Pokenea aleatorio + container |
| GET    | `/view`         | Alias de la vista HTML                                                        |
| GET    | `/api`          | JSON con `id`, `nombre`, `altura`, `habilidad` y `containerId`               |
| GET    | `/api/pokenea`  | Alias del JSON                                                               |
| GET    | `/pokenea`      | Alias del JSON                                                               |

## Variables de entorno

| Variable     | Por defecto                                          | Descripción                        |
|--------------|------------------------------------------------------|------------------------------------|
| `PORT`       | `80`                                                 | Puerto del servidor                |
| `BUCKET_URL` | `https://storage.googleapis.com/pokeneas-arq`        | Base URL del bucket GCP de imágenes|

## Ejecutar en local

```bash
npm install
npm start
# http://localhost:80
```

## Docker

```bash
docker build -t pokeneas .
docker run -p 80:80 pokeneas
```

## Despliegue en Docker Swarm (GCP)

En la instancia líder:

```bash
docker swarm init
docker service create --name pokeneas --replicas 10 -p 80:80 <usuario-dockerhub>/pokeneas:latest
```

Las demás instancias se unen al cluster con el token entregado por `docker swarm join-token manager`.
