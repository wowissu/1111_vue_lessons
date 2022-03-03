# 型別斷言


```ts
let foo: string | number;
let bar = <string>foo;
```


```ts
let foo: string | number;
let bar = foo as number;
```

`Q 是否允許`

```ts
let foo: string | number;
let bar = <boolean>foo;
```


## Assertion Functions

after Typescript 3.7

```ts
declare function assert(value: unknown): asserts value;

assert(a === 42);

function multiply(x: unknown, y: unknown) {
  assert(typeof x === "number");
  assert(typeof y === "number");

  return x * y;
}
```