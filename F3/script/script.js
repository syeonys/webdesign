// menu
$('.main-menu').mouseenter(function () {
  $('.sub-menu').stop().slideDown()
  $('header').addClass('on')
})
$('.main-menu').mouseleave(function () {
  $('.sub-menu').stop().slideUp()
  $('header').removeClass('on')
})

// slide
setInterval(function () {
  $('.slide-wrap').animate({ 'left': '-100%' }, function () {
    $('.slide').first().appendTo('.slide-wrap')
    $('.slide-wrap').css({ 'left': '0' })
  })
}, 3000)

// tab
$('.tab-menu a').click(function (e) {
  e.preventDefault()

  let tab = $(this).attr('href')

  $('.tab-menu li').removeClass('on')
  $(this).parent('li').addClass('on')
  $('.tab').hide()
  $(tab).show()
})

// popup
$('.notice li').click(function (e) {
  e.preventDefault()

  let tab = $(this).find('a').attr('href')
  $(tab).fadeIn()
})

$('.close').click(function (e) {
  e.preventDefault()

  $('.popup').fadeOut()
})

// banner fade(연습용)
$('.banner').eq(0).siblings().hide()
let idx = 0

setInterval(function () {
  idx++

  if (idx === 3) {
    idx = 0
  }


  $('.banner').fadeOut()
  $('.banner').eq(idx).fadeIn()

}, 3000);