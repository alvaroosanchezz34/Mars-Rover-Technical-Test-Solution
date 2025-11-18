const marsRoverProgram = require("../src/app");
const assert = require("assert");

describe("Mars Rover", () => {

    it("should produce correct output for the example input", () => {
        const input = `
        5 5
        1 2 N
        LMLMLMLMM
        3 3 E
        MMRMMRMRRM
        `;

        const expected = "1 3 N\n5 1 E";

        assert.strictEqual(marsRoverProgram(input), expected);
    });

});
