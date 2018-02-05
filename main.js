/**
 * Hide background / change font of nav bar.
 */
$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    $('header').addClass('bg-on')
  } else {
    $('header').removeClass('bg-on')
  }
})

/**
 * Mobile menu toggle
 */
$('.menuBtn').on('click', function () {
  $(this).toggleClass('active')
})

/**
 * Scroll to section
 */
$('a.navigation-link').on('click', function () {

  var scrollAnchor = $(this).attr('data-scroll')
  var scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top - 28

  $('body,html').animate({
    scrollTop: scrollPoint
  }, 500)

  return false
})


/**
 * Change active nav link
 */
$(window).scroll(function() {
  var windscroll = $(window).scrollTop()
  if (windscroll >= 100) {
    $('nav').addClass('fixed')
    $('.wrapper section').each(function(i) {
      if ($(this).position().top <= windscroll - 20) {
        $('nav a.active').removeClass('active')
        $('nav a').eq(i).addClass('active')
      }
    })
  } else {
    $('nav').removeClass('fixed')
    $('nav a.active').removeClass('active')
    $('nav a:first').addClass('active')
  }

}).scroll()