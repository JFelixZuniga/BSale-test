# EJERCICIO - Back End

Ejercicio Construir una tienda online que despliegue productos agrupados por la categoría a la que pertenecen, generando por separado backend (API REST) y frontend (aplicación que la consuma).

Además, hay que agregar un buscador, el cual tiene que estar implementado a nivel de servidor, mediante una Api Rest cuyo lenguaje y framework puede ser de libre elección. Es decir, los datos de productos deben llegar filtrados al cliente.

## Instalación

Instale las dependencias e inicie el servidor.

```sh
git clone https://github.com/JFelixZuniga/BSale-test-Backend.git
cd BSale-test-Backend
npm i
node index
```

## Dependencias

| Paquetes utilizados | Enlace a NPM                                        |
| ------------------- | --------------------------------------------------- |
| Express             | [Ir a NPM](https://www.npmjs.com/package/express)   |
| Cors                | [Ir a NPM](https://www.npmjs.com/package/cors)      |
| dotenv              | [Ir a NPM](https://www.npmjs.com/package/dotenv)    |
| Sequelize           | [Ir a NPM](https://www.npmjs.com/package/sequelize) |
| Mysql2              | [Ir a NPM](https://www.npmjs.com/package/mysql2)    |

## Rutas (endpoint)

Esta es una API de solo consumo: solo el método HTTP GET está disponible en los recursos.

- [/Api/Products/](https://bsale-store-test.herokuapp.com/Api/Products) Retorna la cantidad total de productos y todos los productos.

```json
{
  "cantidad": 57,
  "productos": [
    {
      "id": 5,
      "name": "ENERGETICA MR BIG",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
      "price": 1490,
      "discount": 20,
      "name_category": {
        "name": "bebida energetica"
      }
    }...
```

- [/Api/Categories/](https://bsale-store-test.herokuapp.com/Api/Categories/) Retorna la cantidad total de categorías y todas las categoría

```json
{
  "cantidad": 7,
  "productos": [
    {
      "id": 1,
      "name": "bebida energetica"
    },
    {
      "id": 2,
      "name": "pisco"
    }...
```

- [/Api/Products/:products](https://bsale-store-test.herokuapp.com/Api/Products/papas) Retorna la cantidad total de productos y los productos que

```json
{
  "cantidad": 3,
  "productos": [
    {
      "id": 54,
      "name": "Papas Fritas Lisas Bolsa Grande",
      "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg",
      "price": 1490,
      "discount": 0,
      "name_category": {
        "name": "snack"
      }
    },
```

## Otras consideraciones

- Se utiliza el ORM Sequelize para interactuar con la base de datos (bbdd) dada. Una de las ventajas para utilizarlo, es que nos permite utilizar funciones de JavaScript para interactuar con la bbdd.
