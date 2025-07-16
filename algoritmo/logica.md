# 🧠 Lógica del Sistema - Backend Ferretería

---

## 🔐 Registro de Usuarios

### 1. Cliente se registra
- El cliente accede al formulario de registro.
- Ingresa:
  - Nombre
  - Correo electrónico
  - Contraseña
- El sistema valida:
  - Que el correo no exista previamente.
  - Que la contraseña tenga al menos 6 caracteres.
- El sistema:
  - Crea el usuario con `rol = "cliente"`.

### 2. Empleado es creado por el superusuario
- El superusuario accede a un formulario de creación de empleado.
- Ingresa:
  - Nombre
  - Correo electrónico
  - Contraseña
- El sistema valida:
  - Que el correo no exista previamente.
  - Que solo el superusuario tenga acceso a esta acción.
- El sistema:
  - Crea el usuario con `rol = "empleado"`.

---

## 🔓 Inicio de Sesión

- El usuario (cliente o empleado) accede al formulario de login.
- Ingresa:
  - Correo electrónico
  - Contraseña
- El sistema:
  - Busca el correo en la base de datos.
  - Compara la contraseña.
  - Si es correcta, inicia sesión y devuelve los datos del usuario.

---

## 📦 Registro de Productos

### Proceso
1. El empleado inicia sesión y accede al formulario para registrar un producto.
2. El formulario permite ingresar:
   - Nombre del producto
   - Precio unitario
   - Stock inicial
   - Descripción
   - Categoría
   - Imagen
3. El sistema valida:
   - Que el nombre del producto no esté vacío.
   - Que el precio y el stock sean mayores o iguales a 0.
4. El producto se guarda en la base de datos con los datos proporcionados.
5. Si el stock es menor a 5 unidades, se marca como "bajo stock".
6. Se registra la fecha de creación y el ID del usuario que lo creó.

### Reglas
- Solo usuarios con rol `"empleado"` o `"superusuario"` pueden registrar productos.
- El nombre del producto debe ser único (según categoría, si aplica).

---

## 🛒 Lógica del Carrito de Compras

### Proceso
1. El cliente inicia sesión.
2. Puede navegar por los productos y hacer clic en "Agregar al carrito".
3. Cada producto agregado incluye:
   - ID del producto
   - Cantidad seleccionada
4. El sistema verifica:
   - Que haya stock suficiente.
   - Que el producto no esté duplicado (si ya está, se actualiza cantidad).
5. El cliente puede:
   - Ver el carrito actual.
   - Modificar cantidad.
   - Eliminar productos del carrito.
6. El sistema muestra:
   - Subtotal por producto (precio × cantidad).
   - Total acumulado.

### Reglas
- Si un producto no tiene stock, no puede agregarse al carrito.

---

## 🧾 Proceso de Compra (Orden)

### Proceso
1. El cliente revisa el carrito y hace clic en "Realizar compra".
2. El sistema verifica:
   - Que todos los productos aún tengan stock suficiente.
3. Se genera una orden con:
   - Lista de productos y cantidades
   - Monto total
   - ID del cliente
   - Fecha y hora
   - Estado inicial: `"pendiente"`
4. Se descuenta el stock.
5. El carrito del cliente se limpia.

### Reglas
- Si hay error con el stock, se cancela la compra.

---

## ⚠️ Alerta de Stock Bajo

### Proceso
1. Al registrar o actualizar un producto, se revisa el stock.
2. Si es menor a 5 unidades:
   - Se marca como `"stock bajo"`.
3. Al realizar una venta:
   - Se actualiza el stock.
   - Si queda < 5, se vuelve a aplicar la lógica.

### Reglas
- La alerta no impide vender, solo informa.
- El superusuario puede ver un listado de productos con stock bajo.

---

## 📊 Ventas por Empleado

### Proceso
1. El cliente realiza una compra.
2. El sistema registra:
   - ID del cliente
   - Productos comprados
   - Monto total
   - Fecha y hora
   - ID del empleado que atendió
3. Esta información se guarda en una tabla de ventas.
4. El superusuario puede consultar:
   - Total de ventas por empleado
   - Qué productos vendió
   - Cuánto vendió por fecha

### Reglas
- Solo el superusuario puede ver el historial completo.
- El sistema debe permitir filtrar ventas por:
   - Fecha
   - Empleado
   - Producto
