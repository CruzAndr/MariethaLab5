# marketplace-app

App de **bicicletas** hecha con **Expo Router + TypeScript**, 100% front-end (sin backend, sin Firebase). Refactorización basada en la arquitectura de `mi-proyecto`.

## Navegación

Menú inferior con **5 tabs** (`src/app/(tabs)/`):

| Tab | Archivo | Estado |
|-----|---------|--------|
| Inicio | `index.tsx` | ✅ Perfil del usuario + sus bicicletas |
| Citas | `citas.tsx` | ✅ Lista de citas de taller (cancelables) |
| Lecturas | `lecturas.tsx` | ⛔ Pantalla 404 |
| Productos | `productos.tsx` | ✅ Catálogo con filtro por categoría |
| Perfil | `perfil.tsx` | ⛔ Pantalla 404 |

Los tabs sin contenido renderizan `src/components/Pantalla404.tsx`.
También existe `src/app/+not-found.tsx` para cualquier ruta inexistente.

## Datos y estilo

- Datos locales en `src/data/datos.ts` (en memoria, sin red).
- Paleta turquesa centralizada en `src/theme.ts`.

## Ejecutar

```bash
npm install
npm run start    # luego: w (web), a (Android), i (iOS)
```
