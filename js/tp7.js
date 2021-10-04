let numero1 = prompt();
let numero2 = prompt();
let numero3 = prompt();

if(numero1 > numero2 && numero1 > numero3){
    document.write(numero1);
} else if (numero2 > numero3){
    document.write(numero2);
}else{
    document.write(numero3);
}