let hashtag = " "
let date_clicked = " "

$(".calendar").on("click", function (e) { // Takes an date and hashtag input.
	e.preventDefault();

	date_clicked = e.target.id
	document.getElementById("dateoutput").innerHTML = date_clicked;

	if (hashtag != " " & date_clicked != " ") {
		console.log("Publishing corresponding tweets!")
	};
});

$(".filter").on("change", function (e) { // Takes an date and hashtag input.
	hashtag = $(".filter").val();
	document.getElementById("hashtagoutput").innerHTML = hashtag

	if (hashtag != " " & date_clicked != " ") {
		console.log("Publishing corresponding tweets!")
	};
});