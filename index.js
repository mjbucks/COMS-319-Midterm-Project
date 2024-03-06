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
  
  function getBoxColor(move) {
    if(move.physical > move.special){
        color = "#D3494E";
    }
    else if(move.physical < move.special){
        color = "#658CBB";
    }
    else{
        color = "#7BB274";
    }

    
    return color;
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

        let move1name = characters.characters[i].moves.move1.name;
        let move2name = characters.characters[i].moves.move2.name;
        let move3name = characters.characters[i].moves.move3.name;

        let move1desc = characters.characters[i].moves.move1.description;
        let move2desc = characters.characters[i].moves.move2.description;
        let move3desc = characters.characters[i].moves.move3.description;

        let move1 = characters.characters[i].moves.move1;
        let move2 = characters.characters[i].moves.move2;
        let move3 = characters.characters[i].moves.move3;

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
        

            <div class="box" style="background-color:${getBoxColor(move1)};">
                <h6>${move1name}</h6>
                <p>${move1desc}</p>
            </div>

            <div class="box" style="background-color:${getBoxColor(move2)};">
                <h6>${move2name}</h6>
                <p>${move2desc}</p>
            </div>

            <div class="box" style="background-color:${getBoxColor(move3)};">
                <h6>${move3name}</h6>
                <p>${move3desc}</p>
            </div><br>
          </div>
        </div>
        <h5 style="padding-top:2%">Stats:</h5>
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