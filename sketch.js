function setup() {
  createCanvas(600, 400);
  trilha.loop(0,1,0.3);
}

//Desenhos da tela
function draw() {
  background(0);
  
  //Funções da bolinha
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda ();
  
  //Funções da Raquete
  mostraRaquete (xRaquete, yRaquete);
  mostraRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete ();
  movimentaRaqueteOponente ();
  //verificaColisaoRaquete ();
  verificaColisaoRaquete (xRaquete, yRaquete);
  verificaColisaoRaquete (xRaqueteOponente, yRaqueteOponente);
  
  //Funções do Placar
  incluiPlacar();
  marcadorDePontos ();
  
  //Para Bugs
  bolinhaNaoFicaPresa ();
  calculaChanceDeErrar ();
  
}