// nav
$('.main-menu').mouseenter(function () {
  $('.sub-menu').stop().slideDown()
  $(this).addClass('on')
})
$('.main-menu').mouseleave(function () {
  $('.sub-menu').stop().slideUp()
  $(this).removeClass('on')
})

// slide
setInterval(function () {
  $('.slide-wraper').animate({ 'left': '-100%' },function(){
    $('.slide').eq(0).appendTo('.slide-wraper')
    $('.slide-wraper').css({ 'left': '0%' })
  })
},3000)
//tab


// popup
$('.modal').click(function () {
  $('.popup').stop().fadeIn(300)
})
$('.close').click(function () {
  $('.popup').stop().fadeOut(100)
})