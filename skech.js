// O Paradoxo da Terra 2026
// Uma jornada reflexiva sobre o equilíbrio entre o Agro e o Meio Ambiente

let stage = 1; // 1: Dilemas, 2: Germinação/Visualização, 3: O Questionamento
let currentDilemma = 0;
let techScore = 0;   // Pontuação de Produção/Tecnologia
let natureScore = 0; // Pontuação de Preservação/Natureza

// Árvore Fractal
let treeGrowth = 0;

let dilemas = [
  {
    pergunta: "DILEMA 01: Uma nova praga ameaça 60% da safra de grãos da região.",
    opcaoA: "A) Aplicar defensivo químico pesado de ação imediata para garantir o alimento.",
    opcaoB: "B) Usar controle biológico lento, aceitando perder metade da produção deste ano.",
    valA: [30, 5],  // [tech, nature]
    valB: [5, 30]
  },
  {
    pergunta: "DILEMA 02: Uma área de mata nativa está em cima do solo mais fértil da fazenda.",
    opcaoA: "A) Expandir a lavoura ali para alimentar mais pessoas e aumentar a eficiência.",
    opcaoB: "B) Isolar a área como reserva intocável, reduzindo o potencial econômico.",
    valA: [35, 0],
    valB: [0, 35]
  },
  {
    pergunta: "DILEMA 03: Para adubação do solo em larga escala no ano de 2026:",
    opcaoA: "A) Fertilizantes sintéticos de alta potência que acidificam o solo a longo prazo.",
    opcaoB: "B) Compostagem orgânica regenerativa que exige o triplo de tempo e maquinário.",
    valA: [25, 10],
    valB: [10, 25]
  }
];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(10, 12, 18);
  
  if (stage === 1) {
    drawStage1();
  } else if (stage === 2) {
    drawStage2();
  } else if (stage === 3) {
    drawStage3();
  }
}

// ETAPA 1: O TRIBUNAL DOS DILEMAS
function drawStage1() {
  // Cabeçalho da Experiência
  textAlign(CENTER);
  textSize(14);
  fill(0, 255, 150, 150);
  text("SISTEMA DE AVALIAÇÃO DE IMPACTO PLANETÁRIO // AGRINHO 2026", width/2, 40);
  
  stroke(0, 255, 150, 50);
  line(50, 60, width - 50, 60);
  
  // Exibição do Dilema Atual
  let d = dilemas[currentDilemma];
  
  noStroke();
  fill(255);
  textSize(18);
  textAlign(LEFT, TOP);
  textWrap(WORD);
  text(d.pergunta, 80, 130, width - 160);
  
  // Caixas de Opções Interativas (Visual Estilo Simulador Simulado)
  drawOptionBox(80, 260, width - 160, 80, d.opcaoA, isMouseOver(80, 260, width - 160, 80));
  drawOptionBox(80, 380, width - 160, 80, d.opcaoB, isMouseOver(80, 380, width - 160, 80));
  
  // Instrução Inferior
  textAlign(CENTER);
  textSize(11);
  fill(100, 120, 140);
  text("[ Escolha uma alternativa clicando sobre ela com o cursor ]", width/2, 540);
}

function drawOptionBox(x, y, w, h, txt, hover) {
  if (hover) {
    fill(20, 35, 45);
    stroke(0, 255, 150);
  } else {
    fill(15, 18, 25);
    stroke(40, 55, 75);
  }
  strokeWeight(1);
  rect(x, y, w, h, 4);
  
  noStroke();
  fill(hover ? 0 : 255, 255, hover ? 200 : 255);
  textSize(14);
  textAlign(LEFT, CENTER);
  text(txt, x + 20, y + h/2, w - 40);
}

// ETAPA 2: A RESPOSTA DA MATRIZ (GERMINAÇÃO FRACTAL)
function drawStage2() {
  textAlign(CENTER);
  textSize(16);
  fill(255, 180);
  text("MOLDANDO O ECOSSISTEMA COM BASE NAS SUAS DECISÕES...", width/2, 50);
  
  // Crescimento Progressivo da Árvore
  if (treeGrowth < 1) treeGrowth += 0.005;
  
  // Move a origem para a base do tronco
  push();
  translate(width / 2, height - 100);
  
  // Define o estilo da árvore baseado nos scores do aluno
  let totalTech = techScore;
  let totalNature = natureScore;
  let ratio = totalTech / (totalTech + totalNature || 1);
  
  // Cores dinâmicas da estrutura corporativa/natural
  let branchColor = color(
    map(ratio, 0, 1, 50, 0),     // R
    map(ratio, 0, 1, 230, 150),  // G
    map(ratio, 0, 1, 100, 255)   // B
  );
  
  stroke(branchColor);
  strokeWeight(map(treeGrowth, 0, 1, 1, 10));
  
  // Chamada recursiva para gerar os galhos da árvore do paradoxo
  branch(140 * treeGrowth, ratio);
  pop();
  
  // Transição automática de etapa ao fim do crescimento
  if (treeGrowth >= 1) {
    fill(0, 255, 150);
    noStroke();
    text("PROJEÇÃO CONCLUÍDA. CLIQUE PARA ENCARAR O RESULTADO.", width/2, height - 40);
  }
}

