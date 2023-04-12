function age_calculator () {
	var user_input = document.getElementById("date_of_birth").value;
	if (user_input == null || user_input == '') {
		document.getElementById("message").innerHTML="Choose a date!";
		return false;
	}
	var dob = new Date(user_input);

	var dob_year = dob.getFullYear();
	var dob_month = dob.getMonth() + 1;
	var dob_date = dob.getDate();

	var now = new Date();
	var current_year = now.getFullYear();
	var current_month = now.getMonth() + 1;
	var current_date = now.getDate();

	var age = {};
	var age_string = "";

	year_age = current_year - dob_year;

	if (current_month >= dob_month) {
		var month_age = current_month - dob_month;
	} else {
		year_age--;
		var month_age = 12 + current_month - dob_month;
	}

	if (current_date >= dob_date) {
		var date_age = current_date - dob_date;
	} else {
		month_age--;
		var date_age = 31 + current_date - dob_date;
		if (month_age < 0) {
			month_age = 11;
			year_age--;
		}
	}
	age = {
		years:year_age,
		months:month_age,
		days:date_age
	};
	if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
		age_string = age.years + " years, " + age.months + " months, and " + age.days + " days old.";
	}
	else if ((age.years == 0) && (age.months == 0) && (age.days > 0)) {
		age_string = "Only " + age.days + " days old!";
	}
	else if ((age.years > 0) && (age.months == 0) && (age.days == 0)) {
		age_string = age.years + " years old. Happy Birthday!!";
	}
	else if ((age.years > 0) && (age.months > 0) && (age.days == 0)) {
		age_string = age.years + " years and " + age.months + " months old.";
	}
	else if ((age.years == 0) && (age.months == 0) && (age.days > 0)) {
		age_string = age.months + " months and " + age.days + " days old.";
	}
	else if ((age.years > 0) && (age.months == 0) && (age.days > 0)) {
		age_string = age.years + " years, and" + age.days + " days old.";
	}
	else if ((age.years == 0) && (age.months > 0) && (age.days == 0)) {
		age_string = age.months + " months old.";
	} else {
		age_string = "Welcome to Earth! It is your first day on Earth!";
	}
	return document.getElementById("result").innerHTML = age_string;
}
