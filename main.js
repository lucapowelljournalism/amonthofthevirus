$("body").on("click", function (e) {
	e.preventDefault();

	this_button = e.target.id

	document.getElementById("testoutput").innerHTML = this_button;

});