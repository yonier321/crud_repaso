
const person = {
  name: 'Juan Carlos Valencia',
  age: 30,
  city: 'Cali',
  profession: 'Desarrollador'
};

const { name, age, profession } = person;

document.getElementById("resultado").textContent =
    `Nombre: ${name}, Edad: ${age}, Profesión: ${profession}`;
