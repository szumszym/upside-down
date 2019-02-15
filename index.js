'use strict';

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&.,[](){}?!\'"<>_"\\;`‿⁅∴:';
var flipped = 'ɐqɔpǝɟɓɥᴉſʞๅɯuodbɹsʇnʌʍxʎzⱯꓭꓛꓷƎꓞꓨHIſꓘꓶWNOꓒῸꓤSꓕꓵꓥMX⅄Z0ƖՇƐh૬9L86⅋˙\'][)(}{¿¡,„><‾„/؛,⁀⁆∵:';

var allChars = chars + flipped;
var allFlippedChars = flipped + chars;

var upsideDown = function (text) {
    return text.split('').map(function (letter) {
        return allFlippedChars[allChars.indexOf(letter)];
    }).reverse().join('');
};

exports['default'] = upsideDown;
module.exports = exports['default'];