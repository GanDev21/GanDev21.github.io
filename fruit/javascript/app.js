(function() {
    var canvas = document.getElementById('presenter'),
        startTime = (new Date()).getTime(),
        lastTime, currentTime,

        _initialize = function() {
            var i;
            _updateCanvasSizes();

            app.isTouch = 'ontouchstart' in document;

            app.context = canvas.getContext('2d');
            app.menuManager.show();

            _attachEvents();

            window.requestAnimationFrame(_lifeCycle);
        },
        _updateMouseShift = function () {
            app.mouseShift.h = 0.5 - app.mouse.x / app.settings.size.x;
            app.mouseShift.v = 0.5 - app.mouse.y / app.settings.size.y;
        },
        _updateCanvasSizes = function() {
            app.settings.size.x = window.innerWidth;
            app.settings.size.y = window.innerHeight;
            canvas.setAttribute('width', app.settings.size.x + 'px');
            canvas.setAttribute('height', app.settings.size.y + 'px');
        },
        _updateScenes = function(time) {
            if (!app.isTouch) {
                _updateMouseShift();
            }

            if (!app.pause) {
                app.fruitManager.update(time);
                app.lineManager.update(time);
                app.backgroundManager.update(time);
                app.progressManager.update(time);
            } else {
                app.backgroundManager.update(time);
            }
        },
        _drawScenes = function() {
            app.presenter.update();
        },
        _lifeCycle = function _lifeCycle(){
            _updateScenes((new Date()).getTime() - startTime);
            _drawScenes();
            window.requestAnimationFrame(_lifeCycle);
        },
        _mouseDown = function() {
            app.mouse.isClicked = true;
            app.fruitManager.checkTouches();
            if (app.menu) {
                app.menuManager.checkClick();
            }
        },
        _mouseMove = function(event) {
            app.mouse.x = event.pageX;
            app.mouse.y = event.pageY;
            if (app.menu) {
                app.menuManager.checkMove();
            }
        },
        _mouseUp = function() {
            app.mouse.isClicked = false;
            app.fruitManager.unTouch();
        },
        _touchStart = function(event) {
            event.preventDefault();
            app.mouse.x = event.touches[0].pageX;
            app.mouse.y = event.touches[0].pageY;
            app.mouse.isClicked = true;
            app.fruitManager.checkTouches();
            if (app.menu) {
                app.menuManager.checkClick(true);
            }
        },
        _touchMove = function(event) {
            app.mouse.x = event.touches[0].pageX;
            app.mouse.y = event.touches[0].pageY;
            if (app.menu) {
                app.menuManager.checkMove();
            }
        },
        _touchEnd = function() {
            app.mouse.isClicked = false;
            app.fruitManager.unTouch();
        },
        _reSize = function() {
            _updateCanvasSizes();
        },
        _attachEvents = function() {
            if (app.isTouch) {
                document.addEventListener('touchstart', _touchStart);
                document.addEventListener('touchmove', _touchMove);
                document.addEventListener('touchend', _touchEnd);
            } else {
                document.addEventListener('mousedown', _mouseDown);
                document.addEventListener('mousemove', _mouseMove);
                document.addEventListener('mouseup', _mouseUp);
            }

            window.addEventListener('resize', _reSize);
        };

    _initialize();
})();