
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
    print (str: string) {
        document.write(`<${this.tag} style = "font-size: ${this.fontSize}; color: ${this.color}; font-family: ${this.fontFamily}"; > ${str} </${this.tag}>`)
    }
    
    
}

let news_Headline_Style = new PrintMaсhine('h2', 20, 'red', 'CHICAGO')
let news_Text_Style = new PrintMaсhine('p', 16, 'black', 'fantasy')
let news_Tags_Style = new PrintMaсhine('p', 14, 'blue', 'new york')
let news_Data_Style = new PrintMaсhine('h4', 14, 'black', 'wide latin')


news_Headline_Style.print('Реализовать класс PrintMaсhine, которой состоит из:')
news_Text_Style.print('Реализовать класс PrintMaсhine, которой состоит из:')
news_Tags_Style.print('Реализовать класс PrintMaсhine, которой состоит из:')
news_Data_Style.print('Реализовать класс PrintMaсhine, которой состоит из:')



        


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
    dateOfPublication: any
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
        return Math.floor((today.valueOf() - this.dateOfPublication.valueOf()) / (1000 * 60 * 60 * 24)) + ' дней назад'
      } else {
        return this.dateOfPublication.toLocaleDateString()
      }
    }
    print(){
      news_Headline_Style.print(this.heading)
      news_Text_Style.print(this.text)
      news_Tags_Style.print('Реализовать класс PrintMaсhine, которой состоит из:')
      news_Data_Style.print(this.dateOfPublication.toString())
    }
}
const post = new News('you', 'never', ['walk', 'alone'], '2023-10-14')
document.write(post.prescription())
post.print()



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
  arr: any []
  constructor (arr: any[]){
    this.arr = []
  }
  get length (){
    return this.arr.length
  }
  print(){
   this.arr.forEach(el => {
    el.print()
   }) 
  }
  addNews(news:any){
    this.arr.push(news)
  }
  removalNews(index: number){
    this.arr.splice(index, 1)
  }
  searchTag(tag:string){
    let arr1
    this.arr.forEach((el: any, i: number, arr: any[]) => el == tag ? arr1.push(this.arr[i]): arr1)
    return arr1
  }
  sortingNews (){
    this.arr.sort()
  }
}
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