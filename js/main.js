// Variables
const items = $('li');
let dragSrcEl = null;

// Functions
function handleDragStart(event) {
  $(this).css('opacity', '0.4');
  dragSrcEl = this;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(event) {
  // Prevent browser default behaviour if applicable
  if (event.preventDefault) {
    event.preventDefault();
  }
  event.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(event) {
  $(this).addClass('over');
}

function handleDragLeave(event) {
  $(this).removeClass('over');
}

function handleDrop(event) {
  // Stop some browsers from redirecting
  if (event.stopPropagation) {
    event.stopPropagation();
  }
  // Do nothing if dropping same item as dragging
  if (dragSrcEl !== this) {
    // Set source's HTML to HTML of item dropped on
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData('text/html');
  }
  return false;
}

function handleDragEnd(event) {
  $(this).css('opacity', '1.0');
  items.removeClass('over');
}

// Vanilla JS: change into jQuery?
[].forEach.call(items, function(item) {
  item.addEventListener('dragstart', handleDragStart, false);
  item.addEventListener('dragenter', handleDragEnter, false);
  item.addEventListener('dragover', handleDragOver, false);
  item.addEventListener('dragleave', handleDragLeave, false);
  item.addEventListener('drop', handleDrop, false);
  item.addEventListener('dragend', handleDragEnd, false);
});

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
