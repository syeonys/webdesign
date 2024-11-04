// menu
$('.main-menu').mouseenter(function(){
  $(this).find('.sub-menu').stop().slideDown(300)
})
$('.main-menu').mouseleave(function(){
  $(this).find('.sub-menu').stop().slideUp()
})

// slide
setInterval(function(){
  $('.slide-wrap').animate({'left':'-100%'},500,function(){
    $('.slide:first').appendTo('.slide-wrap')
    $('.slide-wrap').css({'left':'0%'})
  })
},3000)

// popup
$('.modal').click(function(){
  $(this).addClass('on')
  $('.popup').fadeIn()
  $('.popup-dim').fadeIn()
})
$('.close').click(function(){
  $('.modal').removeClass('on')
  $('.popup').fadeOut()
  $('.popup-dim').fadeOut()
})