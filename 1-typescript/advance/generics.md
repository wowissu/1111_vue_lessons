# 泛型 Generics

```ts
const p: string[] = [];
const p: Array<string> = [];

function foo<T>(bar: T): T {
  return bar;
}

```

## Function

### 多參數

```ts
function foo<T, U>(bar: T, baz: U): [U, T] {
  return [baz, bar];
}
```

### 泛型約束

```ts
function foo<T extends { name: string }>(bar: T) {
  return bar.name
}

const f1 = foo('123');
const f2 = foo(123);
```

### 預設

```ts
function foo<T extends number | string = number>(bar: T) {
  return bar.name
}

const f1 = foo('123');
const f2 = foo(123);
```


## Interface

```ts
interface Foo<T> {
  bar: T;
}
```

## Class

```ts
class Foo<T> {
  bar: T;

  sum(x: T) {
    return x;
  }
}
```

[官方工具之泛型應用](utility-types.md)