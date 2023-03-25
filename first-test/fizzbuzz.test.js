import { describe, expect, it } from "vitest";
/*
Escribir una función que al pasarle un número:
    - Muestra "fizz" si es múltiplo de 3.
    - Muestra "buzz" si es múltiplo de 5.
    - Muestra "fizzbuzz" si es múltiplo de 3 y 5.
    - Muestra el número si no es múltiplo de ninguno de los anteriores.
*/
const fizzbuzz = (number) => {
  if (typeof number !== "number") {
    throw new Error("parameter provided must be a number");
  }
  if (Number.isNaN(number)) {
    throw new Error("parameter provided must be a number");
  }
  if (number % 15 === 0) return "fizzbuzz";
  if (number % 3 === 0) return "fizz";
  if (number % 5 === 0) return "buzz";
  return number;
};
describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  });
  it("should throw if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });
  it("should throw a specific error message if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow("parameter provided must be a number");
  });
  it("should throw a specific error message not number is provided", () => {
    expect(() => fizzbuzz(NaN)).toThrow("parameter provided must be a number");
  });
});

console.log(fizzbuzz(7));
