
let monsterFood = $('.monster-food');
let trashFood = $('.trash-food');
let monsterImg = $('.monster img');
let fat = $('#fat');
let sugar = $('#sugar');
let fiber = $('#fiber');
let winScreen = $('.win-screen');
let winImg = $('.win-screen img');

let fatCount = 10;
let sugarCount = 10;
let fiberCount = 10;
let timer = 25;

let startTimer = () => {
  setInterval(() => {
    if (timer > 0) {
      timer -= 1;
      $('.seconds').text(timer)
    } else {
      $('.conveyor > div').css('opacity', '0');
      $('.top-row p').css('color', 'red');
      $('.monster img').css('transform', 'translate(-5em, 30em)');
    }
  }, 1000);
}

$('#start').on('click', startTimer);
$('#start').on('click', () => {
  $('.conveyor div').css('animation', 'food-slide 35s linear infinite');
  $('#start').css('opacity', '0');
});


setInterval(() => {
  if (monsterImg.attr('src') === 'imgs/monster-closed.png') {
    monsterImg.attr('src', 'imgs/monster-open.png');
  } else {
    monsterImg.attr('src', 'imgs/monster-closed.png');
  }
}, 500);

setInterval(() => {
  if (winImg.attr('src') === 'imgs/monster-closed.png') {
    winImg.attr('src', 'imgs/monster-open.png');
  } else {
    winImg.attr('src', 'imgs/monster-closed.png');
  }
}, 500);

$('.friedchicken-good').on('click', () => {
  $('.friedchicken').css('opacity', '0');
  setTimeout(() => {
    monsterFood.attr('src', 'imgs/friedchicken.jpg');
    monsterFood.css('opacity', '1');
    trashFood.attr('src', '');
  }, 300);
  fatCount -= 4;
  sugarCount -= 2;
  fiberCount -= 0;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
  if (fatCount <= 0 && sugarCount <= 0 && fiberCount <= 0) {
    setTimeout(() => {
      monsterFood.css('opacity', '0');
      trashFood.css('opacity', '0');
      winScreen.css('display', 'block');
      $('#grid-main').css('display', 'none');
    }, 600);
  }
});

$('.friedchicken-bad').on('click', () => {
  $('.friedchicken').css('opacity', '0');
  setTimeout(() => {
    trashFood.attr('src', 'imgs/friedchicken.jpg');
    trashFood.css('opacity', '1');
    monsterFood.attr('src', '');
  }, 300);
  fatCount += 4;
  sugarCount += 2;
  fiberCount += 0;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.orange-good').on('click', () => {
  $('.orange').css('opacity', '0');
  setTimeout(() => {
    monsterFood.attr('src', 'imgs/orange.png');
    monsterFood.css('opacity', '1');
    trashFood.attr('src', '');
  }, 300);
  fatCount -= 0;
  sugarCount -= 3;
  fiberCount -= 0;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
  if (fatCount <= 0 && sugarCount <= 0 && fiberCount <= 0) {
    setTimeout(() => {
      monsterFood.css('opacity', '0');
      trashFood.css('opacity', '0');
      winScreen.css('display', 'block');
      $('#grid-main').css('display', 'none');
    }, 600);
  }
});

$('.orange-bad').on('click', () => {
  $('.orange').css('opacity', '0');
  setTimeout(() => {
    trashFood.attr('src', 'imgs/orange.png');
    trashFood.css('opacity', '1');
    monsterFood.attr('src', '');
  }, 300);
  fatCount += 0;
  sugarCount += 3;
  fiberCount += 0;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.salad-good').on('click', () => {
  $('.salad').css('opacity', '0');
  setTimeout(() => {
    monsterFood.attr('src', 'imgs/salad.jpeg');
    monsterFood.css('opacity', '1');
    trashFood.attr('src', '');
  }, 300);
  fatCount -= 2;
  sugarCount -= 1;
  fiberCount -= 4;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
  if (fatCount <= 0 && sugarCount <= 0 && fiberCount <= 0) {
    setTimeout(() => {
      monsterFood.css('opacity', '0');
      trashFood.css('opacity', '0');
      winScreen.css('display', 'block');
      $('#grid-main').css('display', 'none');
    }, 600);
  }
});

