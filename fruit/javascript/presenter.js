window.app.presenter = (function() {
    var _clean = function() {
            app.context.fillStyle = '#f5f6d4';
            app.context.fillRect( 0, 0, app.settings.size.x, app.settings.size.y );
        },
        _show = function() {
            app.backgroundManager.drawBack();
            _showLines();
            _showFruits();
            app.backgroundManager.drawFront();
            app.progressManager.draw();

            if (app.menu) {
                app.menuManager.draw();
            }
        },

        _showLines = function() {
            var i, lines = app.lineManager.getLines();
            if (lines.length >= 2) {
                app.context.save();
                app.context.beginPath();
                app.context.moveTo(lines[0].x, lines[0].y);
                for (i = 1; i < lines.length; i = i + 2) {
                    app.context.lineTo(lines[i].x, lines[i].y);
                }
                app.context.strokeStyle = '#330000';
                app.context.lineWidth = 5;
                app.context.lineJoin = 'miter';
                app.context.stroke();
                app.context.restore();
            }
        },
        _showFruits = function() {
            var i, fruits = app.fruitManager.getFruits();
            for (i = 0; i < fruits.length; i++) {
                app.context.save();
                app.context.translate(parseInt(fruits[i].position.x), parseInt(fruits[i].position.y));
                app.context.rotate(fruits[i].angle);
                app.context.scale(1.5, 1.5);
                _drawFruit(fruits[i].type, fruits[i].side, fruits[i].size, fruits[i].isFull);
                app.context.restore();
            }
        },
        _drawFruit = function(type, side, size, isFull) {
            var i, j, shiftX, shiftY,
                fruitData = app.fruits[type];

            shiftY = (size.y / 2);
            if (side == 0) {
                shiftX = (size.x / 2);
            } else {
                shiftX = size.x + (size.x / 2);
            }

            app.context.save();
            app.context.beginPath();
            app.context.rect(- (size.x / 2), - (size.y / 2), !isFull ?size.x : size.x * 2, size.y);
            app.context.clip();

            for (i = 0; i < fruitData.length; i++) {
                app.context.beginPath();
                app.context.moveTo(fruitData[i].data[0][0] - shiftX, fruitData[i].data[0][1] - shiftY);
                for (j = 1; j < fruitData[i].data.length; j++) {
                    app.context.lineTo(fruitData[i].data[j][0] - shiftX, fruitData[i].data[j][1] - shiftY);
                }
                app.context.fillStyle = fruitData[i].color;
                if (isFull) {
                    app.context.shadowColor = '#000000';
                    app.context.shadowBlur = 5;
                }
                app.context.fill();
            }
            app.context.restore();
        },
        _update = function() {
            _clean();
            _show();
        };
    return {
        update: _update
    };
})();