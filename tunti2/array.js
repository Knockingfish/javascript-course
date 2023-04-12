const games = ["Ghost Trick", "Flink", "Windjammers", "2hu", "Rival Schools", "My Summer Vacation", "Cruelty Squad"];
let long = games.length;

let text = "<ul>";
for (let i = 0; i < long; i++) {
	text += "<li>" + games[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;