


var a = 1;
var b = 1;

// Addition
// a = a + b
a += b;
// Subtraction
// a = a - b
a -= b;
// Multiplication
// a = a * b
a *= b;
// Division
// a = a / b
a /= b;
// Exponentiation
// a = a ** b
a **= b;
// Left Bit Shift
// a = a << b
a <<= b;

a &&= b;
a ||= b;
a ??= b;



// =============

declare function assert(value: unknown): asserts value;

assert(a === 42);

function multiply(x: unknown, y: unknown) {
  assert(typeof x === "number");
  assert(typeof y === "number");

  return x * y;
}
