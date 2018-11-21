const slides = document.querySelectorAll(".sliding-box article");

const step = 4750,
  delay = 250;

export { slides, setTheOrder };

function setTheOrder() {
  let index = 2;

  slides.forEach((element, index) => {

    element.style.order = index.toString();

    index++;

    index >= slides.length && (index -= slides.length);
  });

  nextSlide();
}

function nextSlide() {
  moveForward();

  setTimeout(nextSlide, step);
}

function moveForward() {
  let slidingBox = document.querySelector(".sliding-box");

  slidingBox.classList.remove('is-set')
  slidingBox.classList.remove('is-reversing')

  slides.forEach(element => {
    let order = parseInt(element.style.order);

    order--;

    order < 0 && (order += slides.length);

    element.style.order = order.toString();
  });

  setTimeout(() => {
    slidingBox.classList.add("is-set");
  }, delay);
}
