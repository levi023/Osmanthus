$(document).ready(function () {
	draw();
});

function draw() {
	let sHtml = "";
	for(let i in PLANT) {
		let obj = PLANT[i];
		let img = "<td>";
		img += "<div class='products' style='background-image: url(./images/PLANT_" + i.padStart(2, "0") + ".webp);'>";
		img += "</div>";
		img += "</td>";
		
		let content = "<td class='longest' colspan='2'>";
		content += "<span>";
		content += i.padStart(2, "0")
		content += "</span>";
		content += "<span>";
		content += obj.name;
		content += "</span>";
		content += "<span>";
		content += "【植物照顧特別注意事項】";
		content += "</span>";
		content += "<span>";
		content += obj.remind;
		content += "</span>";
		content += "</td>";
							
		sHtml += "<tr>";
		if (i % 2 == 0) {
			sHtml += content;
			sHtml += img;
		}
		else {
			sHtml += img;
			sHtml += content;
		}
		sHtml += "</tr>";
	}
	$("#products tbody").html(sHtml);
}