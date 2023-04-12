function laske_osuudet() {
	var rent_input = document.getElementById("rent");
	var people_input = document.getElementById("people");
	var shares_output = document.getElementById("shares");

	var rent = rent_input.value;
	var people = people_input.value;

	if (rent && people) {
		var shares = rent / people;
		var list = "<ul>";
		for (var i = 1; i <= people; i++) {
			list += "<li>Henkilö " + i + ": " + shares + "€ kuukaudessa</li>";
		}
		list += "</ul>";
		shares_output.innerHTML = list;
	} else {
		shares_output.innerHTML = "<p>Täytä vuokra ja henkilömäärä ensin!<p>";
	}
}
