// crear un arreglo con datos
let series = ["Juego del Calamar", "Loky", "Frozen", 2, true];

// crear un arreglo vacio
let temporadas = [];

// mostrar un valor de un arreglo
document.write(series[0]);
//contar los elementos d eun arreglo
console.log(series.length);

// recorrer elemeto por elemento un arreglo
for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" + series[posicion]);
}

// agregar un elemento al final del arreglo
series.push("Breaking bad");

document.write("<br><br><b>Arreglo series</b><br>");

for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" + series[posicion]);
}

// agregar un elentor en una posicion particular
series.splice(1, 0, "GOT"); // (posicion, borrar algo (0 no borra nada), agregar)

document.write("<br><br><b>Arreglo un elemento en una posicion particular</b><br>");

for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" + series[posicion]);
}

// eliminar un elemneto del arreglo

series.splice(5,1); // (posicion, borrar (el elemento o elementos a continuacion, dependiendo del numero), agregar)

document.write("<br><br><b>Eliminar un elemento en una posicion particular</b><br>");

for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" + series[posicion]);
}

// modificar un valor del arreglo
series[4] = "friends";

document.write("<br><br><b>Modificar un valor del arreglo</b><br>");

for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" + series[posicion]);
}