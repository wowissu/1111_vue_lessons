# Optional Chaining

[Example](example/Optional_Chaining.ts)

```ts
let x = foo?.bar.baz();

// equals

let x = foo === null || foo === undefined ? undefined : foo.bar.baz();
```


```ts
// Before
if (foo && foo.bar && foo.bar.baz) {
  // ...
}
// After-ish
if (foo?.bar?.baz) {
  // ...
}
```


## Nullish Coalescing

```ts
let x = foo ?? bar();
```

## Assertion Functions

```ts
declare function assert(value: unknown): asserts value;

assert(a === 42);

function multiply(x: unknown, y: unknown) {
  assert(typeof x === "number");
  assert(typeof y === "number");

  return x * y;
}
```

## Short-Circuiting Assignment Operators

```ts
a = a && b;
a = a || b;
a = a ?? b;

// to

a &&= b;
a ||= b;
a ??= b;
```

