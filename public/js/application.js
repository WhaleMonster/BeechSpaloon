$(document).ready(function(){
	var images = ['../imgs/background1.jpg', '../imgs/background2.jpg', '../imgs/background3.jpg', '../imgs/background4.jpg', '../imgs/background5.jpg', '../imgs/background6.jpg', '../imgs/background7.jpg', '../imgs/background8.jpg', '../imgs/background9.jpg', '../imgs/background10.jpg', '../imgs/background11.jpg', '../imgs/background12.jpg', '../imgs/background13.jpg', '../imgs/background14.jpg', '../imgs/background15.jpg', '../imgs/background16.jpg', '../imgs/background17.jpg', '../imgs/background18.jpg', '../imgs/background19.jpg', '../imgs/background20.jpg'];

	var randomBack1 = images[Math.floor(Math.random() * images.length)];
	var deleterIndex = images.indexOf(randomBack1)
	images.splice(deleterIndex, 1)
	var randomBack2 = images[Math.floor(Math.random() * images.length)];
	var deleterIndex = images.indexOf(randomBack2)
	images.splice(deleterIndex, 1)
	var randomBack3 = images[Math.floor(Math.random() * images.length)];
	var deleterIndex = images.indexOf(randomBack3)
	images.splice(deleterIndex, 1)

	$('html').css({'background-image': 'url(../imgs/' + randomBack3 + ')'});

	$(window).scroll(function(){
	var fromBottomPx = $(window).height() * 3;
    var fromTopPx = $(window).height();
    var scrolledFromtop = $(window).scrollTop();

    	if (scrolledFromtop > fromTopPx){
    		if(scrolledFromtop > fromBottomPx){
        		$('html').css({'background-image': 'url(../imgs/' + randomBack2 + ')'});
        	} else {
    		$('html').css({'background-image': 'url(../imgs/' + randomBack1 + ')'});
    		}
    	} else {
    		$('html').css({'background-image': 'url(../imgs/' + randomBack3 + ')'});
    	}
	});
})