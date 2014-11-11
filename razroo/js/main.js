// JavaScript Document


$(document).ready(function (){

function time()
{
    var today = new Date();
    var h = today.getHours(); //Turn time into AM PM format.
    var m = today.getMinutes();
    var s = today.getSeconds();
    var month = today.getMonth() + 1; // january is 0 so + 1 to keep it up to date;
    var day = today.getDate();
    // var for specific day of the week
    var weekday = new Array(7);
    weekday[0] = 'Sun';
    weekday[1] = 'Mon';
    weekday[2] = 'Tue';
    weekday[3] = 'Wed';
    weekday[4] = 'Thu';
    weekday[5] = 'Fri';
    weekday[6] = 'Sat';

    var name = weekday[today.getDay()];

    if (h >= 12) {
      h = h - 12;
    }

    if (h === 0) {
      h = 12;
    }

// turn time into regular AM/PM format


// add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('#clock p:nth-child(1)').innerHTML = h + ':' + m + '<span>' + s + '</span>';
    document.querySelector('#clock p:nth-child(2)').innerHTML = '<span>' + 'month' + '</span>' + '<span>' + 'Date' + '</span>' + month + ' ' + '-' + ' ' + day;
    document.querySelector('#clock p:nth-child(3)').innerHTML = '<span>' + 'Day' + '</span>' + name;
    t = setTimeout(function(){
     time();},500);
}

// add 0
function checkTime(i)
{
    if (i<10)
    {
        i='0' + i;
    }
    return i;
}

time();
});
// end of clock

$(document).ready(function(){

$('button').click(function(){
	  $('.sound_bar.left').css({
	    'margin-left': '74px'
	  });
	  $('.button.develop').css({
         'margin-left': '-70px',
		 'opacity' : '0.7'
	  });
	  $('.button.design').css({
	    'margin-right': '-70px',
		'opacity' : '0.7'
	  });
      $('.sound_bar.design').fadeIn();
	  });
  
	
	
 /* flip tile function */
  $('.top_left_tile').click(function() {
    $('.flip_container:hover .flipper').css({
	  'transform': 'rotateY(180deg)',
		'-webkit-transform': 'rotateY(180deg)',
		'-ms-transform': 'rotateY(180deg)',
		'filter': 'FlipH',
        '-ms-filter': 'FlipH'
  });
});
/* increase font size function */
 $('.top_right_tile.design').click(function() {
    $('.top_right_tile.design span').css({
	  'transition': '3s',
	  'font-size': '75px',
	  'color' : 'black'
	});
  });
  
 $('.bottom_left_tile.design').click(function() {
	$('.bottom_left_tile.design span:nth-child(2)').fadeOut(function() {
	$('.bottom_left_tile span:nth-child(1)').fadeIn(1001);
  });
 });

}); // end of document ready


// for canvas

document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
//code goes here


    var c = document.getElementById('wall');
    var ctx = c.getContext('2d');

// odd x positioning
    var ox1 = 30;
    var ox2 = 150;
    var ox3 = 240;
// odd width
    var ow0 = 30;
    var ow1 = 120;
    var ow2 = 90 ;
    var ow3 = 60;

// even x positioning
    var ex1 = 90;
    var ex2 = 120;
    var ex3 = 180;
// even width
    var ew0 = 90 ;
    var ew1 = 30 ;
    var ew2 = 60 ;
    var ew3 = 120 ;

// row one
    ctx.fillStyle = 'black';
    ctx.fillRect(0 ,0,  ow0, 30);

    ctx.fillStyle = 'red';
    ctx.fillRect(ox1, 0, ow1, 30);

    ctx.fillStyle = 'white';
    ctx.fillRect(ox2, 0 , ow2, 30);

    ctx.fillStyle = 'brown';
    ctx.fillRect(ox3, 0, ow3, 30);
// end of row one

// row two
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0 ,30, ew0, 30);

    ctx.fillStyle = 'purple';
    ctx.fillRect(ex1 ,30, ew1, 30);

    ctx.fillStyle = 'red';
    ctx.fillRect(ex2 ,30, ew2, 30);

    ctx.fillStyle = 'black';
    ctx.fillRect(ex3 ,30, ew3, 30);
