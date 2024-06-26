
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
// 페이지가 로드될 때
document.addEventListener('DOMContentLoaded', (event) => {
  let activeTab = localStorage.getItem('activeTab');
  if (activeTab) {
      document.getElementById(activeTab).click();
  } else {
      document.getElementById('tabColorTables').click();
  }
});

function openTab(evt, tabName) {
  // 모든 탭 콘텐츠를 숨기기
  var tabcontent = document.getElementsByClassName('tabcontent');
  for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
      tabcontent[i].classList.remove('active');
  }

  // 모든 탭 링크에서 active 클래스 제거
  var tablinks = document.getElementsByClassName('tablinks');
  for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
  }

  // 클릭된 탭과 관련된 탭 콘텐츠를 표시
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');

  // 활성화된 탭을 localStorage에 저장
  localStorage.setItem('activeTab', evt.currentTarget.id);
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

// Modal View - Painting

let currentIndex = 0;
const images = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const close = document.getElementsByClassName('close_modal')[0];

function openModal(index) {
    modal.style.display = 'block';
    currentIndex = index;
    showImage(currentIndex);
}

function closeModal() {
    modal.style.display = 'none';
}

function showImage(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    modalImage.src = images[currentIndex].src;
    
    // Get the title of the current image and set it to the modal title
    const info = images[currentIndex].closest('.col').querySelector('.info');
    const title = info.querySelector('h3').innerText;
    modalTitle.innerText = title;
}

function changeSlide(direction) {
    showImage(currentIndex + direction);
}

images.forEach((image, index) => {
    image.addEventListener('click', () => openModal(index));
});

close.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Modal View - Photography
let currentIndexPhotography = 0;
const imagesPhotography = document.querySelectorAll('.photo-image');
const modalPhotography = document.getElementById('modal');
const modalImagePhotography = document.getElementById('modalImage');
const closePhotography = document.getElementsByClassName('close_modal')[0];

function openModalPhotography(index) {
    modalPhotography.style.display = 'block';
    currentIndexPhotography = index;
    showImagePhotography(currentIndexPhotography);
}

function closeModalPhotography() {
    modalPhotography.style.display = 'none';
}

function showImagePhotography(index) {
    if (index >= imagesPhotography.length) {
        currentIndexPhotography = 0;
    } else if (index < 0) {
        currentIndexPhotography = imagesPhotography.length - 1;
    } else {
        currentIndexPhotography = index;
    }
    modalImagePhotography.src = imagesPhotography[currentIndexPhotography].src;
}

function changeSlidePhotography(direction) {
    showImagePhotography(currentIndexPhotography + direction);
}

imagesPhotography.forEach((image, index) => {
    image.addEventListener('click', () => openModalPhotography(index));
});

closePhotography.addEventListener('click', closeModalPhotography);

window.addEventListener('click', (event) => {
    if (event.target === modalPhotography) {
        closeModalPhotography();
    }
});



