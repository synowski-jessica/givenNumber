let range0 = document.querySelector("#range0");
let range1 = document.querySelector("#range1");
let tentatives = document.querySelector("#nbTentatives");
let msg = document.querySelector("#msg");

console.log(range0);
console.log(range1);

let rangeMin = 0;
let rangeMax = 50;
let nbTentatives = 0;

/*function nombreADeviner() {
  let nombreADeviner = parseInt(
    prompt("Joueur1: Ecris un nombre entre 0 et 50 stp")
  );
  console.log(typeof nombreADeviner);
  while (nombreADeviner < 0 || nombreADeviner > 50)
    nombreADeviner = parseInt(
      prompt("Attention, le nombre doit être entre 0 et 50! Recommence")
    );
  console.log(nombreADeviner);
  return nombreADeviner;
}*/

function nombreADeviner() {
  let nombreADeviner = Math.floor(Math.random() * 50);
  console.log(nombreADeviner);
  return nombreADeviner;
}

function didIwin(nombre, nombreUtilisateur) {
  if (nombre == nombreUtilisateur) {
    msg.innerHTML = '<h1>Bravo</h1> <button id="replay">Rejouer</button>';
    let replay = document.querySelector("#replay");
    replay.addEventListener("click", () => {
      window.location = "/";
    });
  } else if (nombre < nombreUtilisateur) {
    msg.innerHTML = "<h1>Le nombre est plus grand!</h1>";
  } else {
    msg.innerHTML = "<h1>Le nombre est plus petit!</h1>";
  }
}

function gamePlay() {
  range0.innerHTML = "<p>" + rangeMin + " < </p>";
  range1.innerHTML = "<p> < " + rangeMax + " </p>";
  tentatives.innerHTML = nbTentatives;

  const nombreToDevine = nombreADeviner();
  let givenNumber = document.querySelector("#givenNumber");
  let btn = document.querySelector("#btn");

  btn.addEventListener("click", function () {
    nbTentatives += 1;
    tentatives.innerHTML = nbTentatives + "/7";

    let nombre = parseInt(givenNumber.value);
    didIwin(nombre, nombreToDevine);

    if (nombre < nombreToDevine && nombre > rangeMin) {
      rangeMin = nombre;
      range0.innerHTML = "<p>" + nombre + " < </p>";
    } else if (nombre > nombreToDevine && nombre < rangeMax) {
      rangeMax = nombre;
      range1.innerHTML = "<p> < " + nombre + " </p>";
    }

    if (nbTentatives > 6) {
      msg.innerHTML =
        '<h1>Tu as perdu</h1><button id="replay">Rejouer</button>';
      let replay = document.querySelector("#replay");
      replay.addEventListener("click", () => {
        window.location = "/";
      });
      let btn = document.getElementById("btn");
      btn.remove();
    }
  });

  return;
}
gamePlay();
