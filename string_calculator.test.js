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

// Test Case 5 -> If string contains delimiter other than comma(,)
test("Test Case 5 -> If string contains delimiter other than comma(,)", () => {
    expect(calculator.add("//;\n1;2;3")).toBe(6)
});

// Test Case 6 -> If string contains delimiter other than comma(,) and have more than one lines
test("Test Case 6 -> If string contains delimiter other than comma(,) and have more than one lines", () => {
    expect(calculator.add("//;\n1;2;3\n4;5\n6;7;8")).toBe(36)
});