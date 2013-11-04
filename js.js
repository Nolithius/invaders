var width = 3;
var height = 5;
var scale = 1;
var spacing = 2;
var cols = 256;
var rows = 128;
var offset = 0;

var total = Math.pow(2, width*height);
var totalOnScreen = cols*rows;

// If we can't fit them all, randomize the offset
if (total > totalOnScreen)
{
    offset = Math.floor(Math.random()*(total-totalOnScreen));
}

var invaderGen = new InvaderGen(width, height, scale, spacing, cols, rows, offset);
invaderGen.generate();

// The draw method takes a colorizer with the drawn x/y indexes and the actual bit index i
invaderGen.draw(function (x, y, i)
{
    var r = y*(256/cols)*2 + 1;
    var g = Math.floor((x % rows)*(256/rows));
    var b = 255;

    var colorInt = r << 16 | g << 8 | b;
    var colorString = colorInt.toString(16);
    if (colorString.length < 6) colorString = '0' + colorString;

    return '#' + colorString;
});
