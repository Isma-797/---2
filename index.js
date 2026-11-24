// const regexp = /шаблон/

// regexp = /шаблон/gmi

// const text = "Меня зовут Исма, мне 19 лет"
// console.log(text.match(/\d+/g));

// // \d - цифры 0-9
// // + - одна и больше 
// // g - все совпадения 


// const text2 = "Меня зовут Исма, мне 19 лет"
// console.log(text2.match(/мне \d+/g));

// const text3 = "меня зовут АЛЕКС,мне 30 лет. У меня есть мерседес s500"
// // console.log(text3.match(/s\d+/g));
// // console.log(text3/.test(/^\d+\.\d+$/));



// const text2 = "Меня зовут Исма, мне 19 лет. У меня есть Mersedes S500"
// console.log(text2.match(/мне \d+/g));

// console.log(text2.match(/[А-ЯЁ][а-яё]+/g));

// методы для регулярных выражений
// test() - ищет совпадение и возвращает true / false
// match() - ищет совпадение и возвращает его в виде массив
// replace() - ищет совпадение и заменяет на новое значение
// search() - поиск совпадения и возвращает индекс совпадения

/* 
Флаг - Применение
i - С этим флагом поиск не зависит от регистра: нет разницы между A и a 
g - С этим флагом поиск ищет все совпадения, без него – только первое.
m - Многострочный режим
s - Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n (рассматривается в главе Символьные классы).
u - Включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар (подробнее об этом в главе Юникод: флаг "u" и класс \p{...}).
y - Режим поиска на конкретной позиции в тексте (описан в главе Поиск на заданной позиции, флаг "y")
*/

// console.log("maga hello Maga" .match(/Maga/ig));

// Основные символы
// классы символов
/**
 * \d - цифра [0-9]
 * \w - буква, цифра , _ [A-Za-z0-9_]
 * \s - пробельный символ
 * \D, \W , \S - ОТРИЦАНИЕ (НЕ ЦИФРА, НЕ БУКВА,НЕ ПРОБЕЛ)
 * . - ЛЮБОЙ СИМВОЛ КРОМЕ ПЕРЕВОДА СТРОКИ
 */

// Квантифакторы (количество)
/**
 * + - один и больше
 * * - ноль и больше
 * ? - ноль или один
 * {3} - ровно 3
 * {2 , 5} - от 2 до 5
 * {2,} - 2 и больше
 */

// Якоря
// ^ - начало строки
// $ - конец строки


// Группа и альтернация
/**
 * (...) - группа
 * | - или
 * [abc] - любой из символов a,b,c
 * [^abc] - любой кроме a,b,c
 * [a-z] - диапазон
 */

// console.log(/\d+/.test("123")); // true

// console.log(/\d+/.test("Маге 28 лет")); // true // Ищет цифры от 0 до 9
// console.log(/\w+/.test("Маге 28 лет")); // true // Ищет буквы цифры от 0 до 9
// console.log(/\s+/.test("Маге 28 лет")); // true // Ищет пробелы 


// const email = /^[\w\.-]+@[\w\.-]+\.\w{2,}$/;

// console.log(email.test("magomed@mail.ru")); // true

// const phone = /^\+?\d{11}$/;
// console.log(phone.test("+79310009898"));


// const namer = /^[а-яА-Я]/;
// console.log(namer.test("привет"));


// // ЭКРАНИРОВАНИЕ СПЕЦСИМВОЛОВ (. , + , * , ? , ( , ), и т.д)

// const specChar = /\./
// console.log(specChar.test("Maga.changan")); // Ищет точку

// const specChar2 = /\+/
// console.log(specChar2.test("Maga+changan")); // Ищет плюс

// const str19 = /100\$/
// console.log(str19.test("У МЕНЯ ЕСТЬ 100$")); // Ищет 100$


// const str20 = "abc"
// console.log(str20.search(/b/)); // 1

// const str21 = "Hello world Maga"
// console.log(str21.replace(/Maga/ , "JS")); // Заменяет Мага на JS


// const str21 = /Java/
// console.log(str21.test("I love Java"));


// const str22 = "I love Java"
// console.log(str22.match(/Java/));

// const str23 = "I love Java"
// console.log(str23.replace(/Java/ , "Python"));


// const sh2 = /\d+/g
// console.log(sh2.test("123456"));// true
// console.log("123456".match(sh2));// ["123456"]


// const specChar = /\./
// console.log(specChar.test("Maga.Как дела")); // true


// const str = "У меня 2 яблока, 10 груш и 150 рублей";
// console.log(str.match(/\d+/g)); // ["2", "10", "150"]


// const str1 = "Крутой день! #javascript #coding #100days";
// console.log(str1.match(/#\w+/g)); // ["#javascript", "#coding", "#100days"]


// const sh5 = /^[\w+]{6,12}$/
// console.log(sh5.test("pass1234"));


// const str = "Это       очень       длинная        строка";

// console.log(str.replace(/\s+/g," "));


// const str33 = /^8(\d{3})\s(\d{3})\s(\d{2})\s(\d{2})$/
// console.log(str33.replace("89991234567"));



const phone = "89991234567"
console.log(phone.replace(/^8(\d{3})(\d{3})(\d{2})(\d{2})$/ , "+7 ($1) $2-$3-$4"));


