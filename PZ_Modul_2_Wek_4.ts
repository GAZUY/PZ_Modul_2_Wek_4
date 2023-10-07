
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

class PrintMaсhine{
    fontSize: number
    color: string
    fontFamily: string
    constructor (fontSize: number, color: string, fontFamily: string) {
        this.fontSize = fontSize
        this.color = color
        this.fontFamily = fontFamily
    }
    print (str: string) {
        document.write("<p style=\"font-size:" + this.fontSize + "; color: " + this.color + "; font-family:" + this.fontFamily + "\">" + str + "</p>")
    }
    
    
}

let qwe = new PrintMaсhine(20, 'red', 'Arial')

    qwe.print('Реализовать класс PrintMaсhine, которой состоит из:')



        


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

class News {
    heading: string
    text: string
    tags: string[]
    dateOfPublication: Date
    constructor( heading: string, text: string, tags: string[], dateOfPublication: string) {
       this.heading = heading
       this.text = text
       this.tags = tags
       this.dateOfPublication = new Date(dateOfPublication)
    }
    print(){
        function prescription () {
            let today = new Date()
            if (this.dateOfPublication.toLocaleDateString() == today.toLocaleDateString()) {
              return 'сегодня'
            } else if (this.dateOfPublication.valueOf() > (today.valueOf() - 1000 * 60 * 60 * 24 * 7)) {
              return ((today.valueOf() - this.ddateOfPublicationate.valueOf()) / (1000 * 60 * 60 * 24)).toFixed(0) + ' дней назад'
            } else {
              return this.dateOfPublication.toLocaleDateString()
            }
          }
          document.write(`<h2>${this.heading}</h2> <h4>${prescription ()}</h4> <p>${this.text}</p> <h5>${this.tags.join(' #')}</h5>`)

    }
}
const post = new News('you', 'never', ['walk', 'alone'], '2023-07-29')
console.log(post.print())


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
