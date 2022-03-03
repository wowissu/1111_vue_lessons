# 函數型別

```ts
function sum(x: number, y: number): number {
    return x + y;
}
```

## 函式介面 Interface for function

```ts
// define function interface
interface Foo {
  (arg: string): boolean;
}

let foo: Foo;

foo = function (arg: string) {
  return true
}
```

## 可選參數 Optional Parameters

```ts
function sum(x: number, y?: number): number {
    return x + (y ?? 0);
}

const ten = sum(3, 7);
const three = sum(3);
```

### 預設參數 Default Parameters

```ts
function sum(x: number, y: number = 0): number {
    return x + y;
}

const foo = sum(3, 7);
const bar = sum(3);
```

### 剩餘參數 Rest of Parameters

```ts
function sum(...nums: number[]): number {
    return nums.reduce((a,b) => a + b, 0);
}

const foo = sum(1, 2, 3, 4, 5);
```

```ts
function sum(x: number, ...nums: number[]): number { /*...*/ }
```

`Q. 以下寫法是否合法`

```ts
function sum(...nums: number[], x: number): number { /*...*/ }
```

## 過載 Overload

```ts
// ex:
function sum(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number'){
    return x + y
  } else if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  }
}
```

過載後

```ts
function sum(x: number, y: number): number { /* ... */ }
function sum(x: string, y: string): string { /* ... */ }
function sum(x: number | string, y: number | string): number | string {
  if (typeof x === 'number' && typeof y === 'number'){
    return x + y
  } else if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  }
}
```

