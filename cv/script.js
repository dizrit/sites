/* 

// переменные 
var name = 'shop';
var a=5 ;
var b=6 ;

alert (name + ' ' + (a + b));

// типы данных 
var stringValue = 'строкалюбая'
var numberValue = 12356546;
var logicValue = true; // false // буливевые значения 
var nonExistant = null; // полное отсутвие всего   
var notDefined = undefined; // не заданное значение , но переменная существует

//масcив
var arr = ['вася', 'петя'];
arr[0]; 

// обьект и его свойста , ключи значения
var object = {
    key1: 'value',
    key2: 'value',
    key3: 'value',
    key4: 'value',
};


// обьект яблоко
var apple = {
    color: 'red',
    size: 'big',
    type: 'pogranichnik'
};

//вызов одного из свойст обьекта 
 alert (apple.size);

// визов функции которая есть в свойствах обьекта 
var apple = {
    color: 'red',
    size: 'big',
    type: 'pogranichnik',
    funcName: function () {

    }
};

// вызов метода обьекта эпл
 alert ( apple.funcName() );

//  Взаимодействие с пользователем
alert ('хай');

// возможность ввести  ответ 
prompt ('ты точно молодец?');

// ответ выступает переменной. переменная отображаеться 
var answer = prompt ('ты точно молодец?');
alert (answer);

// булевая переменная true / fulse
var answer2 = confirm ('тебе точно есть 18 лет? ');

// Условия 
if (object.key2 == 'value2') {
    alert ('да тру условие')
} else {
    alert ('нет фолс условие')
};

//множественные условия проерки...
if (object.key2 == 'value2') {
    alert ('да условие')
} else if (object.key2 == 'value') {
    alert ('нет условие')
} else if (object.key2 == 'value') {
    alert ('нет условие')
} else if (object.key2 == 'value') {
    alert ('нет условие')
} else if (object.key2 == 'value') {
    alert ('нет условие')
}

//Цикл
for (var i=0; i<=5; i++) {
    alert (i);
}

//Функции1
function nameOffunction1 () {
    alert (4 + 5);
}
nameOffunction1();

//Функции2
function nameOffunction2 (a,b) {
    alert (a + b);
    var newFuncValue = 21; //локальная переменная для функции
    alert (stringValue); //глобальная переменная, видно везде
}
nameOffunction2(5,10);


//DOM!!!!! (Document Object Model)

var elem = document.body.querySelector('.button')

var elem = document.body.querySelectorAll('div') //все дивы


*/

//События    onclick ; onmouseover 
var elem = document.body.querySelector('.button')

elem.onmouseover  = function ( ) {
    document.body.querySelector('.block').style.background = 'red'
}    
elem.onmouseout = function ( ) {
    var block12 = document.body.querySelector('.block')
    block12.style.background = 'yellow'
}
elem.onclick = function ( ) {
    var block11 = document.body.querySelector('.block')
    block11.style.background = 'green'
}
// получение сылок на элементы 
function proshche (selector) { 
    return document.body.querySelector(selector);  //ссыла на элемент черз функцию 
}

var butt2 = document.body.querySelector('.button2') //переменная с второй кнопкой

butt2.onmouseover = function () {
    proshche('.block2').style.background = 'pink' //функция с изменением стиля через ссылку
}