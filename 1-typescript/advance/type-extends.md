# 類型擴充

## 原有方法擴充

```ts
interface String {
    addBar(): string;
}

'foo'.addBar(); // foobar
```

```ts
interface Foo {
    name: string;
}

interface Foo {
    test: string;
}


// equal
interface Foo {
    name: string;
    test: string;
}
```

## 命名空間擴充

```ts
declare namespace JQuery {
    interface CustomOptions {
        bar: string;
    }
}

interface JQueryStatic {
    foo(options: JQuery.CustomOptions): string;
}
```


## 全域擴充

```ts
// index.d.ts

declare global {
    interface String {
        addBar(): string;
    }
}

export {};
```

## 模組擴充

```ts
// types/dayjs.d.ts

import * as dayjs from 'dayjs';

declare module 'dayjs' {
    export function foo(): dayjs.UnitTypeShort;
}
```

## /// reference

早期寫法，現已被 import,export 取代，現較常用於 jsdoc 作為載入型別使用

```js
/// <reference types="node" />

export function foo(p: NodeJS.Process): string;
```