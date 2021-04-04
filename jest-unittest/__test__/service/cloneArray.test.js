const cloneArray = require("../../app/service/cloneArray");

describe("cloneArray", () => {
  test("properly clone array", () => {
    // Given
    let mockCloneArray = cloneArray;
    mockCloneArray = jest.fn();
    mockCloneArray.mockReturnValue([3, 2, 1]);
    const array = [1, 2, 3];
    // When
    const result = mockCloneArray(array);
    // Then
    expect(result).toEqual([3, 2, 1]);
    expect(cloneArray).toHaveBeenCalled();
  });
});
