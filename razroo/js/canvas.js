document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
  /*  var grayscale = Filters.filterImage(Filter.grayscale, image);
// Note that ImageData values are clamped between 0 and 255, so we need
// to use a Float32Array for the gradient values because they
// range between -255 and 255.
    var vertical = Filters.convoluteFloat32(grayscale,
        [ -1, 0, 1,
            -2, 0, 2,
            -1, 0, 1 ]);
    var horizontal = Filters.convoluteFloat32(grayscale,
        [ -1, -2, -1,
            0,  0,  0,
            1,  2,  1 ]);
    var finalImage = Filters.createImageData(vertical.width, vertical.height);
    for (var i=0; i<finalImage.data.length; i+=4) {
        // make the vertical gradient red
        var v = Math.abs(vertical.data[i]);
        finalImage.data[i] = v;
        // make the horizontal gradient green
        var h = Math.abs(horizontal.data[i]);
        finalImage.data[i+1] = h;
        // and mix in some blue for aesthetics
        finalImage.data[i+2] = (v+h)/4;
        finalImage.data[i+3] = 255; // opaque alpha
    }*/

    var c = document.getElementById('canvas1');
    var ctx = c.getContext('2d');

    var pattern = document.createElement('canvas');
    var pctx = pattern.getContext('2d');
    pattern.width = 2;
    pattern.height = 10;

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        c.width = window.innerWidth;
        c.height = window.innerHeight;

        drawStuff();
    }

    resizeCanvas();

    function drawStuff(){
        //set up new canvas for pattern

        //set up context for pattern canvas

        // for building 1
        function newPat(){
            pctx.clearRect(0,0, pattern.width, pattern.height);
            pctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
            pctx.fillRect(0,0,12,14);
            pctx.lineWidth = 1;
            pctx.strokeStyle = 'rgb(255,255,255)';
            pctx.strokeRect(0,0,22,22);
            return(ctx.createPattern(pattern,'repeat'));
        }


        //building 1
        ctx.fillStyle = newPat();
        ctx.fillRect(0, 260 , 100,240);
        ctx.globalCompositeOperation='source-over';
        ctx.fillStyle = 'blue';
        ctx.fillRect(10,470,80,30);

        //building 2
        ctx.fillStyle = newPat();
        ctx.fillRect(100, 210, 100, 290);
        ctx.fillRect(113, 500-340, 74, 50);
        ctx.fillRect(130, 100, 40, 60);
        ctx.fillRect(140, 40, 20, 60);

        //building 3
        ctx.fillStyle = newPat();
        ctx.fillRect(200, 260, 100, 240);
        ctx.moveTo(250,180);
        ctx.lineTo(200,260);
        ctx.lineTo(300,260);
        ctx.closePath();
        ctx.fill();

        //building 4
        ctx.fillStyle = newPat();
        ctx.fillRect(340, 300, 240, 200);

        //building 5
        ctx.fillStyle = newPat();
        ctx.fillRect(540, 120, 100, 380);
        ctx.moveTo(540,120);
        ctx.lineTo(540,20);
        ctx.lineTo(640, 120);
        ctx.closePath();
        ctx.fill();

        //building 6
        ctx.fillStyle = newPat();
        ctx.fillRect(660,220,100,280);
        ctx.moveTo(660,220);
        ctx.lineTo(660,120);
        ctx.lineTo(760, 220);
        ctx.closePath();
        ctx.fill();

        // building 7
        ctx.fillStyle = newPat();
        ctx.fillRect(760, 400, 200, 100);
        ctx.fillRect(810, 100, 100, 300);
        ctx.fillRect(840,70,10,30);
        ctx.fillRect(870,70,10,30);
        //left triangle
        ctx.moveTo(760,400);
        ctx.lineTo(810,350);
        ctx.lineTo(810,400);
        ctx.closePath();
        ctx.fill();
        //right triangle
        ctx.moveTo(910,400);
        ctx.lineTo(960,400);
        ctx.lineTo(910,350);
        ctx.closePath();
        ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        ctx.fill();

        //building 8
        ctx.fillStyle = newPat();
        ctx.fillRect(980,480,100,20);
        ctx.fillRect(970,460,120,20);
        ctx.fillRect(980,440,100,20);
        ctx.fillRect(970,420,120,20);
        ctx.fillRect(980,400,100,20);
        ctx.fillRect(970,380,120,20);
        ctx.fillRect(980,360,100,20);
        ctx.fillRect(970,340,120,20);
        ctx.fillRect(980,320,100,20);
        ctx.fillRect(970,300,120,20);
        ctx.fillRect(980,280,100,20);
        ctx.fillRect(970,260,120,20);
        ctx.fillRect(980,240,100,20);
        ctx.fillRect(970,220,120,20);
        ctx.fillRect(1000,215,60,5);
        ctx.fillRect(1003,210,54,5);

        //building 9
        ctx.fillStyle = newPat();
        ctx.fillRect(1100,100,100,400);

        //building 10
        //  ctx.fillStyle = newPat();
        ctx.fillRect(1200,300,100,200);

        //layer 2

        //building 11
        ctx.fillStyle = newPat();
        ctx.fillRect(275,100,100,400);

        //building 12
        ctx.fillStyle = newPat();
        ctx.fillRect(600,300,100,200);

        //building 13
        ctx.fillStyle = newPat();
        ctx.fillRect(880,250,100,250);

        // building 14
        //ctx.fillStyle = getRandomColor();
        ctx.fillRect(1000,400,250,100);
        ctx.fillRect(1025,350,200,50);
    }

}
