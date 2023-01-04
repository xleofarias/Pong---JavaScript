//Código do Placar

let meusPontos = 0;
let pontosDoOponente = 0;

let chanceDeErrar = 0;

function incluiPlacar () {
  
  //preenchimento
  stroke (255);
  
  //desenhos e cores
  textAlign (CENTER);
  textSize (18);
  fill (color(255, 140, 0));
  rect (150, 10, 40, 20);
  fill(255);
  text (meusPontos, 170, 26);
  fill (color(255, 140, 0));
  rect (430, 10, 40, 20);
  fill(255);
  text (pontosDoOponente, 450, 26);
  
}

function marcadorDePontos () {
  
  if (xBolinha > 590) {
    meusPontos += 1
    ponto.play();
  }
  if (xBolinha <10) {
    pontosDoOponente += 1
    ponto.play(0,1,0.6);
  }
  
}

function calculaChanceDeErrar () {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1;
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40;
    }
  } else {
    chanceDeErrar -= 1;
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35;
    }
  }
}
