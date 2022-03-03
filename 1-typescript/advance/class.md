# 類別

傳統方法中，JavaScript 透過建構函式實現類別的概念，透過原型鏈實現繼承。而在 ES6 中，我們終於迎來了 class。

TypeScript 除了實現了所有 ES6 中的類別的功能以外，還添加了一些新的用法。
這一節主要介紹類別的用法，下一節再介紹如何定義類別的型別。

## 類別的概念

雖然 JavaScript 中有類別的概念，但是可能大多數 JavaScript 程式設計師並不是非常熟悉類別，這裡對類別相關的概念做一個簡單的介紹。

- 類別`(Class)`：定義了一件事物的抽象特點，包含它的屬性和方法
- 物件`(Object)`：類別的實例，透過 new 產生
- 面向物件`(OOP)`的三大特性：封裝、繼承、多型
- 封裝`(Encapsulation)`：將對資料的操作細節隱藏起來，只暴露對外的介面。外界呼叫端不需要(也不可能)知道細節，就能透過對外提供的介面來訪問該物件，同時也保證了外界無法任意更改物件內部的資料
- 繼承`(Inheritance)`：子類別繼承父類別，子類別除了擁有父類別的所有特性外，還有一些更具體的特性
- 多型`(Polymorphism)`：由繼承而產生了相關的不同的類別，對同一個方法可以有不同的響應。比如 Cat 和 Dog 都繼承自 Animal，但是分別實現了自己的 eat 方法。此時針對某一個實例，我們無需瞭解它是 Cat 還是 Dog，就可以直接呼叫 eat 方法，程式會自動判斷出來應該如何執行 eat
- 存取器`(getter & setter)`：用以改變屬性的讀取和賦值行為
- 修飾符`(Modifiers)`：修飾符是一些關鍵字，用於限定成員或型別的性質。比如 public 表示公有屬性或方法
- 抽象類別`(Abstract Class)`：抽象類別是供其他類別繼承的基底類別，抽象類別不允許被實例化。抽象類別中的抽象方法必須在子類別中被實現
- 介面`(Interfaces)`：不同類別之間公有的屬性或方法，可以抽象成一個介面。介面可以被類別實現（implements）。一個類別只能繼承自另一個類別，但是可以實現多個介面

```ts
interface IAnimal {
  name: string
}

abstract class Animal implements IAnimal {
  public name: string;

  constructor (name: string) {
    this.name = name;
  }

  static isAnimal(a) {
    return a instanceof Animal;
  }
}

class Cat extends Animal {
  public static feature = 'cute';

  public readonly born: string;
  private food: string;
  protected DNA: string;

  constructor (name: string) {
    super(name);
  }
  constructor (public name: string) {
    super(name);
  }

  get age () {
    return dayjs().diff(this.born).get('year');
  }
}
```