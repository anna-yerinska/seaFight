function View () {
	this.field = new Field();

	this.drawCells = function () {
		var field = document.querySelector('field');
		field.innerHTML = cell;
	
		field.addEventListener('click', function (e) {
			this.getXY(e.target);
			return e.target;
		});	
	};

	this.showHits = function () {
		if(ship.isHit()) {

		}
	};

	this.showMiss = function () {
		if(!ship.isHit()) {
			alert('Мимо!');
		}
	};

	this.getXY = function () {

	};
}

