Proyecto Final: Plataforma de Venta de Productos
Descripción General
El objetivo de este proyecto es desarrollar una plataforma de venta de productos que combine funcionalidades de backend utilizando .NET y frontend con Angular. Este proyecto tiene como meta aplicar y consolidar los conocimientos adquiridos durante el curso.



Descripción del Proyecto
Este proyecto consiste en crear una plataforma de venta en línea que permita a los administradores gestionar productos y categorías, y a los usuarios finales ver y comprar productos. El backend está desarrollado en .NET y el frontend en Angular, con un enfoque en prácticas colaborativas y de calidad.

Requisitos del Proyecto
Back Office de Administración
Gestión de Roles de Usuario:

Administrador (admin): Permite crear, editar y eliminar productos y categorías.

Usuario (user): Permite visualizar y editar productos y categorías, pero no puede crear ni eliminar.

Manejo de Productos y Categorías:

Funcionalidad para crear, editar y eliminar productos y categorías (limitado a administradores).

Los usuarios pueden ver y editar productos y categorías, pero sin permisos de eliminación o creación.

Registro de Ventas:

Implementación de API endpoints para registrar y visualizar ventas en el backend. : en proceso

Frontend Público
Visualización y Navegación de Productos:  en proceso

Los usuarios pueden navegar por productos sin necesidad de registro.

Los productos están organizados en categorías.

Cada producto muestra su nombre, breve descripción, precio, imagen y puntuación de usuarios.

Carrito de Compra:

Los usuarios pueden agregar productos al carrito especificando la cantidad.

Funcionalidades para modificar las cantidades y eliminar productos del carrito.

El carrito se vacía automáticamente tras finalizar la compra.

Confirmación de Venta: en proceso

Al finalizar la compra, se registra la venta en el backend con la siguiente información: ID de la venta, ID de cada producto, cantidad y valor unitario.

Se muestra un mensaje de confirmación al usuario con el ID de la venta.

Diseño Adaptable:

La plataforma debe ser responsiva, priorizando la experiencia en dispositivos móviles (Mobile First).

Características Adicionales
Gestión de Imágenes:

Permitir agregar múltiples imágenes a cada producto.

Actualización de Inventario:

Implementar un sistema de inventario que descuente el stock tras cada venta.

Ordenamiento de Productos:

Opciones para que los usuarios ordenen productos por precio o puntuación.

Integración de Librerías Externas:

Utilizar librerías de terceros para funcionalidades adicionales como carruseles de imágenes.

Pasarela de Pago:

Integrar Mercadopago para simular transacciones de pago.

Instalación y Configuración
Clonar el repositorio:

bash
git clone https://github.com/ArmandoGonzalez24/Proyecto-Angular.Net/.git
Instalar dependencias del backend:

bash
cd backend
dotnet restore
Configurar la base de datos:

Configurar la cadena de conexión en appsettings.json.

Ejecutar migraciones:

bash
dotnet ef database update
Iniciar el servidor backend:

bash
dotnet run
Instalar dependencias del frontend:

bash
cd frontend
npm install
Iniciar la aplicación Angular:

bash
ng serve
Uso
Accede a http://localhost:4200 para utilizar la aplicación frontend.

Interactúa con la API del backend en http://localhost:5287/swagger/index

Contribuciones
Las contribuciones al proyecto son bienvenidas. Sigue estos pasos para contribuir:

Hacer Fork del repositorio.

Crear una nueva rama:

bash
git checkout -b mi-nueva-funcionalidad
Realizar los cambios y hacer commits.

Enviar tus cambios:

bash
git push origin mi-nueva-funcionalidad
Crear un Pull Request para revisión.
