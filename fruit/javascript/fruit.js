function Fruit() {
    this.type = 'apple';
    this.side = 0;
    this.isTouched = false;
    this.isConnected = false;
    this.isDead = false;
    this.isFull = false;
    this.moveIndex = 0;
    this.directTo = {
        active: false,
        x: 0,
        y: 0,
        fruit: false
    };
    this.rotation = 0;

    this.size = {
        x: 50,
        y: 100,
        bound: 75
    };
    this.origPosition = {
        x: 0,
        y: 0
    };
    this.position = {
        x: 0,
        y: 0
    };
    this.angle = 0;
    this.direction = {
        x: 0,
        y: 0
    };
}

Fruit.prototype = {
    update: function() {
        if (this.isFull) {
            this.down();
        } else if (this.isConnected) {
            this.moveTo();
        } else {
            //Update rotation block
            this.angle += this.rotation;

            if (!this.isTouched) {
                //Update position block
                this.direction.y -= app.gravity;
                this.origPosition.x += this.direction.x;
                this.origPosition.y += this.direction.y;
                if (this.origPosition.y <= app.settings.bottomLine) {
                    this.isDead = true;
                }
                this.preparePosition();
            }
        }
    },
    preparePosition: function() {
        this.position.x = this.origPosition.x;
        this.position.y = app.settings.size.y - this.origPosition.y;
    },
    moveTo: function() {
        if (this.directTo.active) {
            this.moveIndex++;
            if (this.moveIndex >= 10) {
                this.isDead = true;
                app.fruitManager.collectFruit();
            } else {
                this.origPosition.x += this.direction.x;
                this.origPosition.y += this.direction.y;
                this.preparePosition();
            }
        }
    },
    down: function() {
        if (this.directTo.active) {
            this.moveIndex++;
            if (this.moveIndex >= 100) {
                this.isDead = true;
            } else {
                this.origPosition.x += this.direction.x;
                this.origPosition.y += this.direction.y;
                this.preparePosition();
            }
        }
    }
};