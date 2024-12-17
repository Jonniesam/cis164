"use strict";

$(document).ready(() => {
    // Preload images
    $("#image_list a").each((index, element) => {
        const swappedImage = new Image();
        swappedImage.src = $(element).attr("href");
    });

    // Set up event handlers for links
    $("#image_list a").click(evt => {
        // Prevent the default behavior of the link 
        evt.preventDefault();

        const link = evt.currentTarget;

        // Move focus to the clicked thumbnail immediately
        $(link).focus();

        // Fade out the current image and caption
        $("#caption, #image").fadeOut(1000, () => {
            // Update the image and caption after fade-out completes
            const imageURL = $(link).attr("href");
            $("#image").attr("src", imageURL);

            const caption = $(link).attr("title");
            $("#caption").text(caption);

            // Fade in the new image and caption
            $("#caption, #image").fadeIn(1000);
        });
    });

    // Move focus to the first thumbnail initially
    $("li:first-child a").focus();
});