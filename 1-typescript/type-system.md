# 型別系統(Type System)

```ts
interface Foo {
  bar: string
}

type FooType = Foo

class Bar extends Foo {
  public str: string;
}
```

## 原始資料型別

```ts
const foo: boolean;
const foo: string;
const foo: number;
const foo: void;
const foo: undefined | null;
```

### 物件資料型別 (test)

```ts
const boo: Boolean = new Boolean(true);
const boo: String = new String('123');
```

### `Q 填入 === or !==`

```js
const a = new Boolean(true) ??? true;
const b = new String('123') ??? '123';

const a = Boolean(true) ??? true;
const b = String('123') ??? '123';
```

## 型別推輪

```ts
let foo = 'bar';
foo = 7;
```

## Any Types

```ts
const str: any = '456';
```

### unknow type

Any型別的安全版，可接受賦值，但無法給值。操作方法也會報錯

[參考](https://ithelp.ithome.com.tw/articles/10223315)

```ts
let foo = 'bar';
foo = 7;

let bar: unknown = '123';
bar = 7;
foo = bar;
```

## Interfaces

```ts
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```

### 唯獨屬性，可選屬性

```ts
interface foo {
  readonly id: number;
  name?: string;
}
```

## Union Types

```ts
let foo: string | number;
foo = '123';
foo = 123;
```

```ts
// 只能存取共用屬性
let foo: string | number;
const bar1 = foo.toString();
const bar2 = foo.length // error
```

```ts
// 型別推斷
let foo: string | number;
if (typeof foo === 'string') {
  foo.length // type will be string
}
```