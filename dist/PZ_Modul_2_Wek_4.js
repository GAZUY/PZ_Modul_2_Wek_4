/*
Практическое задание №4
Курс:
«Язык сценариев JavaScript и библиотека jQuery»»
Модуль 2
ТЕМА: ОБЪЕКТ. МАССИВЫ. ОБЪЕКТ ARRAY. СТРОКИ.
ОБЪЕКТ STRING. ОБЪЕКТ DATE. ОБЪЕКТ MATH.
ВВЕДЕНИЕ В ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ
ПРОГРАММИРОВАНИЕ
*/
/*
Задание 1
Реализовать класс PrintMaсhine, которой состоит из:
■ размера шрифта;
■ цвета шрифта;
■ семейства шрифта;
■ метода print(), который принимает текст и печатает его
соответствующим шрифтом с помощью document.write().
Создать объект такого класса и продемонстрировать работу
метода.
*/
var PrintMaсhine = /** @class */ (function () {
    function PrintMaсhine(tag, fontSize, color, fontFamily) {
        this.tag = tag;
        this.fontSize = fontSize;
        this.color = color;
        this.fontFamily = fontFamily;
    }
    PrintMaсhine.prototype.print = function (str) {
        document.write("<" + this.tag + " style = \"font-size: " + this.fontSize + "; color: " + this.color + "; font-family: " + this.fontFamily + "\"; > " + str + " </" + this.tag + ">");
    };
    return PrintMaсhine;
}());
var news_Headline_Style = new PrintMaсhine('h2', 20, 'red', 'CHICAGO');
var news_Text_Style = new PrintMaсhine('p', 16, 'black', 'fantasy');
var news_Tags_Style = new PrintMaсhine('p', 14, 'blue', 'new york');
var news_Data_Style = new PrintMaсhine('h4', 14, 'black', 'wide latin');
news_Headline_Style.print('Реализовать класс PrintMaсhine, которой состоит из:');
news_Text_Style.print('Реализовать класс PrintMaсhine, которой состоит из:');
news_Tags_Style.print('Реализовать класс PrintMaсhine, которой состоит из:');
news_Data_Style.print('Реализовать класс PrintMaсhine, которой состоит из:');
/*
Задание 2
Реализовать класс, описывающий новость (заголовок, текст,
массив тегов, дата публикации). В классе необходимо реализовать
один метод print, который выводит всю информацию в таком
виде, как на рисунке 1
Обратите внимание на то, как выводится дата:
■ если с даты публикации прошло менее дня, то выводится
«сегодня»;
■ если с даты публикации прошло менее недели, то выво-
дится «N дней назад»;
■ в остальных случаях, полная дата в формате «дд.мм.гггг».
Рисунок 1

*/
var News = /** @class */ (function () {
    function News(heading, text, tags, dateOfPublication) {
        this.heading = heading;
        this.text = text;
        this.tags = tags;
        this.dateOfPublication = new Date(dateOfPublication);
    }
    News.prototype.prescription = function () {
        var today = new Date();
        if (this.dateOfPublication.toLocaleDateString() == today.toLocaleDateString()) {
            return 'сегодня';
        }
        else if (this.dateOfPublication.valueOf() > (today.valueOf() - 1000 * 60 * 60 * 24 * 7)) {
            return Math.floor((today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24)) + ' дней назад';
        }
        else {
            return this.dateOfPublication.toLocaleDateString();
        }
    };
    News.prototype.print = function () {
        news_Headline_Style.print(this.heading);
        news_Text_Style.print(this.text);
        news_Tags_Style.print('Реализовать класс PrintMaсhine, которой состоит из:');
        news_Data_Style.print(this.dateOfPublication.toString());
    };
    return News;
}());
var post = new News('you', 'never', ['walk', 'alone'], '2023-10-14');
document.write(post.prescription());
post.print();
/*
Задание 3
Реализовать класс, описывающий новостную ленту.
Класс должен содержать:
■ массив новостей;
■ get-свойство, которое возвращает количество новостей;
■ метод для вывода на экран всех новостей;
■ метод для добавления новости;
■ метод для удаления новости;
■ метод для сортировки новостей по дате (от последних но-
востей до старых);
■ метод для поиска новостей по тегу (возвращает массив
новостей, в которых указан переданный в метод тег).
Продемонстрировать работу написанных методов.
*/
var NewsFeed = /** @class */ (function () {
    function NewsFeed(arr) {
        this.arr = [];
    }
    Object.defineProperty(NewsFeed.prototype, "length", {
        get: function () {
            return this.arr.length;
        },
        enumerable: false,
        configurable: true
    });
    NewsFeed.prototype.print = function () {
        this.arr.forEach(function (el) {
            el.print();
        });
    };
    NewsFeed.prototype.addNews = function (news) {
        this.arr.push(news);
    };
    NewsFeed.prototype.removalNews = function (index) {
        this.arr.splice(index, 1);
    };
    NewsFeed.prototype.searchTag = function (tag) {
        var _this = this;
        var arr1;
        this.arr.forEach(function (el, i, arr) { return el == tag ? arr1.push(_this.arr[i]) : arr1; });
        return arr1;
    };
    NewsFeed.prototype.sortingNews = function () {
        this.arr.sort();
    };
    return NewsFeed;
}());
// class NewsFeed {
//   array: infoNews[]
//   constructor(NewsArray: infoNews[]) {
//     this.array = NewsArray
//   }
//   get count() {
//     return this.array.length
//   }
//   print() {
//     this.array.forEach(el => {
//       el.print()
//     })
//   }
// }
// const feed = new NewsFeed([
//   new infoNews('you', 'never', ['walk', 'alone'], '2023-08-23'),
//   new infoNews('you2', 'never', ['walk', 'alone'], '2023-08-21'),
//   new infoNews('you3', 'never', ['walk', 'alone'], '2023-07-24'),
//   new infoNews('you4', 'never', ['walk', 'alone'], '2023-07-09'),
// ])
// infoNews.push('you', 'never', ['walk', 'alone'], '2023-08-25')
// console.log(NewsFeed)
// let index = arr.findIndex(el => el.this.heading == this.heading)
// infoNews.splice(index, 1)
// console.log(NewsFeed)
// infoNews.sort(a.date - b.date)
// console.log(NewsFeed)
// infoNews.filter(this.arrayTags = 'you')
// console.log(NewsFeed)
// function makeArmy() {
//  let shooters = [] ;
//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // shooter function
//       alert( i ); // should show its number
//     };
//     shooters.push(shooter);
//     i++;
//   }
//   return shooters;
// }
// /*
// let army = makeArmy();
// army[0](); // the shooter number 0 shows 10
// army[5](); // and number 5 also outputs 10...
// // ... all shooters show 10 instead of their 0, 1, 2, 3...
// */
