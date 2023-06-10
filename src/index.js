import "./style.css";

const carouselIndicators = document.querySelectorAll(".carousel-indicator");
const carouselItems = document.querySelectorAll(".carousel-item");

carouselIndicators.forEach(function (carouselIndicator) {
  carouselIndicator.addEventListener("click", function () {
    switchCarousel(this, carouselItems);
  });
});

export function switchCarousel(carouselIndicator, carouselItems) {
  const currentIndicator = document.querySelector(".carousel-indicator.active");

  const indicatorIndex = Number(carouselIndicator.dataset.key);

  const currentCarousel = document.querySelector(".carousel-item.active");
  const currentCarouselIndex = Number(currentCarousel.dataset.key);

  console.log(indicatorIndex);
  console.log(currentCarouselIndex);

  if (indicatorIndex !== currentCarouselIndex) {
    currentIndicator.classList.remove("active");

    carouselItems[indicatorIndex].classList.add("fade");
    currentCarousel.classList.remove("active");
    carouselItems[indicatorIndex].classList.add("active");
    carouselIndicator.classList.add("active");
  }
}

const prevControl = document.querySelector(".carousel-control-prev");
prevControl.addEventListener("click", function () {
  const currentCarousel = document.querySelector(".carousel-item.active");
  const currentCarouselIndex = Number(currentCarousel.dataset.key);

  const currentIndicator = document.querySelector(".carousel-indicator.active");

  if (currentCarouselIndex > 0) {
    currentIndicator.classList.remove("active");
    currentCarousel.classList.remove("active");
    carouselItems[currentCarouselIndex - 1].classList.add("active");
    carouselItems[currentCarouselIndex - 1].classList.add("fade");
    carouselIndicators[currentCarouselIndex - 1].classList.add("active");
  }
});

const nextControl = document.querySelector(".carousel-control-next");
nextControl.addEventListener("click", function () {
  const currentCarousel = document.querySelector(".carousel-item.active");
  const currentCarouselIndex = Number(currentCarousel.dataset.key);

  const currentIndicator = document.querySelector(".carousel-indicator.active");

  if (currentCarouselIndex !== carouselItems.length - 1) {
    currentIndicator.classList.remove("active");
    currentCarousel.classList.remove("active");
    carouselItems[currentCarouselIndex + 1].classList.add("active");
    carouselItems[currentCarouselIndex + 1].classList.add("fade");
    carouselIndicators[currentCarouselIndex + 1].classList.add("active");
  }
});
