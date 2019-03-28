'use strict';

function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  }
  return num;
}

function runFizzBuzz(countTo) {
  let results = [];
  for (let i = 1; i <= countTo; i++) {
    let result = fizzbuzz(i);
    let template = `<div class="fizz-buzz-item ${result}">
      <span>${result}</span>
     </div>
    `;
    results.push(template);
  }
  $('.js-results').html(results.join('\n'));
}

$( function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    const form = $(this);
    const input = form.find('input');
    const countTo = input.val();
    runFizzBuzz(countTo);
    input.val('');
  });
});