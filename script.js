//ПРИМЕРИ ЗА ЦИКЛИ: 
//Пример 1:
function fun1()//декларация на функция с име "fun1" с параметър ()
     {
        //В JavaScript има два вида обхват за променливите: функционален и глобален
        //Функционален обхват важи за всяка променлива обявена чрез var в рамките на дадена функция. 
        //Глобален обхват важи за всяка променлива обявена извън функция или без var, дори и във функция. 
        var br = 0; //дефинираме променливите "br" и "q"
        var q;
        q = Number(document.getElementById("q").value); //"q" присвоява "Number" и намираме стойността на елемента "q"
        while (q > 1)
        {
            //при присвояване на стойност могат да се използват оператори
            //присвояване на стойностти:
            br = br + 1;
            q = q / 10;
                
        }
        document.getElementById("result1").innerHTML = " броят десетични цифри е " + br; 
        //функцията document.write не се препоръчва, защото може да има неочаквани резултати (подмяна на съдържането)
        //по този начин вмъкваме HTML таг "броят десетични цифри е"
        // локализираме елемента по ID, id e уникално посвоему, то различава главни от малки букви и бива даван само на един елемент 


    }

//Пример 2:
function fun2()//декларация на функция с име "fun2" с параметър ()
        {
            var x , y, fack = 1;
            for (var x = 2; x < 16; x++)
            {
                fack = fack * x;
                for (var y = 1; y < 100000; y++) 
                    {
                    if (fack + 12 == y * y)
                    {
                        document.getElementById("result2").innerHTML = 
                        "числата отговаряши на условието са  x- " + x + " и y- " + y;
                    }
                }
            }
        }

//Пример 3:
function fun3()
        {
            var n, x;
            var sum=0;
            n = Number(document.getElementById("n").value);
            if (isNaN(n))
            {
                document.getElementById("result3").innerHTML="грешни данни"
            }
            x = Number(document.getElementById("x").value);
            if (isNaN(n)) {
                document.getElementById("result3").innerHTML = "грешни данни"
            }
            for (var i = 1; i <=n; i++)
            {
                s= s+ Math.pow(x,i);
            }
            document.getElementById("result3").innerHTML = "сумата на редицата е " + s;
        }


//ПРИМЕРИ ЗА МАСИВИ:
//Пример 1:

function fun4()
        {
            //дефинираме масивите
            var array = [];
            var arraylenght = 30;
            var sum = 0;
            for (i = 0; i < arraylenght; i++)
            {
                array[i] = Math.floor(Math.random() * 10) 
            }
            var text = " "
            for (i = 0; i < arraylenght; i++)
            {
               
                text += array[i] + ", ";
                
            }
            for (i = 0; i < arraylenght; i++)
            {
                sum += array[i];
            }
            
            document.getElementById("result4").innerHTML = "заредения масив е: " + text;
            document.getElementById("result5").innerHTML = "сумата на масива е: " + sum;
            

        }

//Пример 2:
 function fun5()
        {
            var ocenki = new Array;
            ocenkilength = 20;
            var dve=0, tri=0, chetiri=0, pet=0, shes=0
            for (i = 0; i< ocenkilength;i++)
            {
               ocenki [i] = Math.floor(Math.random() * 5)+2 ;
                
            } 
            var text = " "
            for (i = 0; i < ocenkilength; i++)
            {
                text+=ocenki[i]+" , "
            }
            for (i = 0; i < ocenkilength; i++)
            {
                if (ocenki[i] == 2)
                {
                    two++;
                }
                else if (ocenki[i] == 3) {
                    three++;
                }
                else if (ocenki[i] == 4) {
                    four++;
                }
                else if (ocenki[i] == 5) {
                    five++
                }
                else if (ocenki[i] == 6) {
                    six++
                }
            }
            document.getElementById("result6").innerHTML = " масива от оценки е следния " + text;
            document.getElementById("result7").innerHTML = " в масива има" +"<br/>"+ "двойки - " + two + "<br/>"
                + "тройки - " + three +"<br/>" + "четворки - " + four +"<br/>" + "петици - " 
                + five +"<br/>" +" и шестици - " + six;
        }

//Пример 3:
 function fun6() {
            var text="  "
            var array = [];
            var arraylength = 30;
            for (i = 0; i < arraylength; i++)
            {
                array[i] = Math.floor(Math.random() * 100);
            }
            for (i = 0; i < 20; i++) {

                text+=array[i] +" , "
            }
            document.getElementById("result8").innerHTML = text;
            var max = array[0];
            for (i = 0; i < arraylength; i++)
            {
                if (array[i]>max)
                {
                    max = array[i];
                }
                
            }
            var min = array[0];
            for (i = 0; i < arraylength; i++)
            {
                if (array[i] < min)
                {
                    min = array[i];
                }
                
            }
            document.getElementById("result9").innerHTML = "минималната стойност на масива е " 
            + min + " а максималната е " + max;
        }

//ПРИМЕРИ ЗА УСЛОВНИ КОНСТРУКЦИИ:
//Пример 1:
function fun7()
        {
            var month,
            month = Number(document.getElementById("month").value);
            if (isNaN(month)&&month>12||month<1)
            {
                document.getElementById("result10").innerHTML="грешни данни"
            }
            switch (month)
            {
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    document.getElementById("result10").innerHTML = "месецът има 31 дни"; break;
                case 4: case 6: case 9: case 11:
                    document.getElementById("result10").innerHTML = "месецът има 30 дни "; break;
                case 2:
                    document.getElementById("year").innerHTML = "<input id='year1' value=''/> Mоля, въведете година<br/> <button onclick='fun_7()'> въведи годината</button>";
            }
        }
        function fun_7()
        {
            var year1;
            year1 = Number(document.getElementById("year1").value);
            if (year1 % 400 == 0 || year1 % 4 == 0 && year1 % 100 !== 0) {
                document.getElementById("year").innerHTML = "месецът има 29 дни";
            }
            else document.getElementById("year").innerHTML = "месецът има 28 дни";
        }

//Пример 2:
function fun8() {
            var a, b, c;
            a = Number(document.getElementById('a').value);
            b = Number(document.getElementById('b').value);
            if (isNaN(a)) {
                document.getElementById("result11").innerHTML = "моля, въведете число";
            }
            else if (isNaN(b)) {
                document.getElementById("result11").innerHTML = "моля, въведете число";
            }
            else if (a > b) {
                c = a;
                document.getElementById("reult11").innerHTML = "по-голямото число е " + c;
            }
            else {
                c = b;
                document.getElementById("result11").innerHTML = " по-голямото число е " + c;
            }
        }
//Пример 3:
function fun9()
        {
            var x, y, z, temp=0;
            x = Number(document.getElementById('x').value);
            if (isNaN(x))
            {
                document.getElementById("result12").innerHTML = "моля, въведете число";
            }
            y = Number(document.getElementById('y').value);
            if (isNaN(y)) {
                document.getElementById("result12").innerHTML = "моля, въведете число";
            }
            z = Number(document.getElementById('z').value);
            if (isNaN(z)) {
                document.getElementById("result12").innerHTML = "моля, въведете число";
            }
            if (y<x)
            {
                temp = x;
                x = y;
                y = temp;
            }
             if (z<x)
            {
                temp = z;
                z= x;
                x = temp;
            }
             if (z< y)
            {
                temp = z;
                z = y;
                y = temp;
            }
            document.getElementById("result12").innerHTML ="Числата във взходящ ред " + x+ "," + y +"," + z;
        }