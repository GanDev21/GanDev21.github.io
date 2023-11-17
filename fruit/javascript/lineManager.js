app.lineManager = (function() {
    var lines = [],
        isStarted = false,
        _start = function(x, y) {
            isStarted = true;
            lines.push({
                x: x,
                y: y
            });
        },
        _update = function() {
            if (isStarted) {
                lines.push({
                    x: app.mouse.x,
                    y: app.mouse.y
                });
            }
        },
        _end = function() {
            isStarted = false;
            lines.length = 0;
        },
        _getLines = function() {
            return lines;
        };
    return {
        start: _start,
        update:_update,
        end: _end,
        getLines: _getLines
    }
})();