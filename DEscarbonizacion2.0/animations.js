$('a').click(function() {
    var p = $('a').prev('p')
    var lineheight = parseInt(p.css('line-height'))
    if (parseInt(p.css('height')) == lineheight*3) {
       p.css('height','auto');
       $(this).text('Less')
    } else {
       p.css('height',lineheight*3+'px');
       $(this).text('More')
    }
});

function myFunction() {
   var x = document.getElementById("myDIV");
   if (x.style.display === "none") {
     x.style.display = "block";
   } else {
     x.style.display = "none";
   }
 } 