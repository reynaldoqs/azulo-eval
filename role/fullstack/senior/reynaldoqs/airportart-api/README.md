# airportart-api

## Requerimientos

- nodejs version **TLS** o minimamente superior a  **v10**.
- npm instalado(usualmente se instala con las instalacion de nodejs).

## Despliege API

Instalar las dependencias:

`
npm install
`
(Opcional, 3000 por defecto) Setear las variables de entorno necesarias:

```
    export API_PORT=<puerto para el api>
```

Iniciar el servicio:

`
npm run serve
`

El comando desplegara el servicio en el puerto configurado, por defecto en `http://localhost:3000`.

## Notas

El archivo `tsconfig.json` contiene todo lo necesario para la transpilacion de TypeScript a JavaScript [mas informacion](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

Scripts configurados en `package.json`:

`npm run serve` Transpila y levanta el servicio.

`npm run build` Transpila el al directorio `/dist`

`npm run dev:serve` Ejecuta el servicio en modo desarrollo con `nodemon`(es necesario tener nodemon instalado).