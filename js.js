invaderGen = new InvaderGen(3, 5, 1, 2, 256);
invaderGen.generate();
invaderGen.draw(function (x, y)
{
    var r = y*2 + 1;
    var g = (x % 128)*2;
    var b = 255;

    var colorInt = r << 16 | g << 8 | b;
    var colorString = colorInt.toString(16);
    if (colorString.length < 6) colorString = '0' + colorString;

    return '#' + colorString;
});
