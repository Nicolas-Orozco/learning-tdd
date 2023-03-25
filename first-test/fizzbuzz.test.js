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
};
describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  });
  it("should throw if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });
  it("should throw a speicific error message if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow("parameter provided must be a number");
  });
});
