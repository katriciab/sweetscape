$(document).ready(function() {
	<!-- Natural language input script -->
		var nlform = new NLForm(document.getElementById('nl-form'));

	<!-- Instagram script -->
	var pictureLimit = (window.innerWidth < 768) ? 8 : Math.floor($('#instafeed').width()/150) * 2;
	var feed = new Instafeed({
		get: 'user',
		userId: 632402179,
		accessToken: '1163706720.4d3eb81.924672c4dbe54566a9a0860cd06dbcdd',
		resolution: 'thumbnail',
		limit: pictureLimit,
		template: '<a href="{{link}}" target="_blank"><img src="{{image}}" class="instapic"/></a>'
	});
	feed.run();

	<!-- Scroller script -->
	var servicesScrollPos = document.getElementById("products").scrollTop;
	var scrollToTopDiv = $('.scroll-to-top');
	scrollToTopDiv.hide();

	var scrollTopFunction = function() {
		var browserScrollPos = $(document).scrollTop();
		if (browserScrollPos == 0) {
			scrollToTopDiv.fadeOut();
		} else if (browserScrollPos > servicesScrollPos) {
			scrollToTopDiv.fadeIn();
		}
	};

	$(window).scroll(scrollTopFunction);
});
