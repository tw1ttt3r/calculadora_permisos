# Calculadora de Permisos

Calculadora de permisos para **archivos y directorios** (estilo UNIX), con interfaz web. Incluye dos formas de uso:

- **Selección**: eliges permisos por *Usuario / Grupo / Otros* y el tipo.
- **Avanzado**: escribes un string de permisos (10 caracteres) y se valida/explica.

## Requisitos

- **Node.js** (recomendado: LTS)
- **Yarn** (el repo está configurado para usar `yarn`)

## Ejecutar en local

Instala dependencias:

```bash
yarn
```

### Modo desarrollo (recomendado)

Levanta el servidor estático y deja Tailwind en modo watch:

```bash
yarn dev:build
```

### Build (CSS minificado)

Genera `src/styles/styles.css` minificado:

```bash
yarn build
```

### Servir la app (sin watch)

Sirve el directorio del proyecto (útil si ya corriste `yarn build`):

```bash
yarn serve
```

## Scripts disponibles

- **`yarn dev`**: corre Tailwind en watch + servidor estático (`serve .`) en paralelo.
- **`yarn dev:build`**: hace build de Tailwind y luego arranca `yarn dev`.
- **`yarn tw:watch`**: Tailwind watch desde `src/styles/config/input.css` a `src/styles/styles.css`.
- **`yarn tw:build`**: Tailwind build minificado a `src/styles/styles.css`.
- **`yarn build`**: alias de `yarn tw:build`.

## Estructura del proyecto (alto nivel)

- **`index.html`**: página principal (carga `src/index.mjs`).
- **`src/index.mjs`**: entrypoint; inicializa UI y controles.
- **`src/config/`**: inicialización, utilidades y estado de UI.
- **`src/static/`**: datos estáticos (permisos/tipos) y regex de validación.
- **`src/styles/`**: CSS generado por Tailwind (`styles.css`) y configuración de entrada.

## Licencia

MIT (ver `package.json`).
