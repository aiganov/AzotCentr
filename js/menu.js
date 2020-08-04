$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.sticky-header').slideDown(100);
  } else {
    $('.sticky-header').slideUp(100);
  }

}); 

var removeClass = true;
$(".search").click(function () {
    $(".search-input").toggleClass('search-input-toggle');
    removeClass = false;
});

$(".search-input").click(function() {
    removeClass = false;
});

$("html").click(function () {
    if (removeClass) {
        $(".search-input").removeClass('search-input-toggle');
    }
    removeClass = true;
});



var removeSticky = true;
$(".sticky-button-search").click(function () {
    $(".sticky-search-input").toggleClass('sticky-search-input-toggle');
    removeSticky = false;
});

$(".sticky-search-input").click(function() {
    removeSticky = false;
});

$("html").click(function () {
    if (removeSticky) {
        $(".sticky-search-input").removeClass('sticky-search-input-toggle');
    }
    removeSticky = true;
});