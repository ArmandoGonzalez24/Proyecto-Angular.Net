
![Polo IT Corrientes](https://www.poloitcorrientes.com.ar/assets/images/polo-it.png)
## Talentos Digitales


## Trabajo Final Integrador: Desarrollo de un Sitio de Venta de Productos

### Objetivo General
Desarrollar un sitio de venta de productos que integre funcionalidades de backend utilizando .NET y frontend utilizando Angular, aplicando los conceptos aprendidos durante el curso.

---

## Trabajo en Grupos
- Los trabajos podrán ser realizados en grupos de **3 o 4 personas**.
- Cada miembro del grupo debe participar activamente, contribuyendo al proyecto a través de **commits** en el/los repositorio/s.

---

## Requerimientos Obligatorios

### 1. Back Office de Administración (Dashboard para Administradores)
- **Roles de Usuarios:**
  - **Rol `admin`:** puede **crear**, **editar** y **eliminar** productos y categorías.
  - **Rol `user`:** puede **visualizar** y **editar** productos y categorías, pero **no** puede crear ni eliminar productos o categorías.
- **Gestión de Productos y Categorías:**
  - Desde el back office se debe permitir:
    - Crear, editar y eliminar productos (solo para rol `admin`).
    - Crear, editar y eliminar categorías (solo para rol `admin`).
    - Visualizar y editar productos y categorías (para ambos roles).
- **Gestión de Ventas:**
  - Crear API endpoints que permitan registrar y visualizar las ventas en el backend.

---

### 2. Frontend Público (Acceso para Usuarios Finales)
- **Visualización y Selección de Productos:**
  - Los usuarios finales podrán navegar por los productos disponibles sin necesidad de registrarse.
  - Los productos deben estar organizados por categorías.
  - Cada producto debe mostrar:
    - Nombre
    - Descripción breve
    - Precio
    - Imagen principal
    - Puntuación de los usuarios
- **Carrito de Compra:**
  - El usuario podrá:
    - Agregar productos al carrito especificando la cantidad deseada.
    - Modificar la cantidad de productos en el carrito.
    - Eliminar productos del carrito.
  - Al finalizar la compra, el carrito debe vaciarse automáticamente, permitiendo al usuario iniciar una nueva compra desde cero.
- **Registro de Ventas:**
  - Al finalizar la compra, se registrará la venta en el backend con la siguiente información:
    - ID de la venta.
    - ID, cantidad y valor unitario de cada producto.
  - El usuario recibirá un mensaje de confirmación:  
    `"Hemos registrado tu venta con el ID xxxx y te contactaremos a la brevedad. Podrás utilizar este código para realizar el seguimiento de tu compra."`  
    *(donde xxxx es el ID de la venta registrada en el backend).*
- **Diseño Responsivo:**
  - El diseño debe seguir el enfoque **Mobile First** para garantizar una buena experiencia de usuario (UIX).

---

## Puntos Opcionales (No Obligatorios para Aprobar)

### Back Office:
1. **Gestión de Imágenes:**
   - Permitir agregar varias imágenes a cada producto.
2. **Actualización de Inventario:**
   - Implementar un sistema para actualizar el inventario, descontando del stock inicial la cantidad vendida en cada transacción.

### Frontend Público:
1. **Ordenamiento de Productos:**
   - Permitir que los usuarios ordenen los productos por:
     - Precio
     - Puntuación (rating).
2. **Uso de Librerías de Terceros:**
   - Integrar librerías externas para funcionalidades adicionales (ejemplo: carruseles de imágenes, diseño de tablas, etc.).
3. **Integración de Pasarela de Pago:**
   - Implementar Mercadopago como pasarela de pago para simular transacciones.

---

## Entregables
1.	**Enlaces a los repositorios de GitHub** donde se encuentre el código fuente del proyecto completo y se refleje el historial de commits de cada integrante del equipo.
2.	Una breve presentación que explique el diseño de la arquitectura y las decisiones tomadas durante el desarrollo del proyecto. Utilizaremos esta presentación para la defensa del trabajo.
---

## Evaluación
Se valorará especialmente la correcta implementación de las funcionalidades requeridas, la calidad del código, el diseño responsivo, la UIX, y la estructura modular y escalable del proyecto. Los puntos opcionales sumarán valor a la calificación final.

---

¡Éxitos! 😊
