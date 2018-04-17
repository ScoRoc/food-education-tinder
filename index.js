
let timer = 60
setInterval(() => {
  timer -= 1;
  $('.seconds').text(timer)
}, 1000);

$('.cookie-good').on('click', () => {
  $('.cookie').css({
    'animation': 'none',
    'transform': 'translate(23vw, -30vh)'
  });
})

$('.cookie-bad').on('click', () => {
  $('.cookie').css({
    'animation': 'none',
    'transform': 'translate(23vw, 30vh)'
  });
})

$('.straw-good').on('click', () => {
  $('.strawberry').css({
    'animation': 'none',
    'transform': 'translate(-25vw, -30vh)'
  });
})

$('.straw-bad').on('click', () => {
  $('.strawberry').css({
    'animation': 'none',
    'transform': 'translate(-25vw, 30vh)'
  });
})
