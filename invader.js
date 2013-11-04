function Invader (width, height, index)
{
    /**
     * Private
     */
    var pixels = new Array();

    __construct = function ()
    {
        for (var i = 0; i < width * height; i++)
        {
            var mask = 1 << i;
            pixels.push(index & mask);
        }
    }()


    /**
     * Public
     */
    this.getPixelAt = function(x, y)
    {
        if (x >= width)
        {
            x = width * 2 - 2 - x;
        }

        return pixels[y*width + x];
    }

    this.index = index;
}