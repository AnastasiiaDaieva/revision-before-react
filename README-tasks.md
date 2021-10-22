Интерполяция

Стрелочные функции

Область видимости

Расширение литерала объекта

Деструктуризация

Операции spread и rest

Перебирающие методы масcивов

Ключевое слово this

ES6 классы

EcmaScript модули

Промисы

Асинхронные функции

Функции высшего порядка

Современные концепции в JS

Помимо конспекта, можно подсмотреть тут https://learn.javascript.ru/string

JS операторы - https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

Условия в javascript -
https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/conditionals

Switch - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/switch

Что за черт, Javascript - https://habr.com/ru/company/mailru/blog/335292/

Тернарный оператор в JavaScript: за, против, подводные камни -
https://techrocks.ru/2021/04/15/ternary-operator-in-javascript-pros-and-cons/

Индексация в массиве начинается с 0.

С помощью свойства length мы можем получить длину массива или строки (возвращает число), будет
полезно при вычислении последнего индекса массива.

Шпаргалка по методам массивов:

split/join – преобразует строку в массив и обратно.

push () – добавляет элементы в конец,

pop() – удаляет элемент с конца,

shift() – удаляет элемент с начала,

unshift() – добавляет элементы в начало.

splice(index, deleteIndex, ...arr) – начиная с индекса index, удаляет deleteIndex элементов и
вставляет arr.

slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая
end).

Одна функция – одно действие.

Шпаргалка по объявления функций в JS:

Функциональное выражение (function expression)

const greet = function (name) { return `Hello, ${name}`; };

Объявление функции (function declaration)

function greet(name) { return `Hello, ${name}!`; }

Стрелочная функция (arrow function)

const greet = name => return `Hello, ${name}!`;

Не забывайте что оператор = это оператор присвоения, а не сравнения

Несколько лайфхаков при работе с массивами

Как быстро очистить массив

const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];

fruits.length = 0;

console.log(fruits); // вернет []

Как объединить более двух массивов

const fruits = ['apple', 'banana', 'orange'];

const meat = ['poultry', 'beef', 'fish'];

const vegetables = ['potato', 'tomato', 'cucumber'];

const food = [...fruits, ...meat, ...vegetables];

console.log(food); // вернет ["apple", "banana", "orange", "poultry", "beef", "fish", "potato",
"tomato", "cucumber"]

Как получить рандомное значение массива

const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];

const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];

console.log(randomFruit); // вернет рандомный фрукт из массива

Разберитесь с тем что такое поля объекта, значения, ключи и методы.

Выучите цикл перебора объекта for...in, так же нужно понимать что такое конструктор объекта и для
чего нужен оператор new.

Прикрепил ссылки на дополнительные материалы для изучения

Всё об объектах - https://learn.javascript.ru/object

Работа с объектами - https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects

Цикл перебора объекта for...in -
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...in

Конструктор объекта -
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor

Оператор new - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

Ключевое слово this и контекст выполнения функции так же пригодятся при выполнении домашнего
задания, выучите как работает метод для привязки контекста bind(), а также методы call() и apply()
для вызова функции с нужным контекстом.

Дополнительные материалы:

Функции высшего порядка - https://habr.com/ru/company/ruvds/blog/428570/

Callback-функции - https://ru.hexlet.io/blog/posts/javascript-what-the-heck-is-a-callback

Замыкания и лексическая область видимости -
https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures

Ключевое слово this - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this

bind, call и apply на простом примере - https://habr.com/ru/post/199456/

Наследование, инкапсуляция, абстракция, полиморфизм - это основные принципы ООП
(объектно-ориентированного программирования) и их так же нужно понимать. Поэтому оставляю внизу
ссылки которые помогут в выполнении дз или как дополнительный материал.

1. Классы в js, конструкторы классов:

https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes

https://ponyfoo.com/articles/es6-classes-in-depth

2. Вступление в ООП:

https://developer.mozilla.org/ru/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

https://medium.com/nuances-of-programming/%D0%BA%D1%80%D0%B0%D1%82%D0%BA%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%BF%D0%BE-%D0%BE%D0%BE%D0%BF-%D0%B2-js-1f54f9d50067

3. Прототипы:
   https://developer.mozilla.org/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

4. Приватные свойства класса:
   https://medium.com/devschacht/javascripts-new-private-class-fields-c60daffe361b

Функциональные методы для работы с массивами -
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array

Очень рекомендую к прочтению - https://tproger.ru/translations/javascript-arrays-best-practices/

На случай, если не получится прочитать последнюю ссылку, выделю из нее важную (по моему мнению)
информацию:

Каждый раз, когда нужно обработать массив, не обязательно использовать циклы или изобретать
велосипед. Вероятнее всего, это уже сделали за вас. Поищите подходящий метод.

В большинстве случаев задачу можно будет решить с помощью методов map(), filter(), reduce() или
spread-оператора.

