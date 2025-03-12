// Import the function you want to test
const sum = (a, b) => a + b; // Example function

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});
