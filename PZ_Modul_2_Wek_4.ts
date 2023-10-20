
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
    tag: string
    fontSize: number
    color: string
    fontFamily: string
    
    constructor (tag: string, fontSize: number, color: string, fontFamily: string) {
        this.tag = tag
        this.fontSize = fontSize
        this.color = color
        this.fontFamily = fontFamily
        
    }
    display (str: string) {
        document.write(`<${this.tag} style = "font-size: ${this.fontSize}; color: ${this.color}; font-family: ${this.fontFamily}"; > ${str} </${this.tag}>`)
    }
    
    
}

let news_Headline_Style = new PrintMaсhine('h2', 20, 'red', 'CHICAGO')
let news_Text_Style = new PrintMaсhine('p', 16, 'black', 'fantasy')
let news_Tags_Style = new PrintMaсhine('p', 14, 'blue', 'new york')
let news_Data_Style = new PrintMaсhine('h4', 14, 'black', 'wide latin')


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
    prescription () {
      let today = new Date()
      if (this.dateOfPublication.toLocaleDateString() == today.toLocaleDateString()) {
        return 'сегодня'
      } else if (this.dateOfPublication.valueOf() > (today.valueOf() - 1000 * 60 * 60 * 24 * 7)) {
        if (0<(today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24) && (today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24)<= 2){
          return 'вчера' 
        } else if((2<(today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24) && (today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24)<= 5)){
        return Math.floor((today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24)) + ' дня назад'
        } else if((5<(today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24) && (today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24)<= 7)){
          return Math.floor((today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24)) + ' дней назад'}
      } else {
        return this.dateOfPublication.toLocaleDateString()
      }
    }
    print(){
      news_Headline_Style.display(this.heading)
      news_Text_Style.display(this.text)
      news_Tags_Style.display(this.tags.length?'#'+this.tags.filter(el=>el!='').join(' #'):'' ) 
      news_Data_Style.display(this.prescription())
    }
}
const post = new News('Задание 1', 'Реализовать класс PrintMaсhine, которой состоит из: размера шрифта; цвета шрифта; семейства шрифта; метода print(), который принимает текст и печатает его соответствующим шрифтом с помощью document.write(). Создать объект такого класса и продемонстрировать работу метода.', ['PrintMaсhine', 'печатает','style'], '2023-10-18')
const post1 = new News('Задание 2', 'Реализовать класс, описывающий новость (заголовок, текст, массив тегов, дата публикации). В классе необходимо реализовать один метод print, который выводит всю информацию в таком виде, как на рисунке 1', ['заголовок', 'текст', 'массив тегов', 'дата публикации'], '2023-10-19')
const post2 = new News('Задание 3', 'Реализовать класс, описывающий новостную ленту. Класс должен содержать: массив новостей; get-свойство, которое возвращает количество новостей; метод для вывода на экран всех новостей; метод для добавления новости; метод для удаления новости; метод для сортировки новостей по дате (от последних новостей до старых); метод для поиска новостей по тегу (возвращает массивновостей, в которых указан переданный в метод тег).Продемонстрировать работу написанных методов.', ['массив новостей', 'get-свойство', 'метод для сортировки'], '2023-10-20')

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

class NewsFeed {
  arr: News[]
  constructor (arr: News[]){
    this.arr = arr
  }
  get length (){
    return this.arr.length
  }
  printDisplay(){
    this.arr.forEach(el => {
      el.print()
    }) 
  }
  addNews(news:News){
    this.arr.push(news)
  }
  removalNews(index: number){
    this.arr.splice(index, 1)
  }
  searchTag(tag:string){
    return this.arr.filter((el) => el.tags.includes(tag))
  }
  sortingNews (){
    this.arr.sort((a,b) =>a.dateOfPublication.getTime() - b.dateOfPublication.getTime())
  }
}

const feed = new NewsFeed([
  post,
  post1,
  post2,
  new News('you4', 'never', ['walk', 'alone'], '2023-07-09'),
])
feed.addNews(new News('you54', 'never', ['walk', 'alone'], '2023-07-09'))

feed.printDisplay()