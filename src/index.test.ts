import { sum } from "./index";

describe("Tests for index.ts", () => {
  it("sum is function", () => {
    expect(typeof sum).toBe("function");
  });

  it("sum of 1 and 2 tobe 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
