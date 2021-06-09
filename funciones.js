let listaNumero = [5, 3, 0, 2, 4, 4, 0, 0, 2, 3, 6, 0];

let numeroMayor = listaNumero[0];
let numeroMenor = listaNumero[0];
let numeroPromedio = 0;
let numeroResultado = 0;

for (var i = 0; i < listaNumero.length; i++) {
  if (numeroMayor < listaNumero[i]) {
    numeroMayor = listaNumero[i];
  }

  if (numeroMenor > listaNumero[i]) {
    numeroMenor = listaNumero[i];
  }

  numeroPromedio += listaNumero[i];
  numeroResultado = numeroPromedio / listaNumero.length;
}
console.log(numeroMayor + ":::: MAYOR");
console.log(numeroMenor + "::::MENOR");
console.log(numeroResultado + "::::RESULTADO");



let listaAlumnos=[{
    name:"Carlos",
    nota:5,
},
{
    name:"Rashid",
   nota:11,
},
{
    name:"Mocho",
   nota:-20,
}
    
]



for(var i=0; i<listaAlumnos.length; i++){

    let practica = listaAlumnos[i].nota * 0.1
    let problema = listaAlumnos[i].nota * 0.5
    let teoria = listaAlumnos[i].nota * 0.4
    let nota= practica + problema + teoria;
    let alumno = listaAlumnos[i].name;
    if(nota > 0 && nota <= 10){
console.log("el alumno " + listaAlumnos[i].name + " nota final " + nota)
console.log(practica + problema + teoria)

}else{
    console.log(alumno + " ERROR:::la nota esta fuera de rango")
}
}




