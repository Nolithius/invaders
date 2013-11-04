function InvaderGen (width, height, scale, spacing, columns)
{
    /**
     * Private
     */
    var _invaderCount = Math.pow(2, width * height);
    var _invaderWidth = (width * 2 - 1);
    var _invaderHeight = height;

    var _canvas;
    var _context;

    var _invaders = new Array();

    function getCanvasWidth ()
    {
        return columns * (_invaderWidth * scale + spacing) + spacing;
    }

    function getCanvasHeight ()
    {
        return Math.floor(_invaderCount / columns) * (_invaderHeight * scale + spacing) + spacing;
    }

    function initCanvas ()
    {
        _canvas = document.createElement('canvas');
        _canvas.width = getCanvasWidth();
        _canvas.height = getCanvasHeight();

        _context = _canvas.getContext('2d');
        _context.fillStyle = '#000000';
        _context.fillRect(0, 0, _canvas.width, _canvas.height);

        document.body.appendChild(_canvas);
    }

    function drawInvaders (colorizer)
    {
        for (var i = 0; i < _invaders.length; i++)
        {
            invader = _invaders[i];

            var invaderX = i % columns;
            var invaderY = Math.floor(i / columns);

            _context.fillStyle = colorizer(invaderX, invaderY);

            for (var ix = 0; ix < _invaderWidth; ix++)
            {
                for (var iy = 0; iy < _invaderHeight; iy++)
                {
                    if (invader.getPixelAt(ix, iy))
                    {
                        _context.fillRect(
                            invaderX*_invaderWidth*scale + invaderX*spacing + ix*scale + spacing,
                            invaderY*_invaderHeight*scale + invaderY*spacing + iy*scale + spacing,
                        scale, scale);
                    }
                }
            }
        }
    }


    /**
     * Public
     */
    this.generate = function ()
    {
        for (var i = 0; i < _invaderCount; i++)
        {
            _invaders.push(new Invader(width, height, i));
        }
    }


    this.draw = function (colorizer)
    {
        initCanvas();
        drawInvaders(colorizer);
    }
}