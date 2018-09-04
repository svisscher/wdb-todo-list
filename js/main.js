$('input[type="text"]').keypress(function (event) {
  // Trigger on 'Enter' key
  if (event.which === 13) {
    // Add new item to list by inserting user input
    const userInput = $(this).val();
    $('ul').append('<li class="item"><span class="delete">X</span> ' + userInput + '</li>');
    // Empty input field
    $(this).val('');
  }
});

$('#expand').on('click', function () {
  $('input').fadeToggle('400', 'linear');
});

$('li.item').on('click', function () {
  $(this).toggleClass('done');
});

$('span.delete').on('click', function () {
  $(this).parent().fadeOut('400', function () {
    $(this).remove();
  });
});
