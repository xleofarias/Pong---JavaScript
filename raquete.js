//Códigos da Raqueta

//Variáveis da minha raquete
let xRaquete = 5;
let yRaquete = 150;

//Variáveis da raquete do Oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente;

let colidiu = false;

//Diâmetro das raquetes
let raqueteComprimento = 10;
let raqueteAltura = 90;

function mostraRaquete (x,y) {
  
  rect(x, y, raqueteComprimento, raqueteAltura);

}

function movimentaRaquete () {
   
  if (keyIsDown(UP_ARROW)){
     yRaquete -= 6
   }
  
  if (keyIsDown(DOWN_ARROW)){
     yRaquete += 6
  }
  
}

function verificaColisaoRaquete () {
  if (xBolinha - raio < xRaquete + raqueteComprimento  
    && yBolinha - raio < yRaquete + raqueteAltura 
    && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
    raquetada.play(0,1,0.6);
  }

}

function verificaColisaoRaquete(x, y) {
  colidiu =
  collideRectCircle (x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play(0,1,0.6);
  }
  
}

function movimentaRaqueteOponente () {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
  
  
  //if (keyIsDown(87)){
     //yRaqueteOponente -= 6
   //}
  
  //if (keyIsDown(83)){
     //yRaqueteOponente += 6
  //}
  
}