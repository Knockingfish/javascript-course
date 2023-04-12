const choices = ["1", "2", "3"];
const cpu_choice = null;
const rps = null;

function cpu_player() {
	const random = Math.floor(Math.random() * choices.length);
	return choices[random];
}

const button1 = document.getElementById('rock');
const button2 = document.getElementById('paper');
const button3 = document.getElementById('scissor');

button1.addEventListener('click', function() {
	const player_choice = choices[0];
	const cpu_choice = cpu_player();
	document.getElementById("cpu").innerHTML = "The CPU chooses " + cpu_choice + "!";
	switch (true) {
		case player_choice === cpu_choice:
			document.getElementById("message").innerHTML = "Tie!";
			break;
		case player_choice === "1" && cpu_choice === "3":
		case player_choice === "2" && cpu_choice === "1":
		case player_choice === "3" && cpu_choice === "2":
			document.getElementById("message").innerHTML = "You win!";
			break;
		default:
			document.getElementById("message").innerHTML = "You lose!";
	}
});

button2.addEventListener('click', function() {
	const player_choice = choices[1];
	const cpu_choice = cpu_player();
	document.getElementById("cpu").innerHTML = "The CPU chooses " + cpu_choice + "!";
	switch (true) {
		case player_choice === cpu_choice:
			document.getElementById("message").innerHTML = "Tie!";
			break;
		case player_choice === "1" && cpu_choice === "3":
		case player_choice === "2" && cpu_choice === "1":
		case player_choice === "3" && cpu_choice === "2":
			document.getElementById("message").innerHTML = "You win!";
			break;
		default:
			document.getElementById("message").innerHTML = "You lose!";
	}
});

button3.addEventListener('click', function() {
	const player_choice = choices[2];
	const cpu_choice = cpu_player();
	document.getElementById("cpu").innerHTML = "The CPU chooses " + cpu_choice + "!";
	switch (true) {
		case player_choice === cpu_choice:
			document.getElementById("message").innerHTML = "Tie!";
			break;
		case player_choice === "1" && cpu_choice === "3":
		case player_choice === "2" && cpu_choice === "1":
		case player_choice === "3" && cpu_choice === "2":
			document.getElementById("message").innerHTML = "You win!";
			break;
		default:
			document.getElementById("message").innerHTML = "You lose!";
	}
});
