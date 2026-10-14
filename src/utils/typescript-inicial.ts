//Tipos de datos primitivos con Typescript
const numero: number = 1;
const nombre: string = "Tomas";
const activo: boolean = false;

//Objetos en Typescript

interface User {
  nombre: string;
  edad: number;
  email: string;
  dni: number;
  rol: string;
  bio?: string //Simbolo de pregunta indica que es optativo
}

type estado = "activo" | "inactivo" | "suspendido"

const usuario: User = {
  nombre: "Julian",
  edad: 24,
  email: "julian@gmail.com",
  dni: 1111111111,
  rol: "admin",
};

const usuarios: User[] = [
  {
    nombre: "Julian",
    edad: 24,
    email: "julian@gmail.com",
    dni: 1111111111,
    rol: "admin",
  },
  {
    nombre: "Tomas",
    edad: 21,
    email: "tomas@gmail.com",
    dni: 2222222222,
    rol: "admin",
  },
];

console.log(usuario);

console.log(numero);


const status : estado = "suspendido"
console.log(status)