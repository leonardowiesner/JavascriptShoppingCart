let i = 0;

do{ //Se ejecuta al menos una vez
    if(i % 15 === 0){
        console.log(`${i} fizzbuzz`)
    }else if (i % 3 === 0){
        console.log(`${i} fizz`)
    }else if (i % 5 === 0){
        console.log(`${i} buzz`)
    }
    i++;
}while (i < 100);