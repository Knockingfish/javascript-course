var button = document.querySelector("button");

button.addEventListener("click", function() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var message = document.getElementById("message");

	if (name && age) {
		if (age < 18) {
			message.innerHTML = "Hello " + name + ", you are not yet an adult."
		} else {
			message.innerHTML = "Hello " + name + ", you are an adult."
		}
	} else {
		message.innerHTML = "Please enter your name and age.";
	}
});
