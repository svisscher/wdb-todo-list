$('input').keypress(function (e) {
  // Trigger on 'Enter' key
  if (e.which === 13) {
    // Add new item to list by inserting user input
    const input = $('input').val();
    $('ul').append('<li class="item"><span class="delete">X</span>' + input + '</li>');
    // Empty input field
    $('input').val('');
  }
});

$('span#expand').on('click', function () {
  $('input').fadeToggle('400', 'linear');
});

$('li.item').on('click', function () {
  $(this).toggleClass('done');
});

$('span.delete').on('click', function (event) {
  event.stopPropagation();
  $(this).parent().fadeOut('400', function () {
    $(this).remove();
  });
});
