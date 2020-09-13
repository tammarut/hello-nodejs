const _sum = require("../../app/service/sum");

describe("test sum function", () => {
        test("adds 1+2=3", () => {
                expect(_sum.add(1, 2)).toBe(3);
        });
});
