$(".calendar").on("click", function (e) { // Takes an date and hashtag input.
	e.preventDefault();

	let date_clicked = ""
	date_clicked = e.target.id
	document.getElementById("dateoutput").innerHTML = date_clicked;
});

$(".filter").on("change", function (e) { // Takes an date and hashtag input.
	hashtag = $(".filter").val();
	document.getElementById("hashtagoutput").innerHTML = hashtag
});