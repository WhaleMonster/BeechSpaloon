$(document).ready(function(){
	var scroller = $(window).height() * 3

	$('.btn-letter').on('click', function(){

		var letter = $(this).text()

		$.ajax({
			url: '/hero/'+letter,
			type: 'GET',
		}).done(function(data){

			$('.heroes').empty();
			var data = JSON.parse(data)

			for(var i = 0; i < data.length; i++){
				$('.heroes').append('<li><button id='+data[i]['id']+' class="btn-select">' + data[i]['name'] + '</button></li>')
			}

			$('.btn-select').on('click', function(){
				var superId = $(this).attr('id')
				$('body').animate({scrollTop: scroller}, 800)

				$.ajax({
					url: '/hero/search/' + superId,
					type: 'GET'
				}).done(function(data){
					var data = JSON.parse(data)
					$('.description').empty();
					$('.photo').empty()

					$('.photo').append('<img src='+data[0]['thumbnail']['path']+"/portrait_uncanny."+data[0]['thumbnail']['extension']+" >")

					$('.description').append(
						"<p class=text-big>Description: </p><p class=text-small>" + data[0]['description'] + "</p><p class=text-big>Appears in </p><p class=text-small>" + data[0]['comics']['available'] + " comics</p><p class=text-big>Featured in </p><p class=text-small>" + data[0]['series']['available'] + " series</p><p class=text-big>Mentioned in</p><p class=text-small> " + data[0]['stories']['available'] + " stories</p><a href=" + data[0]['urls'][0]['url'] + "><button class=btn-link>Comics</button></a>" + '<a href=' + data[0]['urls'][1]['url'] + "><button class=btn-link>Wiki</button></a><br>")
				})
			})
		});
	})

})