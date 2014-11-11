//we are going to attempt to make a tile system with 10,000 different tiles
// then we are going to try to make each and evert tile change color and then
// then we are going to try to make each and every tile rondomize color with every
// refresh. 

//We want to do this primarily through jqeury, due the following reason
//  When it comes to smaller websites, efficiency is not as important as
// ease os use. For instance, ROR is taking by storm smaller websites
// Whereas Python is taking by storm the scientific community and backend engineers
// So we want to do as much through jquery so that it can be understood and manipulated
// by as many people as we possibly can... 

// +i+ means concatate the value between <div> and </div> 
/*
$(document).ready(function() {
  for (var i = 0; i <=  590; i++) {
       var hue = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';
       var borderColor  = 'rgb('
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ','
            + (Math.floor(Math.random() * 256)) + ')';
   $('.button.design').append("<div id =blue_tile" +i+ "></div>");
   $("#blue_tile" +i).css({
      "background-color": hue,
          "box-shadow": "0 0 0 1px rgba(0, 255, 0, 0.5)",
          "width": "8px",
      "height": "8px",
      "float" : "left",
	  "z-index": "1",
      "-webkit-border-radius": "90px",
      "-moz-border-radius": "90px",
      "border-radius": "90px",
      "border" : "1px solid black"
      }); // end of .css function
  } //end of var i function
  /* markup for the .front tile */
  
//}); //end of ducument ready
