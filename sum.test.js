import {sum} from "./sum.js";

describe("test for sum function", () => {
    test("adds 2 + 2 to equal 4", () => {
        expect(sum(2, 2)).toBe(4);
    });    

    test("adds 11 + 23 to equal 34", () => {
        expect(sum(11, 23)).toBe(34);
    });
});