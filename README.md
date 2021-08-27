## Ejercicio

Ejercicio Construir una tienda online que despliegue productos agrupados por la categoría a la que pertenecen, generando por separado backend (API REST) y frontend (aplicación que la consuma).

Además, hay que agregar un buscador, el cual tiene que estar implementado a nivel de servidor, mediante una Api Rest cuyo lenguaje y framework puede ser de libre elección. Es decir, los datos de productos deben llegar filtrados al cliente.

### BACK

| Paquetes utilizados | Enlace a NPM                                        |
| ------------------- | --------------------------------------------------- |
| Express             | [Ir a NPM](https://www.npmjs.com/package/express)   |
| Cors                | [Ir a NPM](https://www.npmjs.com/package/cors)      |
| dotenv              | [Ir a NPM](https://www.npmjs.com/package/dotenv)    |
| Sequelize           | [Ir a NPM](https://www.npmjs.com/package/sequelize) |
| Mysql2              | [Ir a NPM](https://www.npmjs.com/package/mysql2)    |

El servidor disponibiliza las siguientes rutas:

- `/Api/Products/` Retorna la cantidad total de productos y todos los productos.
- `/Api/Categories/` Retorna la cantidad total de categorías y todas las categoría
- `/Api/Products/:products` Retorna la cantidad total de productos y los productos que

* Se utiliza el ORM Sequelize para interactuar con la base de datos (bbdd) dada. Una de las ventajas para utilizarlo, es que nos permite utilizar funciones de JavaScript para interactuar con la bbdd.

### FRONT

| Recursos front utilizados | Enlace                                                                              |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Bootstrap 4.6             | [Ir a web oficial](https://getbootstrap.com/docs/4.6/getting-started/introduction/) |
| JQuery                    | [Ir a web oficial](https://jquery.com/)                                             |
| Font Awesome              | [Ir a web oficial](https://fontawesome.com/)                                        |

1.- Al acceder al front, una vez construido el DOM se dispara el evento DOMContentLoaded para cargar las primeras funciones del main.js
2.- Utiliza API Fetch para el envío de la request del usuario.
3.- Para escuchar el evento de agregar productos al carrito después de crear el documento utilizamos el Event Delegation (delegación de eventos).

### Deploy: https://bsale-store-test.herokuapp.com/

<h1 align="center">
   <img src="./captura.png">
</h1>
