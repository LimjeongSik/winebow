// mypage thouch slide menu
let menu_start = "0";
$('.m-nav').sly({
  horizontal: 1,
  itemNav: 'centered',
  smart: 1,
  mouseDragging: 1,
  touchDragging: 1,
  releaseSwing: 1,
  startAt: menu_start,
  speed: 300,
  elasticBounds: 1,
  dragHandle: 1,
  dynamicHandle: 1
  });
$(window).resize(function(e) {
  $('.m-nav').sly('reload');
});


// Toggle menu
let mobileMenu = $('.menu_btn');
mobileMenu.click(function(){
  $('.mobile_toggle_menu').addClass('on');
  $('.mobile_toggle_menu .toggle_menu').addClass('on');
});
let btnMenuClose = $('.btn_menu_close');
btnMenuClose.click(function(){
  $('.mobile_toggle_menu').removeClass('on');
  $('.mobile_toggle_menu .toggle_menu').removeClass('on');
});
let dropdownTab = $('.toggle_menu .menu_list .menu li');
dropdownTab.click(function(ev){
  ev.preventDefault();
  $(this).siblings().removeClass('on');
  $(this).toggleClass('on');
  $(this).find('.dropsubmenu').slideToggle();
  $(this).siblings().find('.dropsubmenu').slideUp();
});



// Page Move btn
function onSignpage(){
  location.href = "sign.html";
};
function onLoginpage(){
  location.href = "login.html";
}
// submenu
let menu = $('.header_menu nav ul li');
menu.mouseenter(function(){
  $(this).find('.sub_menu').stop().fadeIn();
});
menu.mouseleave(function(){
  $(this).find('.sub_menu').stop().hide();
})
// Search Selectbox
let colorSelect = $('.color .choice');
colorSelect.click(function(){
  $(this).toggleClass('on');
});
let styleSelect = $('.style .choice');
styleSelect.click(function(){
  $(this).toggleClass('on');
});
let grapesSelect = $('.grapes .choice');
grapesSelect.click(function(){
  $(this).toggleClass('on');
});
let regionsSelect = $('.regions .choice');
regionsSelect.click(function(){
  $(this).toggleClass('on');
});
let countrySelect = $('.country .choice');
countrySelect.click(function(){
  $(this).toggleClass('on');
});
let importerSelect = $('.importer .choice');
importerSelect.click(function(){
  $(this).toggleClass('on');
});
//Search range
$( ".slider-range" ).slider({
  range: true,
  min: 0,
  max: 1000000,
  values: [100000 , 400000 ],
  slide: function( event, ui ) {
    $(".from").text("₩" + ui.values[0]);
    $(".to").text("₩" + ui.values[1]);
  }
});
$(".from").text("₩" + $( ".slider-range" ).slider( "values", 0 ));
$(".to").text( "₩" +$( ".slider-range" ).slider( "values", 1 ));

// Detail product
var swiper = new Swiper(".detailproduct", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".wineryslide", {
    slidesPerView: 1.5,
    spaceBetween: 13,
    breakpoints: {
      501: {
        slidesPerView: 4,  //브라우저가 768보다 클 때
        spaceBetween: 17,
      },
    },
  });
var swiper = new Swiper(".grapeslide", {
    slidesPerView: 1.5,
    spaceBetween: 13,
    breakpoints: {
      501: {
        slidesPerView: 4,  //브라우저가 768보다 클 때
        spaceBetween: 17,
      },
    },
  });
var swiper = new Swiper(".originslide", {
    slidesPerView: 1.5,
    spaceBetween: 13,
    breakpoints: {
      501: {
        slidesPerView: 4,  //브라우저가 768보다 클 때
        spaceBetween: 17,
      },
    },
  });
