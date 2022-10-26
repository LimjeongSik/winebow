var swiper = new Swiper(".askslider", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   },
   loop:true,
});

$.fn.extend({
	setAnimate : function(effect, fade) {
		return this.each(function() {
			var $this = $(this);
			if(fade) $this.css("opacity","0");
			$(window).on("scroll", function() {
				var winTop = $(this).scrollTop();
				var screenH = $(this).height();
				var thisTop = $this.offset().top + screenH/6;
				if(winTop + screenH > thisTop) {
					$this.addClass(effect);
				}
			}).trigger("scroll");
		});
	}
});


$(document).ready(function() {
  $('.header_wrap').setAnimate("animated fadeInUp slow",true);
  $('.banner_pcu').setAnimate("animated animated_delay_1 fadeInUp slow",true);
  $('.banner_ask_text').setAnimate("animated animated_delay_2 fadeInUp slow",true);
  $('.banner__ p').setAnimate("animated animated_delay_3 fadeInUp slow",true);
  $('.section2 .pcu .ask_service').setAnimate("animated fadeInUp slow",true);
  $('.section2 .pcu .pt').setAnimate("animated animated_delay_4 fadeInUp slow",true);
  $('.flex_box_1 .ask_i').setAnimate("animated fadeInUp slow",true);
  $('.flex_box_1 .ask_t').setAnimate("animated fadeInUp slow",true);
  $('.flex_box_2 .ask_i').setAnimate("animated fadeInUp slow",true);
  $('.flex_box_2 .ask_t').setAnimate("animated fadeInUp slow",true);
  $('.access').setAnimate("animated animated_delay fadeInUp slow",true);
  $('.various').setAnimate("animated animated_delay_1 fadeInUp slow",true);
  $('.someone').setAnimate("animated animated_delay_2 fadeInUp slow",true);
});
