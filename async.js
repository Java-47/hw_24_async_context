//Problem -> console 10 times 10


for(var i = 0; i < 10; i++){
    setTimeout(function (index) { //функция принимает аргумент
        console.log(i);
    }(i),1000); //Вызов функции с передачей i в качестве аргумента --IIFE (Immediately Invoked Function Expression) 
}

