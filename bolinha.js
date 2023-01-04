//Código da bolinha

//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let Diametro = 20;
let raio = Diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

function mostraBolinha () {
   circle(xBolinha,yBolinha,Diametro);
  
}

function movimentaBolinha () {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
}

function verificaColisaoBorda () {
  
  if (xBolinha + raio > width || 
      xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
    
  }
  
  if (yBolinha + raio > height || 
      yBolinha - raio < 0) {
    
    velocidadeYBolinha *= -1;
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 25;
    }
}