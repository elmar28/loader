(function() {

	$(function() {
		startLoader.playLoading({
			node: '#wrapper',
			callback: function(){

				alert('load!');

			}
		});
	});

}).call(this);