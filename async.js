

for(var i = 0; i < 10; i++)
{//for

    (function (i) {
    setTimeout(function () 
    {console.log(i);}
    ,1000);
    })
    (i); //вызов

}//for
