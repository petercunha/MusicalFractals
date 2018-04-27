var isSongMenuOpen = false;

$('#selector-toggle').click(function() {
  updateSongMenu()
})

$('.selector-choice').click(function() {
  var file = $(this).attr('file');
  var name = $(this).text();
  $('#audioElement').attr('src', 'resources/' + file)
  $('#now-playing').text(name)
  updateSongMenu()
  updateVisuals()
})

function updateSongMenu() {
  if (isSongMenuOpen) {
    $('#selector').css( 'display', 'none' )
  } else {
    $('#selector').css( 'display', 'block' )
  }
  isSongMenuOpen = !isSongMenuOpen
}

function updateVisuals() {

  $('#loader').css( 'display', 'block' )
  DEF_BRIGHTNESS = 0;

  setTimeout(function () {
    DEF_BRIGHTNESS = 1;
    $('#loader').css( 'display', 'none' )
  }, 5000)
}