Никогда не помешает умение применять методы slice(), some(), flatMap() и тому подобные. Используйте
их, когда это будет целесообразно.

Всегда помните, какие из методов создают новый массив, а какие модифицируют уже существующий. Иначе
можно наломать дров.

Метод slice() и spread-оператор делают поверхностную копию массива. Поэтому массивы и подмассивы
будут ссылаться на один и тот же объект в памяти.

«Старые» методы, изменяющие массив, имеют современные аналоги. Тщательно выбирайте используемые
методы. P.S. на mdn (скинул первой ссылкой) в самом низу странички, есть таблица с поддержкой
методов браузерами

1. Функциональные методы массивов - https://learn.javascript.ru/array-iteration

2. Обязательно разобраться с Reduce -
   https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

На каком бы элементе мы ни поймали событие, всегда можно узнать, где конкретно оно произошло.
event.target - самый глубокий элемент, который вызывает событие, называется «целевым» или «исходным»
элементом. event.currentTarget - Определяет элемент, в котором в данный момент обрабатывается
событие, при движении события внутри DOM. Всегда совпадает элементом, на котором обработчик события
был назначен, в отличие от свойства event.target.

Идея делегирования событий заключается в том, что если у нас есть много элементов, события на
которых нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому, мы
ставим один обработчик на их общего предка.

Всплытие и погружение событий - https://learn.javascript.ru/bubbling-and-capturing

Делегирование событий - https://habr.com/ru/post/512782/

intersection Observer API и ленивая загрузка изображений -
https://habr.com/ru/company/ruvds/blog/453586/

Слушатели для закрытия модального окна и листания изображений создавайте только при открытии
модального окна (то есть внутри ответственной за это функции). Соответственно, удаляйте при закрытии
(внутри функции, отвечающей за закрытие модалки) – память браузера скажет вам за это спасибо.

Parcel:

https://github.com/goitacademy/parcel-project-template

https://www.loom.com/share/355546461a414daf9c28013dfe0c1c5f

https://www.loom.com/share/35f4621d4a0d42ffb6c804800d6dde08

Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере,
важным моментом является то, что эти данные сохраняются при обновлении страницы и даже при
перезапуске браузера (sessionStorage только при обновлении страницы).

1. Handlebars - https://habr.com/ru/post/273581/

2. localStorage на пальцах - https://tproger.ru/articles/localstorage/

3. sessionStorage - https://developer.mozilla.org/ru/docs/Web/API/Window/sessionStorage

Объект Promise используется для отложенных и асинхронных вычислений, и так как язык программирования
javascript однопоточный, поэтому одновременно несколько действий он выполнять не может - для этого и
существуют асинхронные операции.

Рекурсия: https://habr.com/ru/post/337030/

https://code.tutsplus.com/ru/tutorials/understanding-recursion-with-javascript--cms-30346

Асинхронный js - https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Introducing

Объект Promise -
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise

Метод then() -
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

setTimeout, setInterval -

https://developer.mozilla.org/ru/docs/Web/API/WindowTimers/setTimeout

https://developer.mozilla.org/ru/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

Обратите внимание, что функции resolve/reject может принять только один аргумент.

Для запросов на сервер можно использовать fetch - это дефолтный метод js который позволяет легко и
логично получать ресурсы по сети асинхронно. Так же есть библиотеки с помощью которых можно очень
удобно работать с запросами, приведу одну из таких в доп материалах внизу.

AJAX (Asynchronous Javascript And Xml) - технология обращения к серверу без перезагрузки страницы.
За счёт этого уменьшается время отклика и веб-приложение по интерактивности больше напоминает
десктоп.

Несмотря на то, что в названии технологии присутствует буква X (от слова XML), использовать XML
вовсе не обязательно. Под AJAX подразумевают любое общение с сервером без перезагрузки страницы,
организованное при помощи JavaScript.

Дополнительные материалы:

Fetch - https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

Библиотека для работы с запросами Axios :

Сравнение fetch и axios - https://habr.com/ru/company/ruvds/blog/477286/

Документация axios на русском - https://github.com/klesarev/axios-rus-docs/tree/master/docs

AJAX для новичков - https://habr.com/ru/post/14246/

Асинхронные функции используются в решении большинства задач в современной разработке, но не
заменяют промисов, они идентичны по своей сути. Асинхронные функции предоставляют альтернативный, а
в некоторых случаях и лучший подход работы с базирующимися на промисах функциями. Но они всё ещё
используют и производят промисы - так как возвращается именно промис. Асинхронная функция может быть
вызвана другой асинхронной функцией или промисом. Мы можем смешивать и сочетать их в зависимости от
того, какой синтаксис лучше всего подходит для каждой конкретной задачи.

"...Ты просто не знаешь вещи, о которых когда-нибудь узнаешь..." А. Репета

https://www.notiflix.com/
