

let foo: [...string[], number];
foo = [123];
foo = ["hello", 123];
foo = ["hello!", "hello!", "hello!", 123];


let bar: [boolean, ...string[], boolean];
bar = [true, false];
bar = [true, "some text", false];
bar = [true, "some", "separated", "text", false];

// =============
// =============
// =============
// =============


// Tuple types with spread elements
type NumStr = [number, string];
type NumStrNumStr = [...NumStr, ...NumStr];
// Array spread expressions
const numStr = [123, "hello"] as const;
const numStrNumStr = [...numStr, ...numStr] as const;