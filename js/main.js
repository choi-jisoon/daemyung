/* header, mainvisual JS */

let timer;


$('.header nav ul#gnb>li').on('mouseover', function() {
   clearTimeout(timer); //이전 타이머 초기화

   //현재 li에만 over 클래스 추가, 다른 li는 제거
   $(this).addClass('over').siblings().removeClass('over');

   $('.header').addClass('on');

   $('.header h1 a').css({'background-image': 'url(./img/bi2023_on.png)', 'transition': 'all 0.5s'});
   $('.header nav ul#gnb>li>a').css({'color': 'black'});

   //gnb 투뎁스들 애니메이션
   $('.header nav ul#gnb ul>li>a').css({'color': 'black', 'opacity': '1', 'transition': 'opacity 0.5s'});
});



$('.header nav ul#gnb>li').on('mouseout', function() {
   clearTimeout(timer);

   //마우스leave시 over 클래스 제거
   $(this).removeClass('over');

   //다른 li에 마우스가 있는지 확인
   if (!$('.header nav ul#gnb>li.over').length) {
      timer = setTimeout(function() {
         $('.header').removeClass('on');
         $('.header h1 a').css({'background-image': 'url(./img/bi2023_on.png)', 'transition': 'all 0.5s'});
         $('.header nav ul#gnb>li>a').css({'color': 'white'});
         $('.header nav ul#gnb ul>li>a').css({'color': 'white', 'opacity': '0', 'transition': 'opacity 0.5s'});
      }, 300);
   }
});

//header 영역 밖으로 마우스leave시 .on 클래스 제거
$('.header').on('mouseleave', function() {
   clearTimeout(timer); //남아있는 타이머 초기화
   $('.header').removeClass('on');
   $('.header nav ul#gnb>li').removeClass('over');
   $('.header h1 a').css({'background-image': 'url(./img/bi2023.png)', 'transition': 'all 0.5s'});
   $('.header nav ul#gnb>li>a').css({'color': 'white'});
   $('.header nav ul#gnb ul>li>a').css({'color': 'white', 'opacity': '0', 'transition': 'opacity 0.5s'});
});
setTimeout(function() {
   $('.main_visual strong').css({
      'opacity' : '1',
      'transform': 'translateY(0)',
   });
}, 1000)



setTimeout(function() {
   $('.main_visual .firstp').css({
         'opacity': '1',
         'transform': 'translateY(0)'
   });
}, 2000);
setTimeout(function() {
   $('.main_visual .seconndp').css({
         'opacity': '1',
         'transform': 'translateY(0)'
   });
}, 2000);



/* history JS */

let animationStarted = false;

$(window).on('scroll', function() {
   const historySection = $('.history');
   const sectionOffset = historySection.offset().top;
   const scrollPos = $(window).scrollTop();
   const windowHeight = $(window).height();


   if (scrollPos + windowHeight > sectionOffset && !animationStarted) {
      animationStarted = true;

       //strong과 p 태그 순차적으로 나타남
      $('.historyText_wrap strong').css({
         'opacity': '1',
         'transform': 'translateY(0)'
      });
      setTimeout(function() {
         $('.historyText_wrap p').css({
               'opacity': '1',
               'transform': 'translateY(0)'
         });
      }, 1000); //1초 후에 p 태그 애니메이션 실행



       //historyIcon이 서서히 나타남
      setTimeout(function() {
         $('.historyIcon_wrap ul li').css({
               'opacity': '1',
               'transform': 'translateY(0)'
         });
      }, 2000); //strong과 p 태그 이후에 나타나게 2초로 타이머

       //span 태그들이 서서히 나타남 (historyIcon_text 내부)
      setTimeout(function() {
         $('.historyIcon_wrap li .content strong').each(function() {
               $(this).css({
                  'opacity': '1',
                  'transform': 'translateY(0)',
                  'transition': 'all 0.5s ease'
               });
         });
      }, 3000); //historyIcon_text가 다 나타난 후 나타나게 3초로 타이머

       // 숫자 카운팅 시작
      setTimeout(function() {
         $('.historyIcon_wrap li .content strong').each(function() {
               let $this = $(this);
               let countTo = parseInt($this.text(), 10); //숫자 가져오기
               $({ countNum: 0 }).animate({
                  countNum: countTo
               }, {
                     duration: 2000, //숫자 카운트 딜레이주기
                     easing: 'linear',
                     step: function() {
                        $this.text(Math.floor(this.countNum)); //현재 값 업데이트
                  },
                     complete: function() {
                        $this.text(this.countNum); //마지막에 정확한 값 설정

                       //숫자가 올라간 후 폰트 크기 증가 애니메이션주기
                        $this.css({
                           'font-size': '2.2em',
                           'transition': 'font-size 0.5s ease'
                        });
                     }
               });
         });
       }, 3000); //자연스럽게 하기 위해 historyIcon_text span이 나타난 동시에 숫자 카운트 하기
   }
});


const business_links = document.querySelectorAll('.business a');

business_links.forEach(business_link => {
   business_link.addEventListener('mouseover', () => {
      business_link.classList.add('active');
      /* document.querySelector('.business').classList.remove('grayscale'); */

      if (business_link.classList.contains('architecture')) {
            document.querySelector('.business').style.backgroundImage = "url('./img/architecture.jpg')";
      } else if (business_link.classList.contains('leisure')) {
            document.querySelector('.business').style.backgroundImage = "url('./img/leisure.jpg')";
      } else if (business_link.classList.contains('civil')) {
            document.querySelector('.business').style.backgroundImage = "url('./img/civil.jpg')";
      }
   });


   business_link.addEventListener('mouseleave', () => {
      business_link.classList.remove('active');
      /* document.querySelector('.business').classList.add('grayscale'); */
   });
});



