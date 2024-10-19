const StringCalculator = require('./string_calculator');
const calculator = new StringCalculator();

// Test Case 1 -> If string is empty
test("Test Case 1 -> If string is empty", () => {
    expect(calculator.add("")).toBe(0)
});

// Test Case 2 -> If string contains only one number
test("Test Case 2 -> If string contains only one number", () => {
    expect(calculator.add("1")).toBe(1)
});

// Test Case 3 -> If string contains comma seperated values
test("Test Case 3 -> If string contains comma seperated values", () => {
    expect(calculator.add("1,2")).toBe(3)
});

// Test Case 4 -> If string contains more than one line
test("Test Case 4 -> If string contains more than one line", () => {
    expect(calculator.add("1,2,3\n4")).toBe(10)
});