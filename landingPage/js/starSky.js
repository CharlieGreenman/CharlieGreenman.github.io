document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

var STAR_COLOURS = ['#ffffff', '#ffe9c4', '#d4fbff'], // because not all stars are white
    // height of the canvas
    HEIGHT = 400,
    // width of the canvas
    WIDTH = 800;

/**
 * Generate a random integer between min and max
 */
function random (min, max) {
    return Math.round((Math.random() * max - min) + min);
}

/**
 * Generate a new star field with starNumber stars and draw
 * it onto the provided c ctx
 */
function starField (ctx, starNumber) {
    var x, // x position of the star
        y, // y position of the star
        brightness, // brightness of the star
        radius, // radius of the star
        grd; //gradient illusion for the night sky

    // draw the blank night sky
    grd = ctx.createLinearGradient(WIDTH / 2, 0, WIDTH / 2, HEIGHT);
    // Add colors
    grd.addColorStop(0.000, 'rgb(0,10,21)');
    grd.addColorStop(1.000, 'rgb(0,0,0)');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // save the previous canvas context state
    ctx.save();

    for (var i = 0; i < starNumber; i++) {
        x = Math.random() * WIDTH; // random x position
        y = Math.random() * HEIGHT; // random y position
        radius = Math.random() * 1.1; // random radius
        brightness = random(80, 100) / 100;

        // start drawing the star
        ctx.beginPath();
        // set the brightness of the star
        ctx.globalAlpha = brightness;
        // choose a random star colour
        ctx.fillStyle = STAR_COLOURS[random(0, STAR_COLOURS.length)];
        // draw the star (an arc of radius 2 * pi)
        ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        // fill the star and stop drawing it
        ctx.fill();
        ctx.closePath();
    }

    // restore the previous ctx state
    ctx.restore();
}

/**
 * Kick everything off
 */
function init () {
    // find the c and create its ctx
    var c = document.getElementsByTagName('canvas')[0],
        ctx = c.getContext('2d');

    // set up the width and height
    c.width = WIDTH;
    c.height = HEIGHT;

    // create a star field
    starField(ctx, 300);

}

// GO, GO, GO!
init();
}