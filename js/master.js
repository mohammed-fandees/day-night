class Page {
  constructor(stars, moon, mountain, plateau, river, boat) {
    this.stars = stars;
    this.moon = moon;
    this.mountain = mountain;
    this.plateau = plateau;
    this.river = river;
    this.boat = boat;
  }

  scroll() {
    let position = scrollY;
    this.stars.style.left = `${position}px`;
    this.moon.style.top = `${80 + position * 3}px`;
    this.mountain.style.top = `${position * 1.5}px`;
    this.plateau.style.top = `${position * 1.2}px`;
    this.river.style.top = `${position}px`;
    this.boat.style.cssText = `top: ${position}px; left: ${position * 3}px`;
    
    if (scrollY > 135)
      document.querySelector("main").style.background =
        "linear-gradient(to bottom, #00b2b2, #0e001b)";
    else
      document.querySelector("main").style.background =
        "linear-gradient(to bottom, #000, #0e001b)";
  }
}

onscroll = function () {
  new Page(
    document.querySelector(".stars"),
    document.querySelector(".moon"),
    document.querySelector(".back-mountains"),
    document.querySelector(".mid-mountains"),
    document.querySelector(".river"),
    document.querySelector(".boat")
  ).scroll();
};
