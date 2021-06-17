// var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
    var rootElement = document.documentElement;
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // window.onload = function() {
  //   $('#scrollToTop').hide();
  // }

  $(document).scroll(function () {
    if(window.scrollY > 200)
    {
      $('#bounce-arrow').hide();
      $('#scrollToTop').show();
    }
    else{
      $('#bounce-arrow').show();
      $('#scrollToTop').hide();
    }
  });
