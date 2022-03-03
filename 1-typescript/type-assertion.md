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