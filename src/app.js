const Plateau = require("./plateau");
const Rover = require("./rover");

function marsRoverProgram(input) {
    const lines = input.trim().split("\n");

    // Plateau size
    const [maxX, maxY] = lines[0].split(" ").map(Number);
    const plateau = new Plateau(maxX, maxY);

    let output = [];

    for (let i = 1; i < lines.length; i += 2) {
        const [x, y, dir] = lines[i].split(" ");
        const rover = new Rover(parseInt(x), parseInt(y), dir, plateau);

        const commands = lines[i + 1].trim();
        rover.execute(commands);

        output.push(rover.getPosition());
    }

    return output.join("\n");
}

module.exports = marsRoverProgram;

// Si quieres ejecutarlo desde consola:
if (require.main === module) {
    const fs = require("fs");

    const exampleInput = `
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
`;

    console.log(marsRoverProgram(exampleInput));
}
