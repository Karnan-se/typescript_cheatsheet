"use strict";
var direction;
(function (direction) {
    direction[direction["north"] = 0] = "north";
    direction[direction["south"] = 1] = "south";
    direction[direction["east"] = 2] = "east";
    direction[direction["west"] = 3] = "west";
})(direction || (direction = {}));
