//let estacion = prompt("ingrese su estacion del año preferida: 1-Verano, 2-Otoño, 3-Invierno, 4-Primavera");

//if( estacion == "1"){
//    document.write("Sandia");
//}//else if(estacion == "2"){//
    //document.write("Churros");
//}else if(estacion =="3"){//
    //document.write("Guiso/Pastas");
//}else if(estacion == "4");{//
 //   document.write("Cerveza");
//}else{
//    alert("ingreso una opcion no valida");
//}


let estacion = prompt('ingrese su estacion favorita: 1- verano, 2-otoño, 3-invierno, 4-primavera');

/*
if(estacion == '1'){
    document.write('sandia');
}else if(estacion == '2'){
    document.write('churros');
}else if(estacion == '3'){
    document.write('pasta')
}else if(estacion == '4'){
    document.write('cerveza')
}else {
    alert('ingreso una opcion erronea');
}
*/

switch(estacion){
    case "1":
        document.write("Sandia");
        break;
    case "2":
        document.write("Churro");
        break;
    case "3":
        document.write("Guiso/Pasta");
        break;
    case "4":
        document.write("Cerveza");
        break;
    default:
        alert("No es opcion");

}

console.log( confirm("¿Desea contininuar?"))

/*
do{
    ....
}while(confirm("¿Desea continuar?"))
*/