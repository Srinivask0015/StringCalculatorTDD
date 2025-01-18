import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });
  it("should return the number itself for a single number", () => {
    expect(calculator.add("1")).toBe(1);
  });
  it("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });
  it("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });
  it("should throw an error for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).toThrow(
      "Negative numbers not allowed: -2"
    );
  });
});
