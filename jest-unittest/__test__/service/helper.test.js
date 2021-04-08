const helper = require("../../app/service/helper");

describe("greet domain", () => {
  it("should return greet message with full name", () => {
    // Given
    helper.getFullname = jest.fn().mockReturnValue("mock full name");

    // When
    const result = helper.greet("John", "Bird");

    // Then
    expect(result).toBe("✋Hey, mock full name");
  });
});
