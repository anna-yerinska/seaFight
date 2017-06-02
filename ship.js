function Ship (num) {
	this.deckNumber = num;

	this.x;

	this.y;

	this.direction;

	this.isAlive = function () {
		if (this.deckNumber === 0) {
			return false;
		}
	};

	this.isHit(x, y) = function () {
		if (x === this.x && y === this.y) {
			return true;
		}
	};
}

var ship = new Ship(3);
	ships.push(ship);