// Lógica de Geometria Fractal Avançada
function branch(len, ratio) {
  line(0, 0, 0, -len);
  translate(0, -len);
  
  if (len > 15) {
    // Se pendeu para a tecnologia, os ângulos são rígidos (quadrados), se pendeu para a natureza são abertos e fluidos
    let angleRight = map(ratio, 0, 1, PI / 4, PI / 8); 
    let angleLeft = map(ratio, 0, 1, PI / 3, PI / 8);
    
    push();
    rotate(angleRight);
    branch(len * 0.7, ratio);
    pop();
    
    push();
    rotate(-angleLeft);
    branch(len * 0.7, ratio);
    pop();
  } else {
    // Renderiza folhas ou terminais cibernéticos nas pontas
    noStroke();
    if (ratio > 0.65) {
      fill(0, 150, 255, 200); // Pontas frias/tecnológicas
      rect(-3, -3, 6, 6);
    } else if (ratio < 0.35) {
      fill(0, 255, 100, 200); // Pontas puramente selvagens
      ellipse(0, 0, 8, 4);
    } else {
      fill(255, 215, 0, 220); // Frutos dourados do perfeito equilíbrio sustentável
      ellipse(0, 0, 8, 8);
    }
  }
}

// ETAPA 3: O QUESTIONAMENTO CRÍTICO (A PROVOCAÇÃO)
function drawStage3() {
  let totalTech = techScore;
  let totalNature = natureScore;
  let ratio = totalTech / (totalTech + totalNature || 1);
  
  stroke(255, 50, 50, 50);
  line(50, 80, width-50, 80);
  
  noStroke();
  textAlign(CENTER);
  textSize(22);
  fill(255);
  text("O VEREDITO DA TERRA", width/2, 60);
  
  textSize(16);
  textAlign(CENTER, TOP);
  textWrap(WORD);
  
  // O sistema avalia as escolhas e cospe uma provocação filosófica desconfortável
  let perguntaFilosofica = "";
  
  if (ratio > 0.65) {
    fill(255, 100, 100);
    perguntaFilosofica = "Sua fazenda atingiu níveis recordes de produtividade e tecnologia para 2026. A humanidade não passará fome hoje. Mas responda aos avaliadores: De que serve alimentar bocas humanas se o preço pago foi silenciar permanentemente o canto dos pássaros e mecanizar o solo até a morte de sua alma?";
  } else if (ratio < 0.35) {
    fill(100, 200, 255);
    perguntaFilosofica = "Seu respeito à natureza foi impecável. A floresta está intocada, os rios estão puros. Porém, olhe para as cidades em crescimento: Seu ecossistema falhou em produzir. Como pretendes salvar o planeta preservando as árvores enquanto condena a sua própria espécie à escassez de recursos e à fome?";
  } else {
    fill(0, 255, 150);
    perguntaFilosofica = "Você encontrou a zona cinzenta do equilíbrio perfeito entre produção e sustentabilidade. Mas questione-se: Manter esse equilíbrio exige vigilância eterna e abdicação de lucros máximos imediatos. O ser humano moderno está realmente preparado para controlar a sua ganância em prol do amanhã?";
  }
  
  text(perguntaFilosofica, 100, 160, width - 200);
  
  // Estatísticas cruas no rodapé da análise
  fill(120, 140, 160);
  textSize(13);
  text("DNA do seu Futuro: " + int(ratio*100) + "% Foco em Produção Industrial / " + int((1-ratio)*100) + "% Foco em Proteção Ambiental.", width/2, 440);
  
  // Botão Reiniciar
  stroke(40, 55, 75);
  fill(15, 18, 25);
  rect(width/2 - 80, 490, 160, 40, 4);
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  text("REINICIAR ANÁLISE", width/2, 510);
}

// CONTROLADORES DE FLUXO E CLIQUES
function mousePressed() {
  if (stage === 1) {
    let d = dilemas[currentDilemma];
    
    // Clique Opção A
    if (isMouseOver(80, 260, width - 160, 80)) {
      techScore += d.valA[0];
      natureScore += d.valA[1];
      avancarDilema();
    }
    // Clique Opção B
    else if (isMouseOver(80, 380, width - 160, 80)) {
      techScore += d.valB[0];
      natureScore += d.valB[1];
      avancarDilema();
    }
  } 
  else if (stage === 2 && treeGrowth >= 1) {
    stage = 3;
  } 
  else if (stage === 3) {
    if (isMouseOver(width/2 - 80, 490, 160, 40)) {
      // Reseta tudo
      stage = 1;
      currentDilemma = 0;
      techScore = 0;
      natureScore = 0;
      treeGrowth = 0;
    }
  }
}

function avancarDilema() {
  if (currentDilemma < dilemas.length - 1) {
    currentDilemma++;
  } else {
    stage = 2; // Vai para a renderização da árvore fractal
  }
}

function isMouseOver(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}
