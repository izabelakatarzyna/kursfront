const gamePlane = document.querySelector(".gamePlane");

//const wall = document.createElement("div");
//wall.style.cssText = `background: green;
//width: 20%;
//height:20%;
//left:40%;
//top: 20%;
//position: absolute;`;

//gamePlaneDOM.append(wall);

//const wall1 = document.createElement("div");
//wall1.style.cssText = `
//background: green;
//width: 20%;
//height:20%;
//left:30%;
//top: 40%;
//position: absolute;`;

//gamePlaneDOM.append(wall1);
//console.log(wall);

function makeWall(x, y, w, h, type = "wall") {
  //console.log(type);

  //ustaw kolor ściany
  let color = "green";
  if (type == "start") {
    color = "blue";
  }
  if (type == "meta") {
    color = "orange";
  }

  //Tworzymy nowy element html
  const wall = document.createElement("div");
  //do stworzonego elementu dodajemy style
  wall.style.cssText = `background: ${color};
    width: ${w}%;
    height:${h}%;
    left:${x}%;
    top: ${y}%;
    position: absolute;
    `;

  //dodajemy klasy do każdego diva
  //wall.className = type

  if (type != "wall") {
    //jeżeli ściana nie jest zwykłym wallem dodaj jej typ jako klasę po spacji
    wall.className += " " + type;
  }

  gamePlane.append(wall);
}
//makeWall(50, 30, 40, 20);
//makeWall(0, 0, 40, 20);

//tablica map przechowująca tablice zawierające informacje o ścianie. każdy pojedyńczy element tablicy map to jest ściana
const map = [
  [0, 0, 20, 20, "start"],
  [10, 20, 20, 10],
  [20, 30, 20, 10],
  [30, 40, 20, 10],
  [40, 50, 20, 10],
  [50, 60, 20, 10],
  [60, 70, 20, 10],
  [80, 80, 20, 20, "meta"],
];

// pętla pobierająca elementy tablicy map jako wall
for (const wall of map) {
  //w tym miejscy wyciągany jest po kolei każdy element tablicy map jako wall
  makeWall(...wall);
}

//mechanika gry
const game = {
  buttons: {
    start: document.querySelector(".start"),
    meta: document.querySelector(".meta"),
    walls: document.querySelectorAll(".wall"),
  },
  init() {
    game.buttons.start.onclick = function () {
      game.start();
    };
  },
  start() {
    game.buttons.start.onclick = "";
    game.buttons.meta.addEventListener("mousemove", game.metaTrigger);
    gamePlane.addEventListener("mousemove", game.gamePlaneListener);
    for (const wall of game.buttons.walls) {
      wall.addEventListener("mousemove", game.wallListener);
    }
    console.log("GAME STARTED");
  },

  wallListener() {
    e.stopPropagation();
  },
  gamePlaneListener(e) {
    game.over(false);
  },
  metaTrigger() {
    game.over(true);
  },
  over(result) {
    if (result) {
      console.log("YOU WIN");
    } else {
      console.log("YOU LOSE");
    }
    game.buttons.meta.removeEventListener("mousemove", game.metaTrigger);

    gamePlane.removeEventListener("mousemove", game.checkIfOnBoard);
    for (const wall of game.buttons.walls) {
      wall.removeEventListener("mousemove", game.wallListener);
    }
    game.init();
  },
};
game.init();

//komunikaty

const modal = {
  dom: document.createElement("div"),
  init() {
    modal.dom.style.sccText = `
        border: 10px dashed red;
        position: fixed;
        width: 80vw;
        height: 80vh;
        left: 1-vw;
        top: 10vw;
        background: red;
        display: flex;
        flex-direction: column;
        align-items: center:
        justify-content: center;
        `;

    document.body.append(modal.dom);

    const h1 = document.createElement("h1");
    modal1.dom.append(h1);

    const button = document.createElement("button");
    button.innerHTML = "OK";
    modal1.dom.append(button);
  },
  show() {
    modal.dom.style.display = "flex";
  },

  hide() {
    modal.dom.style.display = "none";
  },
};
modal.show();
