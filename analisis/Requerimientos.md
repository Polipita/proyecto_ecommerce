# Requerimientos del Sistema - Proyecto Ferretería

## Requerimientos Funcionales

### Usuarios
- **RF01**: El sistema debe permitir registrar nuevos usuarios (clientes o empleados).
- **RF02**: El sistema debe permitir iniciar sesión con correo y contraseña.
- **RF03**: El sistema debe validar los roles de usuario (cliente, empleado, superusuario).

### Productos
- **RF04**: El sistema debe permitir registrar productos con nombre, precio, stock, etc.
- **RF05**: El sistema debe listar productos para los clientes.
- **RF06**: El sistema debe mostrar alerta si hay stock menor a 5 unidades.

### Carrito de Compras
- **RF07**: Los clientes deben poder agregar productos a su carrito.
- **RF08**: Los clientes deben poder ver y modificar su carrito.

### Ventas y Gestión de Personal
- **RF09**: El sistema debe registrar qué empleado hizo cada venta.
- **RF10**: El superusuario debe poder ver el historial de ventas por empleado.
- **RF11**: El superusuario debe poder registrar y eliminar empleados.

---

## Requerimientos No Funcionales

- **RNF01**: Las contraseñas de los usuarios deben almacenarse cifradas.
- **RNF02**: Las rutas privadas (como registrar productos o ver ventas) deben estar protegidas según el rol del usuario.
- **RNF03**: El sistema debe responder a las peticiones en menos de 2 segundos bajo carga normal.
- **RNF04**: El sistema debe permitir múltiples conexiones simultáneas.
- **RNF06**: El sistema debe actualizar el stock en tiempo real cuando se realiza una venta.
- **RNF07**: La API debe ser RESTful para facilitar el consumo desde un frontend.
- **RNF08**: El sistema debe ser accesible desde dispositivos móviles y computadoras.
