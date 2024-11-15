// menu
$('.main-menu').mouseenter(function(){
  $(this).find('.sub-menu').stop().slideDown()
})
$('.main-menu').mouseleave(function(){
  $(this).find('.sub-menu').stop().slideUp()
})

// slide
setInterval(function(){
  $('.slide-wrap').animate({'left':'-100%'},function(){
    $('.slide').first().appendTo('.slide-wrap')
    $('.slide-wrap').css({'left':'0'})
  })
},3000)

// popup
$('.modal').click(function(){
  $('.popup').fadeIn()
})
$('.close').click(function(){
  $('.popup').fadeOut()
})