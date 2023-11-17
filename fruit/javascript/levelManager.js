app.levelManager = (function() {
    var currentLevelInfo,
        _nextLevel = function() {
            app.pause = false;
            app.level++;
            app.levelIsCompleted = false;
            app.progressManager.reset();
            _updateCurrentLevelInfo();
            app.fruitManager.changeLevel();
        },
        _updateCurrentLevelInfo = function() {
            var diffFruitCount = 2 + parseInt((app.level - 10) / 4),
                points = 13 + parseInt((app.level - 10) / 10),
                fruits;

            points = (points < 7) ? 7 : points;

            if (diffFruitCount >= app.fruitTypes.length) {
                fruits = app.fruitTypes;
            } else {
                fruits = _getRandomFruits(diffFruitCount);
            }

            if (app.level < app.levels.length) {
                currentLevelInfo = app.levels[app.level];
            } else {
                currentLevelInfo = {
                    maxFruits: 5 + parseInt((app.level - 10) / 3),
                    fruits: fruits,
                    sub: 0.1 + ((app.level - 10) / 100),
                    points: points
                };
            }
        },
        _getRandomFruits = function(count) {
            var fruits = [], addedCount = 0, randomFruit;
            while (addedCount < count) {
                randomFruit = app.fruitTypes[parseInt(Math.random() * app.fruitTypes.length)];
                if (fruits.indexOf(randomFruit) == -1) {
                    fruits.push(randomFruit);
                    addedCount++;
                }
            }
            return fruits;
        },
        _getCurrentLevelInfo = function() {
            return currentLevelInfo;
        },
        _restart = function() {
            app.level = -1;
        };
    return {
        nextLevel: _nextLevel,
        getCurrentLevelInfo: _getCurrentLevelInfo,
        restart: _restart
    }
})();