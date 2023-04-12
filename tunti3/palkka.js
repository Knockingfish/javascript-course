var button = document.querySelector("button");
button.addEventListener("click", function() {
	var salary = document.getElementById("salary").value;
	var tax = document.getElementById("tax").value;
	var percentage = tax / 100;
	var pay = salary - (salary * percentage);
	document.getElementById("pay").innerHTML = "Palkka on " + pay + ".";
});
