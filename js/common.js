$(document).ready(function () {
  subStage()
});


function subStage() {
  $('.sub-stage').slideUp(0);

  $('.navi-wrapper .m-menu').click(function(){
    //햄버거 애니메이션 구현
    $('.navi .btn-memu').toggleClass('active');
    $('.navi-wrap.bag img').fadeToggle();
    $('.sub-stage').slideToggle()
  });

  //검색창 클릭시
  $('.navi-container .search-ipt').click(function(){
    $('.navi-container .navi-wrapper').slideUp();
    $('.navi-container .sub-stage').css({'height':'100vh','top':'0'})
    $('.sub-wrapper .sub-wrap').addClass('d-none')
    $('.navi-container .search-wrapper').addClass('active')
    $('.search-wrapper btn-close').addClass('hidden')
    $('.navi-container .quickLink-wrap').addClass('d-block')
  });

  //취소버튼 클릭시
  $('.search-wrapper .btn-close').on('click', function(){
    $('.navi-container .navi-wrapper').slideDown();
    $('.navi-container .sub-stage').css({'height':'calc(100vh - 40px)','top':'44px' })
    $('.sub-wrapper .sub-wrap').removeClass('d-none')
    $('.navi-container .search-wrapper').removeClass('active')
    $('.search-wrapper btn-close').removeClass('hidden')
    $('.navi-container .quickLink-wrap').removeClass('d-block')
  });
}