// end of row two

//row three
    ctx.fillStyle = 'orange';
    ctx.fillRect(0 ,60,  ow0, 30);

    ctx.fillStyle = 'yellow';
    ctx.fillRect(ox1 ,60,  ow1, 30);

    ctx.fillStyle = 'black';
    ctx.fillRect(ox2 ,60,  ow2, 30);

    ctx.fillStyle = 'white';
    ctx.fillRect(ox3 ,60,  ow3, 30);
// end of row three
// row four
    ctx.fillStyle = '#B49B36';
    ctx.fillRect(0 ,90,  ew0, 30);

    ctx.fillStyle = '#857740';
    ctx.fillRect(ex1 ,90,  ew1, 30);

    ctx.fillStyle = '#715E10';
    ctx.fillRect(ex2 ,90,  ew2, 30);

    ctx.fillStyle = '#D1BA5B';
    ctx.fillRect(ex3 ,90,  ew3, 30);
// end of row four
// row five
    ctx.fillStyle = '#245F70';
    ctx.fillRect(0 ,120,  ow0, 30);

    ctx.fillStyle = '#294952';
    ctx.fillRect(ox1 ,120,  ow1, 30);

    ctx.fillStyle = '#0B3947';
    ctx.fillRect(ox2 ,120,  ow2, 30);

    ctx.fillStyle = '#4C93A7';
    ctx.fillRect(ox3 ,120,  ow3, 30);
// end of row five
// row six
    ctx.fillStyle = '#B43636';
    ctx.fillRect(0 ,150,  ew0, 30);

    ctx.fillStyle = '#854040';
    ctx.fillRect(ex1 ,150,  ew1, 30);

    ctx.fillStyle = '#711010';
    ctx.fillRect(ex2 ,150,  ew2, 30);

    ctx.fillStyle = '#D15B5B';
    ctx.fillRect(ex3 ,150,  ew3, 30);
// end of row six
// row seven
    ctx.fillStyle = '#A3A700';
    ctx.fillRect(0 ,180,  ow0, 30);

    ctx.fillStyle = '#646528';
    ctx.fillRect(ox1 ,180,  ow1, 30);

    ctx.fillStyle = '#494B00';
    ctx.fillRect(ox2 ,180,  ow2, 30);

    ctx.fillStyle = '#E5E957';
    ctx.fillRect(ox3 ,180,  ow3, 30);
// end of row seven
// row eight
    ctx.fillStyle = '#A87000';
    ctx.fillRect(0 , 210,  ew0, 30);

    ctx.fillStyle = '#665128';
    ctx.fillRect(ex1 , 210,  ew1, 30);

    ctx.fillStyle = '#4C3200';
    ctx.fillRect(ex2 , 210,  ew2, 30);

    ctx.fillStyle = '#E9B957';
    ctx.fillRect(ex3 , 210,  ew3, 30);
// end of row eight
// row nine
    ctx.fillStyle = '#480070';
    ctx.fillRect(0 , 240,  ow0, 30);

    ctx.fillStyle = '#351B44';
    ctx.fillRect(ox1 , 240,  ow1, 30);

    ctx.fillStyle = '#210032';
    ctx.fillRect(ox2 , 240,  ow2, 30);

    ctx.fillStyle = '#AB52DB';
    ctx.fillRect(ox3 , 240,  ow3, 30);
// end of row nine
// row ten
    ctx.fillStyle = '#87004C';
    ctx.fillRect(0 , 270,  ew0, 30);

    ctx.fillStyle = '#52203C';
    ctx.fillRect(ex1 , 270,  ew1, 30);

    ctx.fillStyle = '#3D0022';
    ctx.fillRect(ex2 , 270,  ew2, 30);

    ctx.fillStyle = '#E154A4';
    ctx.fillRect(ex3 , 270,  ew3, 30);
//end of row ten
}


