const manualForEach = require("../../app/service/manualForEach");

describe("manualForEach", () => {
  test("properly manualForEach", () => {
    // Given
    const items = [0, 1];
    const mockCallback = jest.fn((item) => item + 10);
    // When
    manualForEach(items, mockCallback);

    // Then
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(10);
  });
});
