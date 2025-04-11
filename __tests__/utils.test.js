import { isDataSomething } from "./../utils/index";

describe("Util Function: isDataSomething", () => {
  it("should return false for null/undefined", () => {
    expect(isDataSomething(null)).toBe(false);
    expect(isDataSomething(undefined)).toBe(false);
  });

  it("should handle empty values", () => {
    expect(isDataSomething("")).toBe(false);
    expect(isDataSomething([])).toBe(false);
    expect(isDataSomething({})).toBe(false);
  });

  it("should handle whitespace strings", () => {
    expect(isDataSomething("   ")).toBe(false);
  });

  it("should handle NaN and invalid dates", () => {
    expect(isDataSomething(NaN)).toBe(false);
    expect(isDataSomething(new Date("invalid"))).toBe(false);
  });

  it("should return true for valid values", () => {
    expect(isDataSomething("text")).toBe(true);
    expect(isDataSomething(0)).toBe(true);
    expect(isDataSomething([1])).toBe(true);
    expect(isDataSomething({ key: "value" })).toBe(true);
    expect(isDataSomething(new Date())).toBe(true);
  });
});
