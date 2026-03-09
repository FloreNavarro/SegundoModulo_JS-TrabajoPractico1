//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const num1 = Number(prompt("Ingresa el primer numero: "))
const num2 = Number(prompt("Ingresa el segundo numero: "))
const num3 = Number(prompt("Ingresa el tercer numero: "))

if(num1>num2 & num1>num3){
    alert("El primer numero ingresado es MAYOR")
}else if(num2>num1 & num2>num3){
    alert("El segundo numero ingresado es MAYOR")
}else if(num3>num1 & num3>num2 ){
    alert("El tercer numero ingresado es MAYOR")
}