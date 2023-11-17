app.backgroundManager = (function() {
    var layouts = {
            front: [],
            back: []
        },
        specials = [
            {
                type: 'apple',
                x: 20,
                y: 40,
                color: '#e5e6d4',
                rotation: -.001,
                angle: 0
            },
            {
                type: 'pear',
                x: 100,
                y: 680,
                color: '#e5e6d4',
                rotation: .003,
                angle: 0
            },
            {
                type: 'strawberry',
                x: 200,
                y: 450,
                color: '#e5e6d4',
                rotation: .0005,
                angle: 1
            },
            {
                type: 'melon',
                x: 500,
                y: 100,
                color: '#e5e6d4',
                rotation: -.002,
                angle: 0
            },
            {
                type: 'pineapple',
                x: 700,
                y: 700,
                color: '#e5e6d4',
                rotation: .0015,
                angle: 0
            },
            {
                type: 'apple',
                x: 750,
                y: 250,
                color: '#e5e6d4',
                rotation: -.004,
                angle: 1
            },
            {
                type: 'strawberry',
                x: 1700,
                y: 300,
                color: '#e5e6d4',
                rotation: .004,
                angle: 1
            },
            {
                type: 'melon',
                x: 1100,
                y: 500,
                color: '#e5e6d4',
                rotation: .001,
                angle: 1
            },
            {
                type: 'pineapple',
                x: 1300,
                y: 100,
                color: '#e5e6d4',
                rotation: -.001,
                angle: 1
            },
            {
                type: 'apple',
                x: 1800,
                y: 750,
                color: '#e5e6d4',
                rotation: -.002,
                angle: 1
            },
            {
                type: 'pear',
                x: 1350,
                y: 630,
                color: '#e5e6d4',
                rotation: -.0015,
                angle: 1
            }
        ],
        top = [
            [0, 150],
            [100, 130],
            [180, 170],
            [330, 160],
            [500, 180],
            [730, 120],
            [850, 150],
            [1010, 180],
            [1270, 140],
            [1480, 170],
            [1730, 130],
            [1970, 140],
            [2200, 170]
        ],
        _update = function() {

        },
        _drawFront = function() {
            _drawTop();
            _drawBottom();
        },
        _drawBack = function() {
            _specialsBackgrounds();
        },
        _generateLayouts = function() {
            var i, j, layout, x, y, stepX, info;

            //Front
            for (i = 0; i < app.backgroundLayouts.front.length; i++) {
                info = app.backgroundLayouts.front[i];
                layout = {
                    color: info.color,
                    dragging: info.dragging,
                    data: []
                };
                stepX = (info.width + info.hOut * 2) / info.pointsCount;

                x = -info.hOut;
                y = -info.vOut;
                layout.data.push([x, y]);
                layout.data.push([x, info.height + (info.shift - parseInt(Math.random() * (info.shift * 2)))]);
                for (j = 0; j < info.pointsCount; j++) {
                    x = x + stepX + (info.shift - parseInt(Math.random() * (info.shift * 2)));
                    y = info.height + (info.shift - parseInt(Math.random() * (info.shift * 2)));
                    layout.data.push([x, y]);
                }
                layout.data.push([x, -info.vOut]);
                layout.data.push([-info.hOut, -info.vOut]);
                layouts.front.push(layout);
            }
        },
        _drawTop = function() {
            var i, x = app.mouseShift.h * 70 - 50, y = app.mouseShift.v * 30 - 120;
            app.context.beginPath();
            app.context.moveTo(x, y);
            for (i = 0; i < top.length; i++) {
                app.context.lineTo(top[i][0] + x, top[i][1] + y);
            }
            app.context.lineTo(top[top.length - 1][0] + x, y);
            app.context.closePath();

            app.context.fillStyle = '#000000';
            app.context.fill();

            app.context.strokeStyle = '#000000';
            app.context.lineWidth = 15;
            app.context.lineJoin = 'miter';
            app.context.stroke();
        },

        _drawBottom = function() {
            var i, x = app.mouseShift.h * 70 - 50, y = app.mouseShift.v * 30 + 20;
            app.context.beginPath();
            app.context.moveTo(x, app.settings.size.y + y);
            for (i = 0; i < top.length; i++) {
                app.context.lineTo(top[i][0] + x, app.settings.size.y - top[i][1] + y);
            }
            app.context.lineTo(top[top.length - 1][0] + x, app.settings.size.y + y);
            app.context.closePath();

            app.context.fillStyle = '#000000';
            app.context.fill();

            app.context.strokeStyle = '#000000';
            app.context.lineWidth = 15;
            app.context.lineJoin = 'miter';
            app.context.stroke();
        },

        _specialsBackgrounds = function() {
            var i;

            for (i = 0; i < specials.length; i++) {
                specials[i].angle += specials[i].rotation;
                app.context.save();
                app.context.translate(specials[i].x, specials[i].y);
                app.context.rotate(specials[i].angle);
                app.context.scale(2.5, 2.5);
                _drawFruit(specials[i].type, specials[i].color);
                app.context.restore();
            }
        },
        _drawFruit = function(type, color) {
            var i, j,
                fruitData = app.fruits[type];

            for (i = 0; i < fruitData.length; i++) {
                app.context.beginPath();
                app.context.moveTo(fruitData[i].data[0][0] - 50, fruitData[i].data[0][1] - 50);
                for (j = 1; j < fruitData[i].data.length; j++) {
                    app.context.lineTo(fruitData[i].data[j][0] - 50, fruitData[i].data[j][1] - 50);
                }
                app.context.fillStyle = fruitData[i].color == 'white' ? '#f5f6d4' : color;
                app.context.fill();
            }
        };
    return {
        update: _update,
        drawFront: _drawFront,
        drawBack: _drawBack,
        generateLayouts: _generateLayouts
    };
})();