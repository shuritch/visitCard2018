function stars() {
		let count = 600;
		let scene = $('#main');
		let i = 0;
		while(i < count){
			let star = document.createElement('i');
			let x = Math.floor(Math.random() * window.innerWidth);
			let y = Math.floor(Math.random() * 1000);
			let duration = Math.random() *10;
			let size = Math.random() * 2;
			star.style.left = x - 20 +'px';
			star.style.top = y+'px';
			star.style.width = size+'px';
			star.style.height = size+'px';
			star.style.animationDuration = duration+0.5+'s';
			star.style.animationDelay = duration+'s';
			star.className = "stars"; 
			scene.append(star);
			i++
		}
	}
	wid = window.innerWidth;
	hei = window.innerHeight;
	setInterval('draw()',100);
	

	stars();
	function draw(){
		
	if (wid != window.innerWidth || hei != window.innerHeight){
		$('.stars').remove();
		stars();
		
	}
	wid = window.innerWidth;
	hei = window.innerHeight;
}
window.onscroll = function() {myFunction()};

// Get the header
var header = $("#fastHe");



function myFunction() {
  if (window.pageYOffset >= 100) {

  	 header.css('position','fixed');
  	 
    header.css('background','rgba(0,0,0,0.5)');
  } else {
   header.css('position','absolute');
    header.css('background','rgba(0,0,0,0)');
  }
}
function stars2(){
	let count = 20;
		let scene2 = $('#scene');
		let i = 0;
		while(i < count){
			let star = document.createElement('i');
			let x = Math.floor(Math.random() * 80);
			let y = Math.floor(Math.random() * 80);
			let duration = Math.random() *1;
			let size = Math.random() * 1;
			star.style.left = x+'px';
			star.style.top = y+'px';
			star.style.width = size+'px';
			star.style.height = size+'px';
			star.style.animationDuration = duration+1 +'s';
			star.style.animationDelay = duration+ 's';
			star.className = "stars2"; 
			scene2.append(star);
			i++
		}
		
}
stars2();
$(window).scroll(function() { 
	if ($(this).scrollTop() > 150) {
		$('#scene').css('display', 'flex');

 } 
 else{
 	$('#scene').css('display', 'none');
 }

});
 var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      direction: getDirection(),
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',

        clickable: true,
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        }
      }
    });
 function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }
firstAudio = false;
var audio = new Audio('music.mp3');

		
		
	$('#faviconAtend').on('click', function(){

		if (audio.paused) {
		
		audio.play();
		volume: 0.5;
		firstAudio = true;
		top = '50%';
		right = '10%';
		count2 = 50;
		i2 = 0;

		while(i2 < count2){
			i3 = 0;
			let star2 = document.createElement('i');
			
			let duration2 = Math.random() *1;
			let size2 = Math.random() * 1;
			
			star2.style.width = size2+'px';
			star2.style.height = size2+'px';
			star2.style.animationDuration = duration2+1 +'s';
			star2.style.animationDelay = duration2+ 's';
			star2.className = "stars3"; 
			$('#ContactsS').append(star2);
			i2++
			for (var i = 0; i <=250; i++) {
				star2.style.transform = 'translateX('+i+'+px)';
				star2.style.transform = 'translateY('+i+'+px)';
				i3++
			}
		}
	}
	else{
		audio.pause();
		firstAudio = false;
		$('.stars3').remove();
	}
	});