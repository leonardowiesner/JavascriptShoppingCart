//fizzbuzz

//todos los multiplos de 3 (3,6,9,12,15) fizz
//multiplos de 5 (5,10,15,20)buzz
//multiplos de 3 y de 5 (15,30,45)fizz buzz

for(let i = 1; i<100; i++){
    if(i % 15 === 0){
        console.log(`${i} fizzbuzz`)
    }else if (i % 3 === 0){
        console.log(`${i} fizz`)
    }else if (i % 5 === 0){
        console.log(`${i} buzz`)
    }



}