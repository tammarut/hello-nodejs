const _sum = require("../../app/service/sum");

describe("sum function", () => {
  test("adds 1+2=3", () => {
    // Given
    const a = 1;
    const b = 2;

    // When
    const result = _sum.add(a, b);

    // Then
    expect(_sum.add(1, 2)).toBe(3);
  });
});
