// menu
$('.main-menu').mouseenter(function () {
  $('.main-menu').addClass('on')
  $('.sub-menu').stop().fadeIn()
})
$('.sub-menu li').mouseenter(function () {
  $(this).addClass('on')
})
$('.main-menu').mouseleave(function () {
  $('.main-menu').removeClass('on')
  $('.sub-menu').stop().fadeOut()
})
$('.sub-menu li').mouseleave(function () {
  $(this).removeClass('on')
})

// slide
$('.slide').eq(0).siblings().fadeOut()
let idx = 0

setInterval(function(){
  idx++

  if(idx === 3){
    idx = 0
  }

  $('.slide').fadeOut()
  $('.slide').eq(idx).fadeIn()
},3000)

// popup
$('.modal').click(function(){
  $('.popup').fadeIn()
})
$('.close').click(function(){
  $('.popup').fadeOut()
})