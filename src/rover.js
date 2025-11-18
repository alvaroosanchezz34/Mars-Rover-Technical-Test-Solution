class Rover {
    constructor(x, y, direction, plateau) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.plateau = plateau;

        this.left = { N: "W", W: "S", S: "E", E: "N" };
        this.right = { N: "E", E: "S", S: "W", W: "N" };
    }

    rotate(command) {
        if (command === "L") this.direction = this.left[this.direction];
        if (command === "R") this.direction = this.right[this.direction];
    }

    move() {
        let newX = this.x;
        let newY = this.y;

        switch (this.direction) {
            case "N": newY++; break;
            case "E": newX++; break;
            case "S": newY--; break;
            case "W": newX--; break;
        }

        if (this.plateau.isInside(newX, newY)) {
            this.x = newX;
            this.y = newY;
        }
    }

    execute(commands) {
        for (const c of commands) {
            if (c === "M") this.move();
            else this.rotate(c);
        }
    }

    getPosition() {
        return `${this.x} ${this.y} ${this.direction}`;
    }
}

module.exports = Rover;
