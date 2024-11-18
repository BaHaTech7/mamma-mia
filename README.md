# Proyecto Pizzería "Mamma Mía"

Este proyecto fue creado con CRA [Create React App](https://github.com/facebook/create-react-app).

## Autor(es)
- [@BaHaMuT7](https://github.com/BaHaMuT7)

## Tecnologías

[<img src="https://img.shields.io/badge/18.7.0-Node-black">]()

[<img src="https://img.shields.io/badge/0.27.2-Axios-black">]()

[<img src="https://img.shields.io/badge/8.15.0-npm-blueviolet">]()

[<img src="https://img.shields.io/badge/5.2.1-Bootstrap-blueviolet">]()

[<img src="https://img.shields.io/badge/2.5.0-React Boostrap-blueviolet">]()

[<img src="https://img.shields.io/badge/18.2.0-React-blue">]()

[<img src="https://img.shields.io/badge/6.3.0-React Router-red">]()

[<img src="https://img.shields.io/badge/1.55.0-SASS-pink">]()

[<img src="https://img.shields.io/badge/0.13.6-React Spinners-lightgreen">]()


## Objetivo

El objetivo del proyecto es utilizar **React Router y la Context API** con el fin de  crear una aplicación para una
pizzería, que pueda mantener el catálogo de pizzas y el detalle de cada item a comprar (carro, con opcion de cambiar
cantidad y eliminar item). Ésta debe ser capaz de actualizar el total cada vez que haya un cambio en el pedido.

- Se agrega sugerencia de la tutora (modal luego de intentar agregar producto repetido)
- Se agrega sugerencia del profesor (botón eliminar por cada item del carro)
- Como parte de mi contribución como alumno, agregué un gancho personalizado para agregar items al carro y un preloader
para las imágenes del catalogo y la imagen del detalle. (Lazy load)

## Descripción

El catálogo de la aplicación muestra todas las pizzas, con sus respectivos datos como el precio y el nombre, a su vez
se pueden realizar 2 operaciones en los productos:

**Ver más:** que permite ver el detalle de la pizza en cuestión

**Añadir:** que permite agregar una pizza al carro

Ya sea que la pizza se añada desde el catálogo o desde la vista de detalle ("ver más") se actualiza el total del carro,
el cual está en el navbar.

Al revisar el carro (clickeando en el carrito en la parte superior) se puede ver un resumen del pedido y únicamente acá 
se pueden cambiar las cantidades (aumentar, disminuir) de cada ítem (también actualizar el subtotal). En caso de que el
usuario intente cambiar la cantidad desde el catálogo o la vista de detalle, en vez de consolidar al aumento se le dará 
la opción de ver el resumen de su compra o cerrar y agregar otro producto.

Cabe destacar que al disminuir la cantidad a 0, o presionar eliminar (al lado del producto) en el carro, el item
desaparece y se actualiza el total nuevamente



## Instalación y despliegue

Para instalar:

```bash
  npm i
```

Para desplegar:

```bash
  npm start
```

## Versión de producción

**Servidor web:** NGINX

http://mammamia.bahatech.cl


## Diagrama de componentes

<img src="https://sat02pap001files.storage.live.com/y4mX0L7LFrPDoAbqVqZ_Uvo3Fk1DxJB1e9PeNe_v4dFN7_Gzen5qfWVQcxuhv2v-Dqplm9nYPejWNpVRIYNaWuYcyCTbhnOFOC38JTsZaAk2uEv8vkViAM7N3n_kf2o1i64ssfH-UQLZiu7xAW1KdrPO-prLzUxthq_TTaI8FAoxQ4kGk59cJ4AFxBhO0sjLe38?width=2052&height=1150&cropmode=none">


## Contacto

**Correo:** bahamut@bahatech.cl

**Nombre de alumno Slack:** BaHaMuT (Raúl Pardo)