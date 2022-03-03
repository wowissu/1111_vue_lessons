# export

- `export` 匯出變數
- `export namespace` 匯出（含有子屬性的）物件
- `export default` ES6 預設匯出
- `export = commonjs` 匯出模組
- `export as namespace` UMD 函式庫宣告全域變數
- `declare global` 擴充套件全域變數
- `declare module` 擴充套件模組
- `/// <reference />` 三斜線指令

```ts
// index.d.ts

export const name: string;
export function getName(): string;
export class Animal {
    constructor(name: string);
    sayHi(): string;
}
export enum Directions {
    Up,
    Down,
    Left,
    Right
}
export interface Options {
    data: any;
}
```

對應的匯入

```ts
// index.ts

import { name, getName, Animal, Directions, Options } from 'foo';

let myName = getName();
let cat = new Animal('Tom');
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
let options: Options = {
    data: {
        name: 'foo'
    }
};
```

## declare & export

```ts
// index.d.ts

declare const name: string;
declare function getName(): string;
declare class Animal {
    constructor(name: string);
    sayHi(): string;
}
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
interface Options {
    data: any;
}

export { name, getName, Animal, Directions, Options };
```

## export default

> Only function, class, interface can use `export default`

```ts
// The way to export default var

declare const Foo: string;

export default Foo;
```

## export =, import

為了相容 AMD 規範和 commonjs 規範而創立的新語法

```ts
// 整體匯入
import foo = require('foo');
// 單個匯入
import bar = foo.bar;
```

```ts
export = foo;

declare function foo(): string;
declare namespace foo {
    const bar: number;
}
```