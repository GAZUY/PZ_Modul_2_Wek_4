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
    PrintMaсhine.prototype.display = function (str) {
        document.write("<" + this.tag + " style = \"font-size: " + this.fontSize + "; color: " + this.color + "; font-family: " + this.fontFamily + "\"; > " + str + " </" + this.tag + ">");
    };
    return PrintMaсhine;
}());
var news_Headline_Style = new PrintMaсhine('h2', 20, 'red', 'CHICAGO');
var news_Text_Style = new PrintMaсhine('p', 16, 'black', 'fantasy');
var news_Tags_Style = new PrintMaсhine('p', 14, 'blue', 'new york');
var news_Data_Style = new PrintMaсhine('h4', 14, 'black', 'wide latin');
// news_Headline_Style.print('Реализовать класс PrintMaсhine, которой состоит из:')
// news_Text_Style.print('Реализовать класс PrintMaсhine, которой состоит из:')
// news_Tags_Style.print('Реализовать класс PrintMaсhine, которой состоит из:')
// news_Data_Style.print('Реализовать класс PrintMaсhine, которой состоит из:')
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
            if (0 < (today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24) && (today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24) <= 2) {
                return 'вчера';
            }
            else if ((2 < (today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24) && (today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24) <= 5)) {
                return Math.floor((today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24)) + ' дня назад';
            }
            else if ((5 < (today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24) && (today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24) <= 7)) {
                return Math.floor((today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24)) + ' дней назад';
            }
        }
        else {
            return this.dateOfPublication.toLocaleDateString();
        }
    };
    News.prototype.print = function () {
        news_Headline_Style.display(this.heading);
        news_Text_Style.display(this.text);
        news_Tags_Style.display(this.tags.length ? '#' + this.tags.filter(function (el) { return el != ''; }).join(' #') : '');
        news_Data_Style.display(this.prescription());
    };
    return News;
}());
var post = new News('Задание 1', 'Реализовать класс PrintMaсhine, которой состоит из: размера шрифта; цвета шрифта; семейства шрифта; метода print(), который принимает текст и печатает его соответствующим шрифтом с помощью document.write(). Создать объект такого класса и продемонстрировать работу метода.', ['PrintMaсhine', 'печатает', 'style'], '2023-10-18');
var post1 = new News('Задание 2', 'Реализовать класс, описывающий новость (заголовок, текст, массив тегов, дата публикации). В классе необходимо реализовать один метод print, который выводит всю информацию в таком виде, как на рисунке 1', ['заголовок', 'текст', 'массив тегов', 'дата публикации'], '2023-10-19');
var post2 = new News('Задание 3', 'Реализовать класс, описывающий новостную ленту. Класс должен содержать: массив новостей; get-свойство, которое возвращает количество новостей; метод для вывода на экран всех новостей; метод для добавления новости; метод для удаления новости; метод для сортировки новостей по дате (от последних новостей до старых); метод для поиска новостей по тегу (возвращает массивновостей, в которых указан переданный в метод тег).Продемонстрировать работу написанных методов.', ['массив новостей', 'get-свойство', 'метод для сортировки'], '2023-10-20');
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
        this.arr = arr;
    }
    Object.defineProperty(NewsFeed.prototype, "length", {
        get: function () {
            return this.arr.length;
        },
        enumerable: false,
        configurable: true
    });
    NewsFeed.prototype.printDisplay = function () {
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
        return this.arr.filter(function (el) { return el.tags.includes(tag); });
    };
    NewsFeed.prototype.sortingNews = function () {
        this.arr.sort(function (a, b) { return a.dateOfPublication.getTime() - b.dateOfPublication.getTime(); });
    };
    return NewsFeed;
}());
var feed = new NewsFeed([
    post,
    post1,
    post2,
    new News('you4', 'never', ['walk', 'alone'], '2023-07-09'),
]);
feed.addNews(new News('you54', 'never', ['walk', 'alone'], '2023-07-09'));
feed.printDisplay();
