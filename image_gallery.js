$(document).ready(function() {
    // Step 3: Preload images and captions for each <a> element in the unordered list
    $('#image_list a').each(function() {
        var imgURL = $(this).attr('href'); // Get the image URL from the href attribute
        var caption = $(this).attr('title'); // Get the caption from the title attribute

        // Preload the image
        var img = new Image();
        img.src = imgURL;

        // Store the caption in a data attribute for easy access later
        $(this).data('caption', caption);
    });

    
    $('#image_list a').click(function(evt) {
        // Prevent the default action of the link
        evt.preventDefault();

        // Get the URL and caption for the clicked link
        var imgURL = $(this).attr('href'); 
        var caption = $(this).data('caption'); 

        // Display the image and caption
        $('#image').attr('src', imgURL); // Change the src of the image in the gallery
        $('#caption').text(caption); // Update the caption text
    });
});