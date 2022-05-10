$(document).ready(function () {
  subStage()
});


function subStage() {
  $('.sub-stage').slideUp(0);

  $('.navi-wrapper .m-menu').click(function(){
    //햄버거 애니메이션 구현
    $('.navi .btn-memu').toggleClass('active');
    $('.navi-wrap.bag img').toggleClass('hidden')
    $('.sub-stage').slideToggle()
  });

}