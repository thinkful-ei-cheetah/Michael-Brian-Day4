"use strict";

function updateHeroImg(target) {
  const hero = $('.hero img');
  hero.attr('src', target.attr('src'));
  hero.attr('alt', target.attr('rel'));
}

$(function () {

  $(".thumbnails").on("click", "img", function(event) {
    const targetCat = $(this);
    updateHeroImg(targetCat);
  });
  
  $('.thumbnails').on('keyup', 'a', function(event) {
    if (event.which === 13) {
      const targetCat = $(this).find('img');
      updateHeroImg(targetCat);
    }
  });
  
});
