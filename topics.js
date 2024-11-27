$(document).ready(function(){
    $(".collapse-btn").click('click', event => {
        $(event.target).next(".collapse-content").toggle(1000);  
    });
  });