$(document).ready(function () {
  memuAni()
});


//햄버거 애니메이션 구현
function memuAni() {
  $('.navi-wrapper > .m-menu').click(function(){
    $('.btn-memu').toggleClass('active')
    console.log('실행');
  });
}