// Scroll.js
// Work with Cookies

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
		if(target != ""){
			$('html, body').stop().animate({
				'scrollTop': $(target).offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
			});
		}
	});

	// Navigation

	$(".hamburger").click(function(){
		$(this).removeClass('active');
		$('.close').addClass('active');
		$(".nav").addClass("opened");
		$("body").addClass("modal-open");
		
	});

	$(".nav .close").click(function(){
		$(this).removeClass('active');
		$('.hamburger').addClass('active');
		$(".nav").removeClass("opened");
		$("body").removeClass("modal-open");
	}); 

	// Отправка заявки
		
	$(".ajax-form").submit(function(event){
		event.preventDefault();
	 
		var form = $(this),
			term = form.serialize(),
			url = form.attr("action");
	 
		var posting = $.post( url, term );
	 
		posting.done(function(data) {
			form.html('<div class="lead medium ajax-form-result">'+data+'</div>');
		});
	});

	// slick

	if($(".block-3 .slider-1").length>0){
		$(".block-3 .slider-1").each(function(index){
			$(this).slick({ 
				dots: false,
				arrows: false,
			});
			
			$(this).parent().find(".slick-prev").click(function(){
				$(this).closest(".block-3").find(".slider-1").slick('slickPrev');
			});
			
			$(this).parent().find(".slick-next").click(function(){
				$(this).closest(".block-3").find(".slider-1").slick('slickNext');
			});			
			
		});
	}
	
	$('.block-3 .slider-1').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".block-3 .slider-1-menu a").removeClass("active");
		$(".block-3 .slider-1-menu a:eq("+nextSlide+")").addClass("active");  
	});

	$(".block-3 .slider-1-menu a").click(function(){
		$(".block-3 .slider-1-menu a").removeClass("active");
		$(this).addClass("active");  
		var slideNum = $(this).index();
		$('.block-3 .slider-1').slick('slickGoTo',slideNum); 
	});		

	if($(".block-12 .slider-2").length>0){
		$(".block-12 .slider-2").each(function(index){
			$(this).slick({ 
				infinite: false,
				dots: false,
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 3,
				variableWidth: true,
				responsive: [
					{
					  breakpoint: 1199.98,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 2, 
					  }
					},
					{
					  breakpoint: 767.98,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						variableWidth: false,
					  }
					}
				]				
			});
			
			$(this).one('setPosition', function(event, slick){
				var realTotal = Math.ceil(slick.slideCount / $(this).slick("slickGetOption","slidesToScroll"));
				$(".block-12 .pagination-value").text("1/"+realTotal);
			});
			
			$(this).on('afterChange', function(event, slick, currentSlide){
				var realTotal = Math.ceil(slick.slideCount / $(this).slick("slickGetOption","slidesToScroll"));
				currentSlide = currentSlide / $(this).slick("slickGetOption","slidesToShow") + 1;
				$(".block-12 .pagination-value").text(currentSlide+"/"+realTotal);
			});
			
			$(this).parent().find(".slick-prev").click(function(){
				$(this).closest(".block-12").find(".slider-2").slick('slickPrev');
			});
			
			$(this).parent().find(".slick-next").click(function(){
				$(this).closest(".block-12").find(".slider-2").slick('slickNext');
			});			
			
		});
	}

	if($(".block-14 .slider-3").length>0){
		$(".block-14 .slider-3").each(function(index){
			$(this).slick({ 
				infinite: false, 
				dots: false,
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				variableWidth: true,
				rows: 2,
				slidesPerRow:1,
				responsive: [
					{
					  breakpoint: 991.98,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1, 
						variableWidth: false,
					  }
					}
				]				
			});
			
			$(this).one('setPosition', function(event, slick){
				var realTotal = Math.ceil(slick.slideCount / $(this).slick("slickGetOption","slidesToScroll"));
				$(".block-14 .pagination-value").text("1/"+realTotal);
			});
			
			$(this).on('afterChange', function(event, slick, currentSlide){
				var realTotal = Math.ceil(slick.slideCount / $(this).slick("slickGetOption","slidesToScroll"));
				currentSlide = currentSlide / $(this).slick("slickGetOption","slidesToShow") + 1;
				$(".block-14 .pagination-value").text(currentSlide+"/"+realTotal);
			});
			
			$(this).parent().find(".slick-prev").click(function(){
				$(this).closest(".block-14").find(".slider-3").slick('slickPrev');
			});
			
			$(this).parent().find(".slick-next").click(function(){
				$(this).closest(".block-14").find(".slider-3").slick('slickNext');
			});			
			
		});
	}
	
	if($(".block-16 .slider-4").length>0){
		$(".block-16 .slider-4").each(function(index){
			$(this).slick({ 
				infinite: false, 
				dots: false,
				arrows: false,
				slidesToShow: 2,
				slidesToScroll: 2,
				variableWidth: true,
				rows: 2,
				slidesPerRow:1,
				responsive: [
					{
					  breakpoint: 991.98,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1, 
						variableWidth: false,
					  }
					}
				]				
			});
			
			$(this).one('setPosition', function(event, slick){
				var realTotal = Math.ceil(slick.slideCount / $(this).slick("slickGetOption","slidesToScroll"));
				$(".block-16 .pagination-value").text("1/"+realTotal);
			});
			
			$(this).on('afterChange', function(event, slick, currentSlide){
				var realTotal = Math.ceil(slick.slideCount / $(this).slick("slickGetOption","slidesToScroll"));
				currentSlide = currentSlide / $(this).slick("slickGetOption","slidesToShow") + 1;
				$(".block-16 .pagination-value").text(currentSlide+"/"+realTotal);
			});
			
			$(this).parent().find(".slick-prev").click(function(){
				$(this).closest(".block-16").find(".slider-4").slick('slickPrev');
			});
			
			$(this).parent().find(".slick-next").click(function(){
				$(this).closest(".block-16").find(".slider-4").slick('slickNext');
			});			
			
		});
	}	

	//Changing Pricing variants Yearly/Monthly

	$(".block-9 .pricing-options input[type=checkbox]").change(function(){
		if($(this).prop("checked")){
			$(this).closest(".block-9 .pricing-options").removeClass("yearly");
			$(this).closest(".block-9 .pricing-options").addClass("monthly");
		} else {
			$(this).closest(".block-9 .pricing-options").addClass("yearly");
			$(this).closest(".block-9 .pricing-options").removeClass("monthly");
		}	
	});		
	
	// Commonly asked questions: open/close
	$(".expand-block .expand-header").click(function(){ 
		if ($(this).closest('.expand-block').hasClass("opened")){
			$(this).closest('.expand-block').removeClass("opened");
		} else{  
			$(this).closest('.expand-block').addClass('opened');   
		}
	});	
	
	// API/Apps left-menu open/close
	$(".menu-block").click(function(){
		if ($(this).hasClass("active")){
			$(this).removeClass("active");
		} else{  
			$(this).addClass('active');   
		}
	});		

	// Show password
	
	$(".js-show-password .show_password").click(function(){
		if($(this).hasClass('opened')){
			$(this).removeClass("opened");
			$(".js-show-password input").text("visibility");
			$(this).prev("input").attr("type","password");
		}else{ 
			$(this).addClass("opened"); 
			$(".js-show-password input").text("visibility_off");
			$(this).prev("input").attr("type","text");
		} 
	});		
	
    $('code.hljs').each(function(i, block) { 
        hljs.lineNumbersBlock(block);
    });
	
	// Гугл карта
	// В HTML нужно воткнуть <script src="//maps.googleapis.com/maps/api/js?key=AIzaSyCwL1fgUC6AMz6et2ejriLjU2wVj11YAK8" type="text/javascript"></script>
	// или wp_enqueue_script("googlemap", 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCwL1fgUC6AMz6et2ejriLjU2wVj11YAK8', array("jquery"), $ver);

	if($("#map").length>0){

		var map, markers_data, markers, marker;
		markers_data = [];
		markers = [];
		
		$(".marker").each(function(){
			var coords = $(this).attr("data-coords").split(",");
			markers_data[markers_data.length] = {coordX:parseFloat(coords[0]),coordY:parseFloat(coords[1]),img:$(this).attr("data-placemark")}
		});

		// Подключаем карту
		var mapOptions = {
			zoom: 14,
			minZoom:3,
			maxZoom:18,
			mapTypeControl: false,
			streetViewControl: false,
			//fullscreenControl:false,
			//scaleControl:false,
			//zoomControl:false,
			
			center: new google.maps.LatLng(55.753282, 37.621816),
			styles: [	{"featureType":"all",		"stylers":[			{"saturation":0},			{"hue":"#e7ecf0"}		]	},	{"featureType":"road",		"stylers":[			{"saturation":-70}		]	},	{"featureType":"transit",		"stylers":[			{"visibility":"off"}		]	},	{"featureType":"poi",		"stylers":[			{"visibility":"off"}		]	},	{"featureType":"water",		"stylers":[			{"visibility":"simplified"},			{"saturation":-60}		]	}]
		};
		map = new google.maps.Map(document.getElementById('map'), mapOptions);
		
		//var bounds = new google.maps.LatLngBounds();
		
		function initMarkers(map, markers_data) {
			for(var i=0; i<markers_data.length; i++) {
				// create markers
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(markers_data[i].coordX,markers_data[i].coordY),
					map: map,
					icon: {
						url: markers_data[i].img, 
						size: new google.maps.Size(22, 33), // размер пикчи
						origin: new google.maps.Point(0,0), 
						anchor: new google.maps.Point(11, 33), // коррекция позиции: половина ширины, высота
						scaledSize: new google.maps.Size(22, 33)
					}
				});

				//bounds.extend(new google.maps.LatLng(markers_data[i].coordX,markers_data[i].coordY));
				
				markers.push(marker);		
			}
			return markers;
		}
		
		// Призываем маркеры на карту
		markers = initMarkers(map, markers_data);

		//map.fitBounds(bounds);
		
		// Приближение карты до маркера
		
		$(".js-zoom-to-marker").click(function(){
			var coords = $(this).attr("data-coords").split(",");
			map.setCenter(new google.maps.LatLng(parseFloat(coords[0]), parseFloat(coords[1])));
			map.setZoom(17);
		});

	}

});
