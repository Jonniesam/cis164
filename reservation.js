"use strict";

$(document).ready(() => {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

    // Focus on the "Arrival date" text box when the page loads
    $("#arrival_date").focus();

    // Event handler for the submit event
    $("#reservation_form").submit((event) => {
        // Get and trim the values from the form
        let arrivalDate = $("#arrival_date").val().trim();
        let nights = $("#nights").val().trim();
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();

        // Assume form is valid until proven otherwise
        let isValid = true;

        // Check if any required field is empty
        if (arrivalDate === "" || nights === "" || name === "" || email === "" || phone === "") {
            alert("Please fill in all required fields.");
            isValid = false;
        }
        // Check if the number of nights is numeric
        else if (isNaN(nights)) {
            alert("The number of nights must be a numeric value.");
            isValid = false;
        }
        // Validate the email format
        else if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // If any validation fails, prevent form submission and reassign values
        if (!isValid) {
            // Reassign trimmed values back to the form fields
            $("#arrival_date").val(arrivalDate);
            $("#nights").val(nights);
            $("#name").val(name);
            $("#email").val(email);
            $("#phone").val(phone);
            event.preventDefault(); // Prevent form submission
        }
    });
});