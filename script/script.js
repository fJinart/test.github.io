
// index page
try {
  window.addEventListener('load', function () {
      setTimeout(function() {
          scrollTo(0, 0);
      }, 0);
  }, false);
} catch (e) { }

$(function () {
  $('.tab>li>a').click(function () {
      $(this).parent().addClass("active")
          .siblings()
          .removeClass("active");
      return false;
  });
});


// $(function () {
//   $('.tab>li>a').click(function () {
//       $(this).parent().addClass("active")
//           .siblings()
//           .removeClass("active");

//       $(this).parent().find('div').show();
//       $(this).parent().siblings().find('div').hide();

//       if ($(this).text().trim() === "KO") {
//           $('footer').show();
//       } else {
//           $('footer').hide();
//       }

//       return false;
//   });

//   $('.tab>li:first-child').addClass("active");
//   $('.tab>li:first-child').find('div').show();
//   $('.tab>li:not(:first-child)').find('div').hide();

  
//   if ($('.tab>li:first-child>a').text().trim() === "KO") {
//       $('footer').show();
//   } else {
//       $('footer').hide();
//   }
// });

//popup menu

$(document).ready(function() {
  // 메뉴 아이콘 클릭 시 팝업 메뉴 토글
  $('.menu_m').click(function(event) {
      event.stopPropagation(); // 이벤트 버블링 방지
      var $popupMenu = $('.popup_menu');
      
      if ($popupMenu.hasClass('show')) {
          $popupMenu.removeClass('show');
          setTimeout(function() {
              $popupMenu.hide();
          }, 200); // 200ms 후에 display를 none으로 설정
      } else {
          $popupMenu.show();
          setTimeout(function() {
              $popupMenu.addClass('show');
          }, 10); // 약간의 지연 후에 클래스 추가
      }
  });

  // 팝업 메뉴 외부 클릭 시 팝업 메뉴 숨김
  $(document).click(function() {
      var $popupMenu = $('.popup_menu');
      if ($popupMenu.hasClass('show')) {
          $popupMenu.removeClass('show');
          setTimeout(function() {
              $popupMenu.hide();
          }, 200); // 200ms 후에 display를 none으로 설정
      }
  });

  // 팝업 메뉴 클릭 시 메뉴가 닫히지 않도록 방지
  $('.popup_menu').click(function(event) {
      event.stopPropagation();
  });
});



//painting page
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

//현재 Tab 위치 기억했다가 뒤로가기 눌렀을 때 보이도록

// 페이지 로드될 때 실행되는 함수
window.onload = function() {
  // 세션 스토리지에서 이전에 활성화되었던 탭의 정보를 가져옴
  var activeTab = sessionStorage.getItem('activeTab');
  if (activeTab) {
      // 이전에 활성화되었던 탭을 다시 활성화함
      openCity(ev, activeTab);
  }
}

// 탭 클릭 시 호출되는 함수
function openCity(event, cityName) {
  // 모든 탭 내용을 숨김
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // 모든 탭 링크의 활성화 클래스를 제거
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // 현재 클릭된 탭을 활성화함
  document.getElementById(cityName).style.display = "block";

  // 클릭된 탭 버튼에 활성화 클래스를 추가
  event.currentTarget.className += " active";

  // 활성화된 탭의 정보를 세션 스토리지에 저장
  sessionStorage.setItem('activeTab', cityName);
}



//Series Tab


//Media Art Page
function videoselector (videoLink) {
    document.getElementById('video_slider').src=videoLink;
}

//Photography Page

$(document).ready(function(){
  let currentIndex = 0;
  const slides = $('.slide');
  const totalSlides = slides.length;
  let intervalId;

  // Next 버튼 변경
  $('.next').html('>').click(function() {
      goToSlide(currentIndex + 1);
  });

  // Prev 버튼 변경
  $('.prev').html('<').click(function() {
      goToSlide(currentIndex - 1);
  });

  // Center 버튼 클릭 시 해당 페이지로 이동
  $('.center').click(function() {
      const pageUrl = slides.eq(currentIndex).data('button');
      window.location.href = pageUrl;
  });

  $('.nav-button').click(function() {
      const index = $(this).data('slide');
      goToSlide(index);
  });

  // 자동으로 슬라이드 전환을 위한 함수
  function startSlideShow() {
      intervalId = setInterval(function() {
          goToSlide(currentIndex + 1);
      }, 3000); // 3초마다 슬라이드 전환
  }

  // 슬라이드 전환 시 호출되는 함수
  function goToSlide(index) {
      clearInterval(intervalId); // 이전 타이머 제거

      slides.eq(currentIndex).removeClass('active');
      $('.nav-button').eq(currentIndex).removeClass('active');
      currentIndex = (index + totalSlides) % totalSlides;
      slides.eq(currentIndex).addClass('active');
      $('.nav-button').eq(currentIndex).addClass('active');
      updateSlidePosition();
      updateTitleAndButton();

      startSlideShow(); // 새로운 타이머 시작
  }

  // 슬라이드 이동 위치 업데이트
  function updateSlidePosition() {
      $('.slides').css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
  }

  // 타이틀과 버튼 텍스트 업데이트
function updateTitleAndButton() {
  const currentSlide = slides.eq(currentIndex);
  const title = currentSlide.data('title');
  const buttonText = currentSlide.data('button-text'); // 센터 버튼의 텍스트를 가져옴
  $('.slider-title').text(title);
  $('.center').text(buttonText);
}

  // 초기 타이틀과 버튼 텍스트 설정
  updateTitleAndButton();

  // 자동 슬라이드 시작
  startSlideShow();
});


//Scroll Top
document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scrollToTop");

  // Show the button when the user scrolls down 100px from the top
  window.addEventListener("scroll", function() {
      if (window.scrollY > 100) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  });

  // Scroll to the top when the button is clicked
  scrollToTopButton.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});

