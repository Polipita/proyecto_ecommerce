//esto es como una simulacion de una base de datos
const bdUsuarios = [];

//registro de usuarios
function crearUsuario(nombre, correo, password, rol = "cliente") {
  const existe = bdUsuarios.some(usuario => usuario.correo === correo);
  if (existe) {
    console.log("Ya existe un usuario con ese correo.");
    return;
  }

  const nuevoUsuario = {
    nombre,
    correo,
    password,
    rol
  };

  bdUsuarios.push(nuevoUsuario);
  console.log("Usuario creado:", nuevoUsuario);
}

//Inicio de sesion para los usuarios
function login(correo, password) {
  const usuario = bdUsuarios.find(u => u.correo === correo);

  if (!usuario) {
    console.log("Correo no encontrado.");
    return;
  }

  if (usuario.password !== password) {
    console.log("Contraseña incorrecta.");
    return;
  }

  sesionActiva = usuario;
  console.log(`Bienvenido, ${usuario.nombre}. Rol: ${usuario.rol}`);
}

crearUsuario("Alejandro", "ale@gmail.com", "1111");
crearUsuario("Luz", "luz@gmail.com", "2222", "empleado");

login("ale@example.com", "123456");
login("lucia@example.com", "000000");
