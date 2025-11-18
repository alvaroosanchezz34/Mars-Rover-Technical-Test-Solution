class Plateau {
    constructor(maxX, maxY) {
        this.maxX = maxX;
        this.maxY = maxY;
    }

    isInside(x, y) {
        return x >= 0 && x <= this.maxX && y >= 0 && y <= this.maxY;
    }
}

module.exports = Plateau;
