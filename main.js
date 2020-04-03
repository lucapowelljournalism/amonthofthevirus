$(".calendar").on("click", function (e) {
	e.preventDefault();

	let date_clicked = ""
	let hashtag_clicked = ""

	date_clicked = e.target.id

	document.getElementById("dateoutput").innerHTML = date_clicked;


	$(".hashtags").on("click", function (e) {
		e.preventDefault();

		hashtag_clicked = e.target.id

		document.getElementById("hashtagoutput").innerHTML = hashtag_clicked;
		if (date_clicked === "feb15" & hashtag_clicked === "#quarantena") {
			$(".twitter-tweet").removeClass('inactive');
		} else {
			$(".twitter-tweet").addClass('inactive');
		}
	});
});