$(document).ready(function () {
  subWrap()       //필수
  naviEvent()     //필수
  iptFile()       //필수
  displayRadio()  //필수
  callStage()     //필수
  sweetAlert()
  timepicker()
  datepicker()
  tagsinput()
});

function callStage() {
  var video_cnt = $(videos).length;
  if(video_cnt == 2) {
    $('.partyTable-wrapper').addClass('d-none');
    $('.user-wrapper').removeClass('col-lg-7');
    $('.user-wrapper').addClass('col-lg-6');
    $('.partyUser-wrapper').removeClass('col-lg-3');
    $('.partyUser-wrapper').removeClass('scroll');
    $('.partyUser-wrapper').addClass('col-lg-6');
  }
}

function Korean() {
  //! moment.js locale configuration
  //! locale : Korean [ko]
  //! author : Kyungwook, Park : https://github.com/kyungw00k
  //! author : Jeeeyul Lee <jeeeyul@gmail.com>

  ;
  (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' &&
      typeof require === 'function' ? factory(require('../moment')) :
      typeof define === 'function' && define.amd ? define(['../moment'], factory) :
      factory(global.moment)
  }(this, (function (moment) {
    'use strict';


    var ko = moment.defineLocale('ko', {
      months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
      monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
      weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
      weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
      weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
      longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'YYYY.MM.DD',
        LL: 'YYYY년 MMMM D일',
        LLL: 'YYYY년 MMMM D일 A h:mm',
        LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
        l: 'YYYY.MM.DD',
        ll: 'YYYY년 MMMM D일',
        lll: 'YYYY년 MMMM D일 A h:mm',
        llll: 'YYYY년 MMMM D일 dddd A h:mm'
      },
      calendar: {
        sameDay: '오늘 LT',
        nextDay: '내일 LT',
        nextWeek: 'dddd LT',
        lastDay: '어제 LT',
        lastWeek: '지난주 dddd LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s 후',
        past: '%s 전',
        s: '몇 초',
        ss: '%d초',
        m: '1분',
        mm: '%d분',
        h: '한 시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        M: '한 달',
        MM: '%d달',
        y: '일 년',
        yy: '%d년'
      },
      dayOfMonthOrdinalParse: /\d{1,2}일/,
      ordinal: '%d일',
      meridiemParse: /오전|오후/,
      isPM: function (token) {
        return token === '오후';
      },
      meridiem: function (hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
      }
    });

    return ko;

  })));

}

function subWrap() {
  //sub-wrap 슬라이드
  $('.sub-wrap').slideUp(0);
  $('.profile-wrap').on('mouseover', function () {
    $('.sub-wrap').slideDown()
  });
  $('.header-wrapper').on('mouseleave', function () {
    $('.sub-wrap').slideUp()
  });
}

function naviEvent() {
  //네비 사이즈 버튼
  $('.navbar-minimalize').click(function () {
    $('body').toggleClass('mini-navbar');
  });

  //반응형 사이즈 조절
  $(window).resize(function () {
    if (window.outerWidth > 992) {
      $('body').removeClass('mini-navbar');
    } else if (window.outerWidth < 992) {
      $('body').addClass('mini-navbar');
    } else if (window.outerWidth < 768) {
      $('body').removeClass('mini-navbar');
    } else(window.outerWidth > 768)
    $('body').addClass('body-small');
  });

  //네비 서브메뉴 이벤트
  $('#side-menu > li').click(function () {
    $(this).find('.nav-second-level').toggleClass('in');
  });
}

function iptFile() {
  //파일명 추가
  $("input[type='file']").on('change', function () {
    $(this).next('.custom-file-label').html(event.target.files[0].name);
  })
}

function displayRadio() {
  if ($('input:radio[id=Y]').is(':checked')) {
    $('.openDate').show();
  } else {
    $('.openDate').hide();
  }
}

function timepicker() {
  $("#time").timepicker({
    timeFormat: 'h:mm p',
    interval: 30,
    minTime: '9',
    maxTime: '6:00pm',
    defaultTime: '9',
    startTime: '09:00',
    dynamic: false,
    dropdown: true,
    scrollbar: false
  });
  $("#st-time").timepicker({
    timeFormat: 'h:mm p',
    interval: 10,
    minTime: '8',
    maxTime: '9:00pm',
    defaultTime: '9',
    startTime: '09:00',
    dynamic: false,
    dropdown: true,
    scrollbar: false
  });
  $("#ed-time").timepicker({
    timeFormat: 'h:mm p',
    interval: 10,
    minTime: '9',
    maxTime: '10:00pm',
    defaultTime: '10',
    startTime: '09:00',
    dynamic: false,
    dropdown: true,
    scrollbar: false
  });
}

function datepicker() {
  $('#datepicker').datepicker({
    calendarWeeks: false,
    todayHighlight: true,
    autoclose: true,
    format: "yyyy/mm/dd",
    language: "kr"
  });
}

function sweetAlert() {
  //확인창
  $("#alert").click(function () {
    Swal.fire({
      icon: 'question',
      title: '푸시 발송 취소 확인',
      text: '푸시발송을 취소 하시겠습니까?',
      confirmButtonColor: '#1c84c6',
      confirmButtonText: '확인',
      showCancelButton: true,
      cancelButtonColor: '#ccc',
      cancelButtonText: '취소'
    });
  });

  //제한 팝업
  $("#confirm").click(function () {
    Swal.fire({
      icon: 'error',
      title: '대면일정 등록 제한',
      text: '2명 이상 대면평가 일정을 등록할 수 없습니다.',
      confirmButtonColor: '#1c84c6',
      confirmButtonText: '확인'
    });
  });
}

$(function daterang() {

  $('#stDatetime').datetimepicker({
    sideBySide: true,
    defaultDate: moment()
  });

  $('#edDatetime').datetimepicker({
    sideBySide: true,
    defaultDate: moment()
  });
});