$(document).ready(function () {
	$(".titleGreen div").on("click", changeFr);
});

function changeFr(e) {
	let page = $(e.target).attr("data-page");
	$("#aIframe").attr("src", "./" + page + ".html");
}