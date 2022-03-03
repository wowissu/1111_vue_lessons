# 型別宣告



- `declare var` 宣告全域變數
- `declare function` 宣告全域方法
- `declare class` 宣告全域類別
- `declare enum` 宣告全域列舉型別
- `declare namespace` 宣告（含有子屬性的）全域物件

```ts
// 介面
declare interface Animal {
  name: string;
}

// 介面寫法 2
interface Animal {
  name: string;
}

// type(同interface)
// 介面
declare type Animal = { name: string }

// 介面寫法 2
type Animal = { name: string }


// 列舉
declare enum AnimalTypeEnum {
  Dog = 1;
  Cat = 2;
}

// 類別
declare class Cat implements Animal {
  public type: AnimalTypeEnum;
  public name: string;
  constructor(name: string, type?: AnimalTypeEnum);
}

// 變數
declare var cat: (name: string) => Cat;
declare let dog: (name: string) => Animal;

// 方法
declare function createCat(name: string): Cat;
```

## 宣告檔案 .d.ts

```ts
// index.d.ts loaded in tsconfig
declare function createAnimal(name: string): Animal;

```

```ts
// index.ts
createAnimal('xixi');
```

## 第三方宣告檔案

```console
# npm install @types/jquery --save-dev
# yarn add -D @types/dayjs
```

## 宣告命名空間 declare namespace

namespace 是 ts 早期為了避免與 ES6 `module` 關鍵字衝突而創造的關鍵字，中文稱為名稱空間。

使用 ES6 的模組化方案，現在已經不建議再使用 ts 中的 namespace。

早期宣告檔案還是時常會看到 declare namespace，用來表示包含很多子屬性的全域變數物件。

比如 jQuery 是一個全域變數，它是一個物件，提供了一個 jQuery.ajax 方法可以呼叫，那麼我們就應該使用 declare namespace jQuery 來宣告這個擁有多個子屬性的全域變數。


```ts
declare namespace jQuery {
  const version: number;

  function ajax(url: string, settings?: any): void;

  class Event {
      blur(eventType: EventType): void
  }

  enum EventType {
      CustomClick
  }
}
```

多用於防止命名衝突

```ts
declare namespace Animal {
  interface Cat {
    name: string
  }
}

const cat: Animal.Cat;
```

### 宣告合併

```ts
declare function Animal (name: string): Animal.Cat;
declare namespace Animal {
  interface Cat {
    name: string
  }
}

const cat: Animal.Cat = { name: 'yooy' };
const cat2 = Animal('my cat')
```

## [export 匯出](type-export.md)

