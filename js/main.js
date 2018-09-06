$('input[type="text"]').keypress(function (event) {
  // Trigger on 'Enter' key
  if (event.which === 13) {
    // Add new item to list by inserting user input
    const userInput = $(this).val();
    $('ul').append('<li class="item"><span class="delete"><i class="far fa-trash-alt"></i></span> ' + userInput + '</li>');
    // Empty input field
    $(this).val('');
  }
});

$('input[type="text"]').on('blur', function () {
  $(this).val('');
});

$('i#expand').on('click', function () {
  $('input').fadeToggle('400', 'linear');
  $(this).toggleClass('i.fas fa-plus-square');
});

$('ul').on('click', 'li', function () {
  $(this).toggleClass('done');
});

$('ul').on('click', 'span.delete', function (event) {
  event.stopPropagation();
  $(this).parent().fadeOut('400', function () {
    $(this).remove();
  });
});
