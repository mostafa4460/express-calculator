const { mean, median, mode } = require('./operations');

const nums = [1, 2, 3, 3, 2, 1, 1, 1]
// [1, 1, 1, 1, 2, 2, 3, 3]

test("mean", () => {
    expect(mean(nums)).toBe(1.75);
})

test("median", () => {
    expect(median(nums)).toBe(1.5);
})

test("mode", () => {
    expect(mode(nums)).toBe(1);
})