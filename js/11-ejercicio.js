//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es
//  divisible (hay que decir todos por los que es divisible)


const num = parseInt(prompt("Ingrese un numero: ")); // === restrictivo parseInt para asegurar que sea un número
let mensaje = `El número ${num} es divisible por: `;


if (num % 2 === 0) {
    mensaje += "2 ";
    
}

if (num % 3 === 0) {
    mensaje += "3 ";
   
}

if (num % 5 === 0) {
    mensaje += "5 ";
    
}

if (num % 7 === 0) {
    mensaje += "7 ";
    
}

alert(mensaje);

// Mostramos el resultado final
/*if (esDivisible) {
    alert(mensaje);
} else {
    alert("El número no es divisible por 2, 3, 5 ni 7");
}*/