"use strict";

function handlecatClicks() {
  $(".thumbnails").on("click", "img", function(event) {
    event.stopPropagation();
    const targetCat = $(this).attr("src");
    const otherCat = $(this).attr("alt");

    $(".hero img")
      .attr("src", targetCat)
      .attr("alt", otherCat);
  });
}

$(handlecatClicks);
