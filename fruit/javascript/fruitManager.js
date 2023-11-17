app.fruitManager = (function() {
    var currentLevelInfo,
        fruits = [],
        sourceFruit,
        destinationFruit,
        _changeLevel = function() {
            currentLevelInfo = app.levelManager.getCurrentLevelInfo();
            fruits.length = 0;
        },
        _update = function() {
            var i,
                shouldBeRemoved = [];

            if (app.levelIsCompleted && !fruits.length) {
                app.pause = true;
                window.setTimeout(function() {
                    app.levelManager.nextLevel();
                }, app.timeoutBtwLevels * 1000);
            }

            for (i = 0; i < fruits.length; i++) {
                fruits[i].update();
                if (sourceFruit) {
                    _checkConnection(fruits[i]);
                }
                if (fruits[i].isDead) {
                    shouldBeRemoved.push(i);
                }
            }

            if (shouldBeRemoved.length) {
                _removeFruits(shouldBeRemoved);
            }

            if (!app.levelIsCompleted) {
                _checkFruitsCount();
            }
        },
        _checkFruitsCount = function() {
            if (fruits.length <= currentLevelInfo.maxFruits) {
                _addFruit();
            }
        },
        _addFruit = function() {
            var angle,
                fruit = new Fruit();

            fruit.type = currentLevelInfo.fruits[parseInt(Math.random() * currentLevelInfo.fruits.length)];
            fruit.rotation = (Math.random() / 20) - (1 / 40);
            fruit.side = parseInt(Math.random() * 2);

            fruit.origPosition.x = app.settings.hPadding + parseInt(Math.random() * (app.settings.size.x - (app.settings.hPadding * 2) + 1));
            fruit.origPosition.y = 0;
            fruit.preparePosition();

            angle = (Math.random() / 2) - (1/4) + (Math.PI / 2);
            fruit.direction.y = 8 + Math.random() * 6;
            fruit.direction.x = fruit.direction.y * Math.cos(angle);

            fruits.push(fruit);
        },
        _getFruits = function() {
            return fruits;
        },
        _checkTouches = function() {
            var i;
            if (!app.levelIsCompleted) {
                for (i = 0; i < fruits.length; i++) {
                    if (!fruits[i].isFull) {
                        if (Math.sqrt(Math.pow(fruits[i].position.x - app.mouse.x, 2) + Math.pow(fruits[i].position.y - app.mouse.y, 2)) < fruits[i].size.bound) {
                            fruits[i].isTouched = true;
                            sourceFruit = fruits[i];
                            app.lineManager.start();
                            return true;
                        }
                    }
                }
            }
        },
        _checkConnection = function(fruit) {
            if (fruit != sourceFruit && fruit.type == sourceFruit.type && !fruit.isFull) {
                if (Math.sqrt(Math.pow(fruit.position.x - app.mouse.x, 2) + Math.pow(fruit.position.y - app.mouse.y, 2)) < fruit.size.bound) {
                    _handleConnection(fruit);
                }
            }
        },
        _handleConnection = function(fruit) {

            destinationFruit = fruit;

            destinationFruit.isConnected = true;
            if (destinationFruit.side != sourceFruit.side) {
                destinationFruit.isDiffSide = true;
            }

            sourceFruit.isConnected = true;

            sourceFruit.directTo.active = true;
            sourceFruit.directTo.x = destinationFruit.position.x;
            sourceFruit.directTo.y = destinationFruit.position.y;

            sourceFruit.direction.x = (destinationFruit.origPosition.x - sourceFruit.origPosition.x) / 10;
            sourceFruit.direction.y = (destinationFruit.origPosition.y - sourceFruit.origPosition.y) / 10;

            _unTouch();

        },
        _unTouch = function() {
            if (sourceFruit) {
                sourceFruit.isTouched = false;
                sourceFruit = undefined;
                app.lineManager.end();
            }
        },
        _collectFruit = function() {
            destinationFruit.side = 0;
            destinationFruit.directTo.active = true;
            destinationFruit.directTo.x = destinationFruit.position.x;
            destinationFruit.directTo.y = 0;

            destinationFruit.direction.x = (destinationFruit.directTo.x - destinationFruit.origPosition.x) / 100;
            destinationFruit.direction.y = (destinationFruit.directTo.y - destinationFruit.origPosition.y) / 100;
            destinationFruit.isFull = true;

            app.progressManager.addFruitPoints(destinationFruit.isDiffSide ? 2 * currentLevelInfo.points : currentLevelInfo.points);
            destinationFruit = undefined;
        },
        _removeFruits = function(shouldBeRemoved) {
            var i;
            shouldBeRemoved.sort(function(a, b) {
                return b - a;
            });
            for (i = 0; i < shouldBeRemoved.length; i++) {
                fruits.splice(shouldBeRemoved[i], 1);
            }
            shouldBeRemoved.length = 0;
        };
    return {
        changeLevel: _changeLevel,
        update: _update,
        getFruits: _getFruits,
        checkTouches: _checkTouches,
        unTouch: _unTouch,
        collectFruit: _collectFruit
    };
})();