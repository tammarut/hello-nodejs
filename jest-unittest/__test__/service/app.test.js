const app = "../../app/service/app";
const math = "../../app/service/math";

test("calls math.add", () => {
  // Given
  math.add = jest.fn();
  // When
  app.makeAdd(1, 2);
  // Then
  expect(math.add).toHaveBeenCalled();
});
