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
});
