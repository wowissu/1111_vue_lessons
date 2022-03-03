# 陣列型別 (Array types)

```ts
const foo: string[] = ['123', '456'];
const foo: number[] = [123, 456];
```

## 陣列泛型 Array Generic

```ts
const foo: Array<string> = ['123'];
```

## 陣列介面 interface as Array

```ts
interface NumberArray {
  [index: number]: number;
}

const a1: NumberArray = [1, 2, 3, 4, 5];
```

`Q. 找出問題`

```ts
const a1: NumberArray = [1, 2, 3, 4, 5];
const a2: number[] = [1, 2, 3, 4, 5];

a1.push(6);
a2.push(6);
```

## 類別陣列 Array-like Object

```ts
interface IArguments {
  [index: number]: any;
  length: number;
  callee: Function;
}
```

## 任意陣列

```ts
let foo: any[] = [123, 'bar', { id: null }];
```

## 解構賦值 (Destructuring assignment)

```ts
const [x, y] = [1, 2];
```

```ts
const foo = [1, 2]; // number[]
const [x, y] = foo;
```

`Q 解構後的 x, y 型別`

```ts
const foo = [1, '2'];
const [x, y] = foo;
```