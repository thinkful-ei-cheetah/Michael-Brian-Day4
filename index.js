"use strict";

function updateHeroImg(targetCat) {
  const hero = $(".hero img");

  hero.attr("src", targetCat.attr("src"));
  hero.attr("alt", targetCat.attr("alt"));
}

$(function() {
  $(".thumbnails").on("click", "img", function(event) {
    const targetCat = $(this);
    updateHeroImg(targetCat);
  });

  $(".thumbnails").on("keyup", "a", function(event) {
    if (event.which === 13) {
      const targetCat = $(this).find("img");
      updateHeroImg(targetCat);
    }
  });
});