$('.salad-bad').on('click', () => {
  $('.salad').css('opacity', '0');
  setTimeout(() => {
    trashFood.attr('src', 'imgs/salad.jpeg');
    trashFood.css('opacity', '1');
    monsterFood.attr('src', '');
  }, 300);
  fatCount += 2;
  sugarCount += 1;
  fiberCount += 4;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.melon-good').on('click', () => {
  $('.melon').css('opacity', '0');
  setTimeout(() => {
    monsterFood.attr('src', 'imgs/melon.png');
    monsterFood.css('opacity', '1');
    trashFood.attr('src', '');
  }, 300);
  fatCount -= 0;
  sugarCount -= 2;
  fiberCount -= 3;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
  if (fatCount <= 0 && sugarCount <= 0 && fiberCount <= 0) {
    setTimeout(() => {
      monsterFood.css('opacity', '0');
      trashFood.css('opacity', '0');
      winScreen.css('display', 'block');
      $('#grid-main').css('display', 'none');
    }, 600);
  }
});

$('.melon-bad').on('click', () => {
  $('.melon').css('opacity', '0');
  setTimeout(() => {
    trashFood.attr('src', 'imgs/melon.png');
    trashFood.css('opacity', '1');
    monsterFood.attr('src', '');
  }, 300);
  fatCount += 0;
  sugarCount += 2;
  fiberCount += 3;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.pizza-good').on('click', () => {
  $('.pizza').css('opacity', '0');
  setTimeout(() => {
    monsterFood.attr('src', 'imgs/pizza.png');
    monsterFood.css('opacity', '1');
    trashFood.attr('src', '');
  }, 300);
  fatCount -= 4;
  sugarCount -= 1;
  fiberCount -= 0;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.pizza-bad').on('click', () => {
  $('.pizza').css('opacity', '0');
  setTimeout(() => {
    trashFood.attr('src', 'imgs/pizza.png');
    trashFood.css('opacity', '1');
    monsterFood.attr('src', '');
  }, 300);
  fatCount += 4;
  sugarCount += 1;
  fiberCount += 0;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.kiwi-good').on('click', () => {
  $('.kiwi').css('opacity', '0');
  setTimeout(() => {
    monsterFood.attr('src', 'imgs/kiwi.png');
    monsterFood.css('opacity', '1');
    trashFood.attr('src', '');
  }, 300);
  fatCount -= 0;
  sugarCount -= 2;
  fiberCount -= 2;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.kiwi-bad').on('click', () => {
  $('.kiwi').css('opacity', '0');
  setTimeout(() => {
    trashFood.attr('src', 'imgs/kiwi.png');
    trashFood.css('opacity', '1');
    monsterFood.attr('src', '');
  }, 300);
  fatCount += 0;
  sugarCount += 2;
  fiberCount += 2;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.bread-good').on('click', () => {
  $('.bread').css('opacity', '0');
  setTimeout(() => {
    monsterFood.attr('src', 'imgs/bread.png');
    monsterFood.css('opacity', '1');
    trashFood.attr('src', '');
  }, 300);
  fatCount -= 2;
  sugarCount -= 2;
  fiberCount -= 2;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.bread-bad').on('click', () => {
  $('.bread').css('opacity', '0');
  setTimeout(() => {
    trashFood.attr('src', 'imgs/bread.png');
    trashFood.css('opacity', '1');
    monsterFood.attr('src', '');
  }, 300);
  fatCount += 2;
  sugarCount += 2;
  fiberCount += 2;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});



$('.burger-good').on('click', () => {
  $('.burger').css('opacity', '0');
  setTimeout(() => {
    monsterFood.attr('src', 'imgs/burger.png');
    monsterFood.css('opacity', '1');
    trashFood.attr('src', '');
  }, 300);
  fatCount -= 5;
  sugarCount -= 3;
  fiberCount -= 1;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.burger-bad').on('click', () => {
  $('.burger').css('opacity', '0');
  setTimeout(() => {
    trashFood.attr('src', 'imgs/burger.png');
    trashFood.css('opacity', '1');
    monsterFood.attr('src', '');
  }, 300);
  fatCount += 5;
  sugarCount += 3;
  fiberCount += 1;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.strawberry-good').on('click', () => {
  $('.strawberry').css('opacity', '0');
  setTimeout(() => {
    monsterFood.attr('src', 'imgs/strawberry.png');
    monsterFood.css('opacity', '1');
    trashFood.attr('src', '');
  }, 300);
  fatCount -= 0;
  sugarCount -= 3;
  fiberCount -= 2;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});

$('.strawberry-bad').on('click', () => {
  $('.strawberry').css('opacity', '0');
  setTimeout(() => {
    trashFood.attr('src', 'imgs/strawberry.png');
    trashFood.css('opacity', '1');
    monsterFood.attr('src', '');
  }, 300);
  fatCount += 0;
  sugarCount += 3;
  fiberCount += 2;
  fat.text(fatCount)
  sugar.text(sugarCount);
  fiber.text(fiberCount);
});
