# Informacion del sistema
```
Operating System: Deepin 20.2
Kernel: Linux 5.10.18-amd64-desktop
Architecture: x86-64 
```
# Despliege base datos MySQL

### Requerimientos

Tener  **Docker** instalado. [guia de instalacion](https://docs.docker.com/engine/install/)

### Despliegue MySQL con docker

**nota:** `<[data]>` el keyword `data` puede ser remplazado con los datos propios de una entorno de trabajo.

Para hacer un despliegue simple de una instancia de 'MySQL' ejecutar el siguiente commando:

`docker run --name mysql-azulo -p 3306:3306 -e MYSQL_ROOT_PASSWORD=<yourPasswordHere> -e MYSQL_DATABASE=<azulo> -d mysql`


Para verificar el funcionando ejecutar:

`docker ps`

Debe mostrar una lista de contenedores corriendo y entre ellas debe estar uno con el nombre **mysql-test**. [Mas informacion](https://hub.docker.com/_/mysql)

### Configuracion Flyway

Instalar **flyway** [guia instalacion](https://flywaydb.org/documentation/getstarted/firststeps/commandline), video de migraciones y configuracion con **flyway** [video](https://www.youtube.com/watch?v=JRhuoC_kI8Y).

Configurado **flyway** ejecutar los siguientes pasos para terminar la migracion de la base de datos:

- Configurar el archivo `[ruta de flyway]/conf/flyway.conf` con la siguiente informacion(remplazar campos):

```
flyway.url=<jdbc:mysql://127.0.0.1:3306/azulo>
flyway.user=<root>
flyway.password=<yourPasswordHere>
```

- Copiar el archivo `V1_0_1__Create_tables_records.sql` a `[ruta de flyway]/sql/`.

- Ejecutar el siguiente comando para realizar la migracion:

`flyway migration`


