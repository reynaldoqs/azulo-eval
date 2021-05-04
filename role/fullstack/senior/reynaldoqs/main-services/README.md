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

Para hacer un despliegue simple de una instancia de 'MySQL' ejecutar el siguiente commando:

`docker run --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=[password] -d mysql`

Para verificar el funcionando ejecutar:

`docker ps`

Debe mostrar una lista de contenedores corriendo y entre ellas debe estar uno con el nombre **mysql-test**. [Mas informacion](https://hub.docker.com/_/mysql)