let notas;
let promedio;
let sumaNotas = 0;

// Declarar objeto ALUMNO
let alumno = {
    idAlumno: 39869194,
    nombreAlumno: "Rodrigo"
};

// Declarar una función que determine si la persona es ALUMNO o no
function esAlumno(alumno) {
    let idIngresado = parseInt(prompt("Bienvenido/a. Ingrese su ID (DNI): "));
    if (idIngresado == alumno.idAlumno) {
        esAlumno == true;
        alert("Bienvenido/a " + alumno.nombreAlumno);
        let cantNotas = parseInt(prompt("Escriba la cantidad de notas a promediar: "));

        for (let i = 0; i < cantNotas; i++) {
            let examenNumero = i + 1;
            let notas = parseInt(prompt("Escriba la nota del examen " + examenNumero + ":"));
            if (notas <= 10 && notas >= 1) {
                sumaNotas = sumaNotas + notas;
            } else {
                alert("El valor ingresado no es un número válido. Vuelva a ingresar con su ID.");
                esAlumno(alumno);
                return;
            }
        }

        promedio = (sumaNotas / cantNotas).toFixed(2); // Para mostrar sólo 2 decimales después de la coma
        alert("Su promedio es de " + promedio + ".");
    } else {
        alert("Usted no está registrado como alumno. Refresque la página para poder ingresar.");
        return;
    }
}

// Llamar a la función
esAlumno(alumno);