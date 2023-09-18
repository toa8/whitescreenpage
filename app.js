const boxes = document.querySelectorAll(".box");
const container = document.querySelector(".container");

class App {
  constructor() {
    this.searchClickedBox();
    this.userPressedESC();
  }

  fullScreen(color) {
    const elem = document.documentElement;
    elem.requestFullscreen();
    container.style.display = "none";
    document.body.style.backgroundColor = color;
  }

  searchClickedBox() {
    boxes.forEach((el) => {
      el.addEventListener("click", () => {
        if (el.classList.contains("box-white")) {
          this.fullScreen("white");
        }
        if (el.classList.contains("box-black")) {
          this.fullScreen("black");
        }
        if (el.classList.contains("box-green")) {
          this.fullScreen("green");
        }
        if (el.classList.contains("box-blue")) {
          this.fullScreen("blue");
        }
        if (el.classList.contains("box-red")) {
          this.fullScreen("red");
        }
      });
    });
  }

  userPressedESC() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.code === 27) {
        container.style.display = "block";
        document.body.style.backgroundColor = "#f3f3f3";
      }
    });
  }
}

const app = new App();
