app.progressManager = (function() {
    var width = 1800,
        height = 45,
        progressShadow = 0,
        progressBar = [
            [0, 0],
            [70, 40],
            [700, 29],
            [1800, 42],
            [1780, 5],
            [1080, 11],
            [0, 0]
        ],
        _addFruitPoints = function(points) {
            app.progress += points;
            if (app.progress >= 100) {
                _nextLevel();
            }
            progressShadow = 30;
        },
        _reset = function() {
            app.progress = 50;
        },
        _update = function(time) {
            if (!app.levelIsCompleted) {
                app.progress -= app.levelManager.getCurrentLevelInfo().sub;
                if (app.progress <= 0) {
                    _gameOver();
                }
            }
        },
        _draw = function() {
            var i,
                x = app.mouseShift.h * 70,
                y = app.mouseShift.v * 30,
                scaleX = (app.settings.size.x / 1920);

            app.context.save();
            app.context.translate(((app.settings.size.x - (scaleX * 1800)) / 2) + x, app.settings.size.y - 60 + y);
            app.context.scale(scaleX, 1);
            app.context.beginPath();
            app.context.moveTo(progressBar[0][0], progressBar[0][1]);
            for (i = 1; i < progressBar.length; i++) {
                app.context.lineTo(progressBar[i][0], progressBar[i][1]);
            }
            if (progressShadow != 0) {
                progressShadow -=.5;
                if (progressShadow <= 0) {
                    progressShadow = 0;
                }
                app.context.shadowColor = '#eeeeee';
                app.context.shadowBlur = progressShadow;
            }
            app.context.fillStyle = '#ffffff';
            app.context.fill();
            app.context.restore();

            app.context.save();
            app.context.translate(((app.settings.size.x - (scaleX * 1800)) / 2) + x, app.settings.size.y - 60 + y);
            app.context.scale(scaleX, 1);
            app.context.beginPath();
            app.context.rect(0, 0, (app.progress / 100) * width, height);
            app.context.clip();
            app.context.beginPath();
            app.context.moveTo(progressBar[0][0], progressBar[0][1]);
            for (i = 1; i < progressBar.length; i++) {
                app.context.lineTo(progressBar[i][0], progressBar[i][1]);
            }
            app.context.fillStyle = 'darkorange';
            app.context.fill();
            app.context.restore();

            if (app.level != -1) {
                app.context.font = '30pt Arial';
                app.context.textAlign = 'center';
                app.context.fillStyle = 'white';
                app.context.fillText('Level ' + (app.level + 1), app.settings.size.x / 2 - 50 + x, app.settings.size.y - 80 + y);
            }
        },
        _nextLevel = function() {
            app.levelIsCompleted = true;
        },
        _gameOver = function() {
            app.pause = true;
            app.isGameOver = true;
            app.levelManager.restart();
            app.menuManager.show();
        };
    return {
        addFruitPoints: _addFruitPoints,
        reset: _reset,
        update: _update,
        draw: _draw
    };
})();