document.addEventListener('DOMContentLoaded', () => {

  // DEFINIÇÃO DOS DONS DO ESPÍRITO SANTO E DESCRIÇÕES
  const giftsInfo = {
    'Conselho': 'O Dom do Conselho lhe concede a sensibilidade de discernir os caminhos mais sábios e oferecer orientações valiosas para as pessoas ao seu redor.',
    'Fortitude': 'O Dom da Fortaleza lhe dá coragem, resiliência e força para defender seus valores e superar os momentos de provação com fé.',
    'Sabedoria': 'O Dom da Sabedoria lhe ajuda a ver todas as coisas sob a perspectiva do amor de Deus, priorizando a harmonia e a paz.',
    'Piedade': 'O Dom da Piedade fortalece o amor fraternal, a empatia e a conexão sincera com a oração e o cuidado com os outros.',
    'Entendimento': 'O Dom do Entendimento ilumina sua mente para compreender as verdades profundas da vida e os ensinamentos da fé.',
    'Ciência': 'O Dom da Ciência traz discernimento prático e clareza para aplicar o conhecimento com justiça no cotidiano.'
  };

  const steps = document.querySelectorAll('.question-step');
  const resultBox = document.getElementById('quiz-result');
  const giftNameElem = document.getElementById('gift-name');
  const giftDescElem = document.getElementById('gift-desc');
  const restartBtn = document.getElementById('restart-quiz');

  let selectedGifts = [];

  // GERENCIAR CLIQUES NOS BOTÕES DO QUIZ
  document.querySelectorAll('.quiz-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const chosenGift = e.target.getAttribute('data-gift');
      selectedGifts.push(chosenGift);

      const currentStepElem = e.target.closest('.question-step');
      const currentStep = parseInt(currentStepElem.getAttribute('data-step'));

      // Esconde o passo atual
      currentStepElem.classList.remove('active');

      // Avança para o próximo passo ou exibe o resultado
      const nextStepElem = document.querySelector(`.question-step[data-step="${currentStep + 1}"]`);
      if (nextStepElem) {
        nextStepElem.classList.add('active');
      } else {
        showQuizResult();
      }
    });
  });

  // FUNÇÃO PARA EXIBIR O RESULTADO DO QUIZ
  function showQuizResult() {
    const finalGift = selectedGifts[Math.floor(Math.random() * selectedGifts.length)] || 'Sabedoria';
    
    giftNameElem.textContent = finalGift;
    giftDescElem.textContent = giftsInfo[finalGift] || 'Um dom especial para guiar seus passos na fé e na comunidade.';
    
    resultBox.classList.remove('hidden');
  }

  // REINICIAR O QUIZ
  restartBtn.addEventListener('click', () => {
    selectedGifts = [];
    resultBox.classList.add('hidden');
    
    steps.forEach((step, index) => {
      if (index === 0) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  });

  // SUAVE ROLAGEM DOS LINKS DE NAVEGAÇÃO
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

});