type TrimLeft<T extends string> =
    T extends ` ${infer Rest}` ? TrimLeft<Rest> : T;
// error: Type instantiation is excessively deep and possibly infinite.
type Test = TrimLeft<" oops">;


type GetChars<S> =
    S extends `${infer Char}${infer Rest}` ? Char | GetChars<Rest> : never;

type CharsTest = GetChars<'yoyo'>


class Foo {
  #name: string = '123'

  constructor(name: string) {
    this.#name = name;
  }
}