//Imprimir numeros del 1 al 100. Para n° divisibles por 3 imprime fizz
//Para  n° divisibles por 5 y no 3 imprime buzz
//Para los que sean divisibles por ambos imprime fizzbuzz

for (let printNumbers = 1; printNumbers <= 100; printNumbers++){
    if((printNumbers % 3) == 0 && (printNumbers % 5) == 0){
        console.log("FizzBuzz");
    }else if((printNumbers % 3) == 0){
        console.log("Fizz");
    }else if ((printNumbers % 5) == 0){
        console.log("Buzz");
    }else{
        console.log(printNumbers);
    }
}

