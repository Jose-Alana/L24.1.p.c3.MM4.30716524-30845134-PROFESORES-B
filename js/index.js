/*En la Universidad se contratan los profesores por categorías
(1=Instructor, 2=Asistente,3=Agregado, 4=Asociado, 5=Titular),
también se conoce de cada profesor: su nombre y sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos
(Ej. estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’})
se requiere una función que retorne el porcentaje de profesores de un sexo y una categoría dada.
Función: porcProfesSexoEnCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número), sexo (una letra).
Retorno: el porcentaje de profesores de un sexo dado en la categoría indicada.
Condiciones: debe usarse la función profesoresCategoria del ejercicio anterior.*/

let profesoresCategoria = (profesores, categoria) => {
    let profesoresFiltrados = [];
    for (let i = 0; i < profesores.length; i++) {
        if(profesores[i].categoria == categoria){
            profesoresFiltrados.push(profesores[i]);
        }
    }
    return profesoresFiltrados
   }

let porcProfesSexoEnCategoria = (profesores, categoria, sexo) => {
    let profesoresFiltrados = profesoresCategoria(profesores, categoria);
    let contprofesores = 0;
    for (let i = 0; i < profesoresFiltrados.length; i++) {
        if(profesoresFiltrados[i].sexo == sexo){
           contprofesores++;
        }
    }
    return (contprofesores/profesoresFiltrados.length)*100
}
let profesores = [
    {categoria: 1, nombre: 'Ana', sexo: 'F'},
    {categoria: 2, nombre: 'Carlos', sexo: 'M'},
    {categoria: 3, nombre: 'Diana', sexo: 'F'},
    {categoria: 4, nombre: 'Eduardo', sexo: 'M'},
    {categoria: 5, nombre: 'Fernanda', sexo: 'F'},
    {categoria: 1, nombre: 'Gabriel', sexo: 'M'},
    {categoria: 2, nombre: 'Hector', sexo: 'F'},
    {categoria: 1, nombre: 'Isabel', sexo: 'F'},
]

let salida = document.getElementById("salida");
salida.innerHTML += `Porcentaje de profesores femeninos:`;
salida.innerHTML += `<br>Categoria 1: ${porcProfesSexoEnCategoria(profesores, 1, 'F').toFixed(2)}%`;
salida.innerHTML += `<br>Categoria 2: ${porcProfesSexoEnCategoria(profesores, 2, 'F').toFixed(2)}%`;
salida.innerHTML += `<br>Categoria 3: ${porcProfesSexoEnCategoria(profesores, 3, 'F').toFixed(2)}%`;
salida.innerHTML += `<br>Categoria 4: ${porcProfesSexoEnCategoria(profesores, 4, 'F').toFixed(2)}%`;
salida.innerHTML += `<br>Categoria 5: ${porcProfesSexoEnCategoria(profesores, 5, 'F').toFixed(2)}%`;