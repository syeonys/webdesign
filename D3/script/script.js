// menu
$('.main-menu').mouseenter(function () {
    $('.sub-menu').css({ 'display': 'flex' }).stop().fadeIn()
    $('nav').addClass('on')
})
$('.main-menu').mouseleave(function () {
    $('.sub-menu').stop().fadeOut()
    $('nav').removeClass('on')
})

// --------- slide fade ------------------------
// 1. 첫번째 슬라이드 빼고 다(형제들) 숨기기
$('.slide').eq(0).siblings().hide()

// 0번째 ~ 2번째를 선택하기 위해 변수 설정 (setInterval 밖, 위에 써야됨)
let idx = 0

setInterval(function () {

    idx++ //1씩 늘어남 (0 -> 0+1 -> 0+1+1)

    if (idx === 3) { //0~2까지만 선택해야 되니까, 3이면 ("===" 꼭 세개 써줘야됨!)
        idx = 0 //idx는 0 이라고 다시 할당
    }

    $('.slide').fadeOut() // 다 숨기고
    $('.slide').eq(idx).siblings().fadeIn()  //idx번째 슬라이드만 보여줌

}, 3000) //3초마다




// ------------- tab ---------------
$('.tab-menu li a').click(function (e) {
    e.preventDefault() //a 클릭해도 화면 가만히 있게

    //클릭한 a의 번지값(id) 가져오기 ex) <a href="#notice"> 속 #notice
    let tab = $(this).attr('href')

    $('.tab').hide() //모든 tab (notice, gallery) 다 숨기고
    $(tab).show() //번지값에 해당하는 tab(id)만 보여주기

    
    // 메뉴에 class 넣고 빼기 (bg색칠)
    $('.tab-menu li a').parent('li').removeClass('on') //선택되지 않은 메뉴 클래스 'on'제거
    $(this).parent('li').addClass('on') //선택된 메뉴 li에 css 스타일 적용
})


// popup
$('.modal').click(function(e){
    e.preventDefault()
    $('.popup').fadeIn()
})
$('.close').click(function(e){
    e.preventDefault()
    $('.popup').fadeOut()
})
