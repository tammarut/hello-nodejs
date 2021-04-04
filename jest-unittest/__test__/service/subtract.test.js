const subtract = require("../../app/service/subtract");

describe("subtract", () => {
  test("5 minus 1 equal 4", () => {
    // Given
    const left = 5;
    const right = 1;
    // When
    const result = subtract(left, right);

    // Then
    expect(result).toBe(4);
  });
});