// Detail mobile buy btns
let mobileBuyBtn = $('.mobile_buy_btn');
let mobileBuyPopup = $('.mobile_buy_popup');
let mobileBuyPopupClose = $('.buy_back_banenr');
let btnReservation = $('.btn.reservation');
mobileBuyBtn.click(function(){
  $(this).addClass('on');
  mobileBuyPopup.fadeIn(300);
  mobileBuyPopup.find('.buy_popup').addClass('on');
});
mobileBuyPopupClose.click(function(){
  mobileBuyBtn.removeClass('on');
  mobileBuyPopup.find('.buy_popup').removeClass('on');
  $('.buy_select').removeClass('on');
  setTimeout(function(){
    mobileBuyPopup.fadeOut(850);
  },350);
});
btnReservation.click(function(){
  mobileBuyPopup.find('.buy_popup').removeClass('on');
  $('.buy_select').addClass('on');
})
$(window).resize(function(){
  if($(window).width() > 500) {
    mobileBuyBtn.removeClass('on');
    mobileBuyPopup.find('.buy_popup').removeClass('on');
    $('.buy_select').removeClass('on');
    setTimeout(function(){
      mobileBuyPopup.fadeOut(850);
    },350);
  }
})
// Search mobile popup
let btnSort = $('.btn_sort');
let mobileSortPop = $('.mobile_sort_pop');
let sortPopClose = $('.sortclose');
let filterList = $('.filter_lsit li');
filterList.click(function(){
  filterList.removeClass('on');
  $(this).addClass('on');
});
btnSort.click(function(){
  mobileSortPop.fadeIn(300);
});
sortPopClose.click(function(){
  mobileSortPop.hide();
});
let btnFilter = $('.btn_filter');
let mobileFilterPop = $('.mobile_filter_pop');
let fileterPopClose = $('.filterclose');
btnFilter.click(function(){
  mobileFilterPop.fadeIn(300);
});
fileterPopClose.click(function(){
  mobileFilterPop.hide();
});
$(window).resize(function(){
  mobileFilterPop.hide();
  mobileSortPop.hide();
});
// Detail dropdown
var clickNav = $('.dropdownmenu');
clickNav.click(function(){
  $(this).find('.dropview').toggleClass('on');
  $(this).siblings().find('.dropview').removeClass('on');
  $(this).find('.explanation').slideToggle();
  $(this).siblings().find('.explanation').slideUp();
});
// Detail count
var plus = $('.plus');
plus.click(function(){
  var num = parseInt($(this).prev().text());
  num++;
  $(this).prev().text(num);
});
var minus = $('.minus');
minus.click(function(){
  var num = parseInt($(this).next().text());
  num--;
  if(num < 1){
    num = 1;
  };
  $(this).next().text(num);
});

// mypage
let lookUp = $('.lookup .flex li');
lookUp.click(function(){
  lookUp.removeClass('on');
  $(this).addClass('on');
});
// mypage tab click event
let myPageTab = $('.mytablist');
myPageTab.click(function(){
  myPageTab.removeClass('on');
  $('.reviewlist').removeClass('on');
  $(this).addClass('on');
});
let reviewList = $('.reviewlist');
reviewList.click(function(){
  myPageTab.removeClass('on');
  $(this).addClass('on');
});
// mypage popup
let btnAddShippingAddress = $('.btn_addshippingaddress');
let addAddressPopup = $('.add_address_popup_wrap');
let btnPopClose = $('.btn_popclose');
btnAddShippingAddress.click(function(){
  addAddressPopup.fadeIn(300);
  $('body').css('overflow-y','hidden');
});
btnPopClose.click(function(){
  addAddressPopup.fadeOut(300);
  $('body').css('overflow-y','auto');
});
// mypage menu click list view
function tabMenu(value){
  $('.conview').hide();
  if(value == 'basicorder'){
    $('.basic_orderlist').fadeIn(300);
  }
  if(value == 'wineofday'){
    $('.wineofday').fadeIn(300);
  }
  if(value == 'monthly'){
    $('.monthly').fadeIn(300);
  }
  if(value == 'wineauction'){
    $('.wineauction').fadeIn(300);
  }
  if(value == 'mywinereview'){
    $('.mywinereview').fadeIn(300);
    $('.mobile_tab ul li').removeClass('on');
  }
  if(value == 'editinfo'){
    $('.editinfo').fadeIn(300);
  }
  if(value == 'editpassword'){
    $('.editpassword').fadeIn(300);
  }
  if(value == 'shippingaddress'){
    $('.shippingaddress').fadeIn(300);
  }
  if(value == 'withdrawal'){
    $('.withdrawal').fadeIn(300);
  }
  $('.m-nav').sly('reload');
};
// mypage product detail & reivew view
let qrDetail = $('.qr_detail');
let basicDetail = $('.basic_detail');
let btnReview = $('.btn_review');
qrDetail.click(function(){
  $('.conview').hide();
  $('.reservation_visit').fadeIn(300);
});
basicDetail.click(function(){
  $('.conview').hide();
  $('.reservation_shipping').fadeIn(300);
});
btnReview.click(function(){
  $('.conview').hide();
  $('.tastingnote').fadeIn(300);
});
