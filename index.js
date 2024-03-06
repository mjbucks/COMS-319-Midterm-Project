fetch("./data.json")
.then(response => response.json())
.then(characters => loadCharacters(characters));

function generateBars(value) {
    let bars = "";
    for(let i = 0; i < value/10; i++) {
      if(i < 7) {
        bars += "<span style='color:red;'>|</span>";
      } else if(i < 14) {
        bars += "<span style='color:yellow;'>|</span>";
      } else if(i < 21){
        bars += "<span style='color:green;'>|</span>";
      } else if(i < 28){
        bars += "<span style='color:blue;'>|</span>";
      } else {
        bars += "<span style='color:purple;'>|</span>";
      }
    }
    return bars;
  }

function loadCharacters(characters) {
    var mainContainer = document.getElementById("characters");

    for (var i = 0; i < characters.characters.length; i++){
        let name = characters.characters[i].name;
        let ability = characters.characters[i].ability;
        let abildesc = characters.characters[i].abildesc;

        let speed = characters.characters[i].stats.speed;
        let luck = characters.characters[i].stats.luck;
        let attack = characters.characters[i].stats.attack;
        let special_attack = characters.characters[i].stats.special_attack;
        let defense = characters.characters[i].stats.defense;
        let special_defense = characters.characters[i].stats.special_defense;
        let hp = characters.characters[i].stats.hp;

        let move1 = characters.characters[i].moves.move1.name;
        let move2 = characters.characters[i].moves.move2.name;
        let move3 = characters.characters[i].moves.move3.name;

        let description = characters.characters[i].description;
        let src = characters.characters[i].picture;

        let div = document.createElement("div");
        div.innerHTML = `
        <h3 id="character_center">${name}</h3>
        <div style="display: flex;">
          <img src=${src} style="margin-right: 20px;">
          <div>
          <h5>Description:</h5>
            <p>${description}</p>
            <h5>Ability: ${ability}</h5>
            <p>${abildesc}</p>
            <h5>Moves:</h5>
            <p>${move1}</p>
            <p>${move2}</p>
            <p>${move3}</p> <br>
          </div>
        </div>
        <h5>Stats:</h5>
        <p>Speed:.......... ${generateBars(speed)} ${speed}</p>
        <p>Luck:........... ${generateBars(luck)} ${luck}</p>
        <p>Attack:......... ${generateBars(attack)} ${attack}</p>
        <p>Special Attack:. ${generateBars(special_attack)} ${special_attack}</p>
        <p>Defense:........ ${generateBars(defense)} ${defense}</p>
        <p>Special Defense: ${generateBars(special_defense)} ${special_defense}</p>
        <p>Health Points:.. ${generateBars(hp)} ${hp}</p> <hr>
        `;
        mainContainer.appendChild(div);

    }
}