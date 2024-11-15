
// menu
$('.main-menu').mouseenter(function () {
  $(this).find('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function () {
  $(this).find('.sub-menu').stop().slideUp()
})

// slide
setInterval(function () {
  $('.slide-wrap').animate({ 'left': '-100%' }, function () {
    $('.slide').first().appendTo('.slide-wrap')
    $('.slide-wrap').css({ 'left': '0%' })
  })

}, 3000)

// bannerfade (연습용)
$('.banner').eq(0).siblings().hide()
let idx = 0

setInterval(function () {
  idx++
  if (idx === 2) {
    idx = 0
  }
  $('.banner').fadeOut()
  $('.banner').eq(idx).fadeIn()

}, 3000)


// popup
$('.notice li').click(function (e) {
  e.preventDefault()

  let popup = $(this).find('a').attr('href')
  $(popup).fadeIn(300)
})
$('.close').click(function (e) {
  e.preventDefault()
  $('.popup').fadeOut(200)
})


// tab
$('.tab-list a').click(function (e) {
  e.preventDefault()
  let tab = $(this).attr('href') 

  $('.tab').hide()
  $(tab).show()
  $('.tab-list a').parent().removeClass('on')
  $(this).parent().addClass('on')


})