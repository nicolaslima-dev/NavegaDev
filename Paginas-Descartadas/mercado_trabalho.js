function generateChecklistFeedback() {
    const feedbackResultDiv = document.getElementById('feedbackResult');
    feedbackResultDiv.innerHTML = ''; // Limpa feedbacks anteriores

    // Obtém o estado de cada checkbox
    const checkKeyword = document.getElementById('checkKeyword').checked;
    const checkObjective = document.getElementById('checkObjective').checked;
    const checkProjects = document.getElementById('checkProjects').checked;
    const checkMetrics = document.getElementById('checkMetrics').checked;
    const checkFormat = document.getElementById('checkFormat').checked;

    let score = 0;
    let messages = [];

    if (checkKeyword) {
        score++;
        messages.push("✅ Ótimo! O uso de palavras-chave aumenta a visibilidade do seu currículo para recrutadores e sistemas ATS.");
    } else {
        messages.push("⚠️ Dica: Inclua palavras-chave relevantes da área (ex: Python, Java, Cloud, Agile) para destacar suas habilidades.");
    }

    if (checkObjective) {
        score++;
        messages.push("✅ Excelente! Um objetivo profissional claro direciona sua aplicação e mostra foco.");
    } else {
        messages.push("⚠️ Dica: Adicione um objetivo profissional conciso e alinhado à vaga desejada.");
    }

    if (checkProjects) {
        score++;
        messages.push("✅ Muito bom! Projetos demonstram sua capacidade prática e proatividade.");
    } else {
        messages.push("⚠️ Dica: Inclua projetos pessoais ou acadêmicos relevantes, com links para GitHub ou portfólio, se tiver.");
    }

    if (checkMetrics) {
        score++;
        messages.push("✅ Fantástico! Quantificar resultados** destaca seu impacto e valor para a empresa.");
    } else {
        messages.push("⚠️ Dica: Sempre que possível, inclua resultados e conquistas quantificáveis para mostrar seu impacto.");
    }

    if (checkFormat) {
        score++;
        messages.push("✅ Perfeito! Um formato limpo e organizado** facilita a leitura e causa uma boa primeira impressão.");
    } else {
        messages.push("⚠️ Dica: Garanta que seu currículo tenha um formato limpo, organizado e fácil de ler.");
    }

    let overallFeedback = '';
    let alertClass = '';

    // Define a mensagem geral e a classe de estilo do alerta com base na pontuação
    if (score === 5) {
        overallFeedback = "🎉 Parabéns! Seu currículo está completo e com grandes chances de sucesso!";
        alertClass = 'alert-success'; // Bootstrap verde para sucesso
    } else if (score >= 3) {
        overallFeedback = "👍 Bom trabalho! Seu currículo já tem uma boa base, mas alguns ajustes podem torná-lo ainda mais forte.";
        alertClass = 'alert-info'; // Bootstrap azul para informação/progresso
    } else {
        overallFeedback = "✍️ Hora de aprimorar! Revise os pontos indicados para ter um currículo mais competitivo.";
        alertClass = 'alert-warning'; // Bootstrap amarelo para atenção
    }

    // Constrói o HTML final para o feedback
    let feedbackHtml = `
        <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
            <h4 class="alert-heading">Feedback do Currículo:</h4>
            <p>${overallFeedback}</p>
            <hr>
            <ul>
                ${messages.map(msg => `<li>${msg}</li>`).join('')}
            </ul>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    feedbackResultDiv.innerHTML = feedbackHtml;
    // Rola a página para o feedback para que o usuário veja
    feedbackResultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ... (Restante do seu código, como os event listeners para DOMContentLoaded, quizzes e flashcards) ...

    function analyzeBehavioralResponse() {
    const userResponseTextarea = document.getElementById('behavioralResponseTextarea');
    const feedbackDiv = document.getElementById('behavioralFeedback');
    
    feedbackDiv.innerHTML = ''; // Limpa mensagens anteriores

    const userResponse = userResponseTextarea.value.trim();

    // 1. Validação de resposta vazia
    if (userResponse === '') {
        feedbackDiv.innerHTML = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <h4 class="alert-heading">Atenção!</h4>
                <p>Por favor, digite sua resposta antes de analisar.</p>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return; 
    }

    // 2. Mensagem de carregamento
    feedbackDiv.innerHTML = `
        <div class="alert alert-info" role="alert">
            <h4 class="alert-heading">Analisando sua resposta...</h4>
            <p>Isso pode levar alguns segundos. Estamos verificando a estrutura STAR.</p>
        </div>
    `;
    feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Simula o processamento com um pequeno atraso (ex: 2 segundos)
    setTimeout(() => {
        let analysisResultHtml = '';
        let customAlertClass = ''; // Esta variável armazenará a classe de cor
        let buttonCloseClass = ''; // Para o botão de fechar (se precisar ser branco)

        const lowerCaseResponse = userResponse.toLowerCase();

        const hasSituacao = lowerCaseResponse.includes('situação') || lowerCaseResponse.includes('contexto') || lowerCaseResponse.includes('ocasião');
        const hasTarefa = lowerCaseResponse.includes('tarefa') || lowerCaseResponse.includes('objetivo') || lowerCaseResponse.includes('desafio');
        const hasAcao = lowerCaseResponse.includes('ação') || lowerCaseResponse.includes('eu fiz') || lowerCaseResponse.includes('decidi') || lowerCaseResponse.includes('implementei');
        const hasResultado = lowerCaseResponse.includes('resultado') || lowerCaseResponse.includes('consequência') || lowerCaseResponse.includes('impacto') || lowerCaseResponse.includes('concluí');

        let feedbackMessages = [];
        let score = 0;

        if (hasSituacao) {
            feedbackMessages.push('Sua resposta descreve uma Situação clara.');
            score++;
        } else {
            feedbackMessages.push('Tente detalhar mais a Situação ou o contexto inicial.');
        }

        if (hasTarefa) {
            feedbackMessages.push('A Tarefa ou desafio que você enfrentou está bem definida.');
            score++;
        } else {
            feedbackMessages.push('Certifique-se de descrever claramente a Tarefa ou seu objetivo na situação.');
        }

        if (hasAcao) {
            feedbackMessages.push('Suas Ações são evidentes e demonstram sua iniciativa.');
            score++;
        } else {
            feedbackMessages.push('Detalhe mais as Ações específicas que você tomou.');
        }

        if (hasResultado) {
            feedbackMessages.push('O Resultado das suas ações está presente, mostrando o impacto.');
            score++;
        } else {
            feedbackMessages.push('Inclua os Resultados concretos de suas ações para fechar a resposta.');
        }

        // Determina as classes de estilo do alerta com base na pontuação
        if (score === 4) {
            customAlertClass = 'alert-analysis-success'; // Usa a nova classe CSS personalizada
            analysisResultHtml += '<h4 class="alert-heading">Análise Concluída: Excelente!</h4>';
            analysisResultHtml += '<p>Sua resposta STAR está completa e muito bem estruturada.</p>';
            buttonCloseClass = ''; // Botão de fechar padrão (escuro) para fundo claro
        } else if (score >= 2) {
            customAlertClass = 'alert-warning'; // Mantém o amarelo padrão do Bootstrap
            analysisResultHtml += '<h4 class="alert-heading">Análise Concluída: Bom progresso!</h4>';
            analysisResultHtml += '<p>Sua resposta já possui elementos STAR, mas há pontos para aprimoramento:</p>';
            buttonCloseClass = '';
        } else {
            customAlertClass = 'alert-danger'; // Mantém o vermelho padrão do Bootstrap
            analysisResultHtml += '<h4 class="alert-heading">Análise Concluída: Precisa de atenção.</h4>';
            analysisResultHtml += '<p>Sua resposta pode ser aprimorada. Revise a dica STAR e tente novamente:</p>';
            buttonCloseClass = 'btn-close-white'; // Botão de fechar branco para fundo escuro
        }

        // Adiciona as mensagens de feedback detalhadas
        analysisResultHtml += '<hr>';
        analysisResultHtml += '<ul>' + feedbackMessages.map(msg => `<li>${msg}</li>`).join('') + '</ul>';
        
        // Exibe o resultado final na interface com as classes de estilo corretas
        feedbackDiv.innerHTML = `
            <div class="alert ${customAlertClass} alert-dismissible fade show" role="alert">
                ${analysisResultHtml}
                <button type="button" class="btn-close ${buttonCloseClass}" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    }, 2000); // 2000 milissegundos = 2 segundos de atraso simulado
}
        /* --- Funções Auxiliares Comuns para Quizzes --- */
// Usei prefixos para evitar conflito de IDs e variáveis
function createQuizManager(prefix, questions) {
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let feedbackShown = false; // Nova flag para controlar o estado do feedback

    const quizContent = document.getElementById(`${prefix}QuizContent`);
    const questionText = document.getElementById(`${prefix}QuestionText`);
    const optionsContainer = document.getElementById(`${prefix}OptionsContainer`);
    const feedbackContainer = document.getElementById(`${prefix}FeedbackContainer`);
    const quizResult = document.getElementById(`${prefix}QuizResult`);
    const scoreDisplay = document.getElementById(`${prefix}ScoreDisplay`);
    const totalQuestionsDisplay = document.getElementById(`${prefix}TotalQuestionsDisplay`);
    const resultFeedback = document.getElementById(`${prefix}ResultFeedback`);
    const nextQuestionBtn = document.getElementById(`${prefix}NextQuestionBtn`);
    const restartQuizBtn = document.getElementById(`${prefix}RestartQuizBtn`);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        selectedOption = null;
        feedbackShown = false; // Resetar a flag

        quizContent.style.display = 'block';
        quizResult.style.display = 'none';
        nextQuestionBtn.style.display = 'block';
        restartQuizBtn.style.display = 'none';
        feedbackContainer.innerHTML = '';
        
        loadQuestion();
    }

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = `Pergunta ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
        optionsContainer.innerHTML = '';
        feedbackContainer.innerHTML = '';
        selectedOption = null;
        feedbackShown = false; // Resetar a flag ao carregar nova pergunta

        // Remover a classe 'disabled-click' de todas as opções antes de adicionar novas
        document.querySelectorAll(`#${prefix}OptionsContainer .quiz-option`).forEach(option => {
            option.classList.remove('disabled-click');
        });


        questions[currentQuestionIndex].options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('quiz-option');
            optionDiv.textContent = option;
            optionDiv.dataset.index = index;
            // O evento de clique agora só seleciona a opção
            optionDiv.addEventListener('click', () => selectOption(optionDiv, index));
            optionsContainer.appendChild(optionDiv);
        });

        nextQuestionBtn.textContent = (currentQuestionIndex === questions.length - 1) ? 'Ver Resultado' : 'Verificar Resposta'; // Texto inicial do botão
        nextQuestionBtn.disabled = true; // Desabilita até uma opção ser selecionada
    }

    function selectOption(selectedDiv, selectedIndex) {
        // Se o feedback já foi mostrado para esta pergunta, não permitir novas seleções
        if (feedbackShown) return; 

        document.querySelectorAll(`#${prefix}OptionsContainer .quiz-option`).forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
        });

        selectedDiv.classList.add('selected');
        selectedOption = selectedIndex;
        nextQuestionBtn.textContent = (currentQuestionIndex === questions.length - 1) ? 'Ver Resultado' : 'Verificar Resposta'; // Garante o texto correto
        nextQuestionBtn.disabled = false; // Habilita o botão para verificar a resposta
    }

    // NOVA FUNÇÃO PARA AVANÇAR APÓS O FEEDBACK
    function advanceQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }

    // Modificada para exibir feedback e esperar pelo clique do usuário para avançar
    function processAnswer() {
        if (selectedOption === null) {
            alert('Por favor, selecione uma opção antes de verificar.');
            return;
        }

        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = (selectedOption === currentQuestion.correctAnswerIndex);
        
        // Aplica feedback visual às opções e desabilita cliques
        document.querySelectorAll(`#${prefix}OptionsContainer .quiz-option`).forEach((optionDiv, index) => {
            if (index === currentQuestion.correctAnswerIndex) {
                optionDiv.classList.add('correct');
            } else if (index === selectedOption && !isCorrect) {
                optionDiv.classList.add('incorrect');
            }
            optionDiv.classList.add('disabled-click'); // Desabilita cliques após a seleção
        });

        // Exibe o feedback textual
        feedbackContainer.innerHTML = `
            <div class="alert ${isCorrect ? 'alert-success' : 'alert-danger'} mt-3">
                ${isCorrect ? '✅ Correto!' : '❌ Incorreto.'}
                <br>
                <strong>Explicação:</strong> ${currentQuestion.rationale}
            </div>
        `;

        if (isCorrect) {
            score++;
        }

        feedbackShown = true; // Define a flag de feedback como true
        nextQuestionBtn.textContent = (currentQuestionIndex === questions.length - 1) ? 'Ver Resultado Final' : 'Próxima Pergunta'; // Altera o texto do botão
        nextQuestionBtn.disabled = false; // Reabilita o botão para o usuário avançar
    }

    function showResult() {
        quizContent.style.display = 'none';
        quizResult.style.display = 'block';
        nextQuestionBtn.style.display = 'none';
        restartQuizBtn.style.display = 'block';

        scoreDisplay.textContent = score;
        totalQuestionsDisplay.textContent = questions.length;

        if (score === questions.length) {
            resultFeedback.innerHTML = `<div class="alert alert-success text-center">🎉 Parabéns! Você acertou todas as perguntas!</div>`;
        } else if (score >= questions.length / 2) {
            resultFeedback.innerHTML = `<div class="alert alert-info text-center">Muito bem! Você teve um bom desempenho. Continue praticando!</div>`;
        } else {
            resultFeedback.innerHTML = `<div class="alert alert-warning text-center">Continue estudando! Você pode melhorar sua pontuação.</div>`;
        }
    }

    // Modificando o event listener do botão "Próxima Pergunta"
    nextQuestionBtn.addEventListener('click', () => {
        if (!feedbackShown) { // Se o feedback ainda não foi mostrado
            processAnswer(); // Processa a resposta e mostra o feedback
        } else { // Se o feedback já foi mostrado, significa que o usuário clicou para avançar
            advanceQuestion(); // Avança para a próxima pergunta
        }
    });

    restartQuizBtn.addEventListener('click', startQuiz);

    return { startQuiz }; // Retorna a função para iniciar o quiz
}
        /* --- DADOS DOS QUIZZES --- */

const logicQuizQuestions = [
    {
        question: "Se 'todos os A são B' e 'nenhum B é C', o que podemos concluir sobre A e C?",
        options: [ "Todos os A são C.", "Nenhum A é C.", "Alguns A são C.", "Alguns B são A." ],
        correctAnswerIndex: 1,
        rationale: "Se todos os A pertencem ao grupo B, e nenhum item do grupo B pode ser C, então é logicamente impossível que qualquer A seja C."
    },
    {
        question: "Qual é o resultado da expressão booleana: `(TRUE AND FALSE) OR (NOT FALSE)`?",
        options: [ "TRUE", "FALSE", "Erro de sintaxe", "Depende da linguagem de programação" ],
        correctAnswerIndex: 0,
        rationale: "A expressão 'TRUE AND FALSE' resulta em FALSE. A expressão 'NOT FALSE' resulta em TRUE. Portanto, 'FALSE OR TRUE' resulta em TRUE."
    },
    {
        question: "Se a afirmação 'Se chove, então a rua fica molhada' é verdadeira, e 'a rua não está molhada' é uma constatação, o que podemos concluir?",
        options: [ "Choveu.", "Não choveu.", "Pode ter chovido ou não.", "A premissa é falsa." ],
        correctAnswerIndex: 1,
        rationale: "Se a rua não está molhada, então a condição 'choveu' não pode ter ocorrido, pois isso contradiria a premissa de que 'se chove, a rua fica molhada'."
    },
    {
        question: "Em um circuito lógico, se a entrada A é 1 e a entrada B é 0, qual é a saída de uma porta XOR (OU Exclusivo)?",
        options: [ "0", "1", "Depende da polaridade", "Erro de circuito" ],
        correctAnswerIndex: 1,
        rationale: "A porta XOR (Exclusive OR) produz uma saída 1 se e somente se suas entradas são diferentes. Com A=1 e B=0, as entradas são diferentes, resultando em 1."
    },
    {
        question: "Qual das seguintes proposições é uma tautologia?",
        options: [ "P AND (NOT P)", "P OR (NOT P)", "P IMPLIES Q", "(P AND Q) IMPLIES P" ],
        correctAnswerIndex: 1,
        rationale: "Uma tautologia é uma proposição que é sempre verdadeira, independentemente dos valores de verdade de suas proposições componentes. 'P OR (NOT P)' é sempre verdadeira, pois P é verdadeiro ou P é falso."
    },
    {
        question: "Se 'todo desenvolvedor usa Git' e 'Maria é desenvolvedora', o que podemos afirmar?",
        options: [ "Maria pode não usar Git.", "Maria usa Git.", "Git é usado apenas por desenvolvedores.", "A afirmação é inválida." ],
        correctAnswerIndex: 1,
        rationale: "Este é um exemplo de silogismo dedutivo válido. Se todos os membros de um grupo (desenvolvedores) possuem uma característica (usam Git) e um indivíduo pertence a esse grupo, então o indivíduo possui essa característica."
    },
    {
        question: "Qual o valor de Y no algoritmo: 'X = 5, Y = X + 2, X = Y - 1'?",
        options: [ "4", "6", "7", "5" ],
        correctAnswerIndex: 2,
        rationale: "Primeiro, X é 5. Depois, Y recebe X + 2, então Y = 5 + 2 = 7. A última operação (X = Y - 1) altera X, mas não Y, que já foi definido."
    },
    {
        question: "Se (P OR Q) é verdadeiro e P é falso, o que podemos concluir sobre Q?",
        options: [ "Q é falso.", "Q é verdadeiro.", "Não se pode concluir nada sobre Q.", "Pode ser verdadeiro ou falso." ],
        correctAnswerIndex: 1,
        rationale: "Para que a disjunção 'P OR Q' seja verdadeira, pelo menos uma das proposições (P ou Q) deve ser verdadeira. Se P é falso, então Q obrigatoriamente precisa ser verdadeiro."
    },
    {
        question: "Qual é a negação da afirmação 'Todo software é perfeito'?",
        options: [ "Nenhum software é perfeito.", "Algum software é perfeito.", "Algum software não é perfeito.", "O software não é bom." ],
        correctAnswerIndex: 2,
        rationale: "A negação de uma proposição universal afirmativa ('Todo S é P') é uma proposição particular negativa ('Algum S não é P')."
    },
    {
        question: "Se um loop 'while' tem a condição `(contador < 5)` e `contador` começa em 0 e é incrementado em 1 a cada iteração, quantas vezes o loop será executado?",
        options: [ "4 vezes", "5 vezes", "6 vezes", "Infinitas vezes" ],
        correctAnswerIndex: 1,
        rationale: "O loop será executado quando contador for 0, 1, 2, 3 e 4. Quando contador se torna 5, a condição '5 < 5' é falsa, e o loop termina. Isso resulta em 5 execuções."
    }
];

const sqlQuizQuestions = [
    {
        question: "Qual comando SQL é usado para extrair dados de um banco de dados?",
        options: ["UPDATE", "INSERT", "SELECT", "DELETE"],
        correctAnswerIndex: 2,
        rationale: "O comando SELECT é o principal comando SQL para recuperar dados de uma ou mais tabelas em um banco de dados."
    },
    {
        question: "Qual cláusula é usada com SELECT para filtrar registros com base em uma condição?",
        options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
        correctAnswerIndex: 2,
        rationale: "A cláusula WHERE é usada para filtrar registros, extraindo apenas aqueles que satisfazem uma condição especificada."
    },
    {
        question: "Qual tipo de JOIN retorna apenas as linhas que têm correspondências em ambas as tabelas?",
        options: ["LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "INNER JOIN"],
        correctAnswerIndex: 3,
        rationale: "Um INNER JOIN retorna apenas as linhas que têm valores correspondentes em ambas as tabelas que estão sendo unidas."
    },
    {
        question: "Qual comando SQL é usado para criar uma nova tabela em um banco de dados?",
        options: ["ADD TABLE", "NEW TABLE", "CREATE TABLE", "MAKE TABLE"],
        correctAnswerIndex: 2,
        rationale: "O comando CREATE TABLE é uma instrução DDL (Data Definition Language) usada para definir a estrutura de uma nova tabela no banco de dados."
    },
    {
        question: "Para contar o número total de linhas em uma tabela, qual função de agregação você usaria?",
        options: ["SUM()", "AVG()", "COUNT()", "MAX()"],
        correctAnswerIndex: 2,
        rationale: "A função COUNT() é usada para retornar o número de linhas que correspondem a um critério especificado. COUNT(*) conta todas as linhas."
    },
    {
        question: "Qual cláusula é usada para agrupar o conjunto de resultados por uma ou mais colunas?",
        options: ["ORDER BY", "WHERE", "GROUP BY", "DISTINCT"],
        correctAnswerIndex: 2,
        rationale: "A cláusula GROUP BY é usada em conjunto com funções de agregação para agrupar linhas que têm os mesmos valores em colunas especificadas em um conjunto de linhas de resumo."
    },
    {
        question: "Qual comando SQL é usado para modificar dados existentes em um banco de dados?",
        options: ["ALTER", "MODIFY", "CHANGE", "UPDATE"],
        correctAnswerIndex: 3,
        rationale: "O comando UPDATE é uma instrução DML (Data Manipulation Language) usada para alterar os dados de uma ou mais linhas existentes em uma tabela."
    },
    {
        question: "Para remover uma tabela inteira de um banco de dados, qual comando você usaria?",
        options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "TRUNCATE TABLE"],
        correctAnswerIndex: 2,
        rationale: "O comando DROP TABLE é uma instrução DDL (Data Definition Language) usada para remover completamente uma tabela de um banco de dados, incluindo seus dados e sua definição."
    },
    {
        question: "Qual cláusula é usada para limitar o número de linhas retornadas por uma consulta?",
        options: ["TOP", "LIMIT", "ROWNUM", "FETCH"],
        correctAnswerIndex: 1,
        rationale: "A cláusula LIMIT (usada em MySQL, PostgreSQL, SQLite) ou OFFSET/FETCH (SQL Server 2012+) é usada para restringir o número de linhas no conjunto de resultados. LIMIT é o mais comum para esta finalidade em vários sistemas."
    },
    {
        question: "O que significa 'SQL'?",
        options: ["Standard Query Language", "Structured Question Language", "Strong Query Logic", "Structured Query Language"],
        correctAnswerIndex: 3,
        rationale: "SQL é a sigla para 'Structured Query Language', uma linguagem de domínio específico projetada para gerenciar dados em sistemas de gerenciamento de banco de dados relacionais."
    }
];

const networksQuizQuestions = [
    {
        question: "Qual camada do modelo OSI é responsável pela entrega de pacotes de um host de origem para um host de destino em redes diferentes?",
        options: ["Camada Física", "Camada de Enlace", "Camada de Rede", "Camada de Transporte"],
        correctAnswerIndex: 2,
        rationale: "A Camada de Rede (Camada 3) é responsável pelo roteamento lógico dos pacotes e endereçamento IP, permitindo a comunicação entre redes diferentes."
    },
    {
        question: "Qual protocolo é amplamente utilizado para navegação na web e transferência de hipertexto?",
        options: ["FTP (File Transfer Protocol)", "SMTP (Simple Mail Transfer Protocol)", "HTTP (Hypertext Transfer Protocol)", "SSH (Secure Shell)"],
        correctAnswerIndex: 2,
        rationale: "HTTP é o protocolo fundamental para a World Wide Web, utilizado para a comunicação entre navegadores e servidores web."
    },
    {
        question: "Qual dispositivo de rede é usado para conectar diferentes redes e encaminhar pacotes entre elas com base em endereços IP?",
        options: ["Hub", "Switch", "Roteador", "Modem"],
        correctAnswerIndex: 2,
        rationale: "Um roteador é um dispositivo de Camada de Rede (Camada 3) que encaminha pacotes entre redes distintas, usando endereços IP para determinar o melhor caminho."
    },
    {
        question: "Qual é a finalidade principal do DNS (Domain Name System)?",
        options: ["Criptografar dados transmitidos pela internet.", "Atribuir endereços IP dinamicamente a dispositivos.", "Traduzir nomes de domínio legíveis por humanos em endereços IP.", "Gerenciar o fluxo de tráfego em uma rede local (LAN)."],
        correctAnswerIndex: 2,
        rationale: "O DNS funciona como uma 'lista telefônica' da internet, convertendo nomes de sites (como www.exemplo.com) em endereços IP numéricos que os computadores usam para se comunicar."
    },
    {
        question: "Qual protocolo da Camada de Transporte é orientado à conexão e garante a entrega confiável e ordenada dos dados?",
        options: ["UDP (User Datagram Protocol)", "IP (Internet Protocol)", "TCP (Transmission Control Protocol)", "ICMP (Internet Control Message Protocol)"],
        correctAnswerIndex: 2,
        rationale: "TCP é um protocolo orientado à conexão que estabelece uma conexão antes de transmitir dados, garantindo a entrega confiável, ordenada e com controle de fluxo e congestionamento."
    },
    {
        question: "O que é um endereço MAC (Media Access Control)?",
        options: ["Um endereço lógico usado para roteamento entre redes.", "Um endereço físico único atribuído a cada interface de rede.", "O nome de domínio de um website.", "Um número de porta usado para identificar serviços de aplicação."],
        correctAnswerIndex: 1,
        rationale: "O endereço MAC é um identificador físico e único de 48 bits (6 bytes) gravado no hardware da placa de rede (NIC), usado na Camada de Enlace de Dados para identificar dispositivos em uma rede local."
    },
    {
        question: "Qual o principal objetivo de um firewall em uma rede de computadores?",
        options: ["Aumentar a velocidade da conexão à internet.", "Armazenar backups de dados importantes.", "Proteger a rede contra acessos não autorizados e ataques maliciosos.", "Distribuir endereços IP automaticamente aos dispositivos."],
        correctAnswerIndex: 2,
        rationale: "Um firewall é um sistema de segurança de rede que monitora e controla o tráfego de rede de entrada e saída com base em regras de segurança predeterminadas, protegendo contra ameaças."
    },
    {
        question: "Em qual camada do modelo TCP/IP o protocolo HTTP opera?",
        options: ["Camada de Rede", "Camada de Transporte", "Camada de Aplicação", "Camada de Enlace"],
        correctAnswerIndex: 2,
        rationale: "No modelo TCP/IP, a Camada de Aplicação (a camada superior) engloba as funcionalidades das camadas de Aplicação, Apresentação e Sessão do modelo OSI. Protocolos como HTTP, FTP, SMTP e DNS operam nesta camada."
    },
    {
        question: "Qual o nome do processo de converter um nome de domínio (ex: www.google.com) em um endereço IP?",
        options: ["Roteamento", "Encaminhamento", "Resolução de Nomes (Name Resolution)", "Mapeamento de Rede"],
        correctAnswerIndex: 2,
        rationale: "A resolução de nomes é o processo de traduzir nomes de domínio (humanamente legíveis) em endereços IP (numéricos) que os computadores podem usar para se comunicar, sendo a principal função do DNS."
    },
    {
        question: "Uma rede local (LAN) se refere a uma rede que:",
        options: ["Abrange uma grande área geográfica, como um país ou continente.", "Conecta dispositivos em uma área limitada, como uma casa, escritório ou campus.", "É usada exclusivamente por governos e forças armadas.", "Permite apenas a comunicação unidirecional."],
        correctAnswerIndex: 1,
        rationale: "Uma LAN (Local Area Network) é uma rede de computadores que interconecta computadores em uma área limitada, como uma residência, escola, laboratório universitário ou prédio de escritórios."
    }
];

        /* --- INSTANCIANDO OS QUIZZES --- */
        // Usamos a função createQuizManager para cada quiz, passando um prefixo único
        // e o array de perguntas correspondente.

        const logicQuizManager = createQuizManager('logic', logicQuizQuestions);
        const sqlQuizManager = createQuizManager('sql', sqlQuizQuestions);
        const networksQuizManager = createQuizManager('networks', networksQuizQuestions);

        // Quando cada modal é mostrado, iniciamos o quiz correspondente
        document.getElementById('logicQuizModal').addEventListener('shown.bs.modal', logicQuizManager.startQuiz);
        document.getElementById('sqlQuizModal').addEventListener('shown.bs.modal', sqlQuizManager.startQuiz);
        document.getElementById('networksQuizModal').addEventListener('shown.bs.modal', networksQuizManager.startQuiz);

        /* --- Flashcard Manager --- */
const flashcardQuestions = [
    {
        question: "Fale sobre você.",
        answer: "Comece com um breve resumo da sua trajetória profissional, seus pontos fortes e o que você busca. Ex: 'Sou um desenvolvedor front-end com 3 anos de experiência, apaixonado por criar interfaces intuitivas. Nos últimos projetos, foquei em React e busco agora uma empresa que valorize inovação e desenvolvimento contínuo.'"
    },
    {
        question: "Por que você quer trabalhar nesta empresa?",
        answer: "Pesquise a fundo a empresa! Mencione algo específico: a cultura, um projeto recente, valores ou tecnologias que eles usam. Ex: 'Acompanho o trabalho da [Nome da Empresa] há um tempo, especialmente o projeto X, e me identifico com a cultura de inovação e o foco em [mencione um valor específico, como impacto social ou tecnologia de ponta].'"
    },
    {
        question: "Onde você se vê daqui a 5 anos?",
        answer: "Mostre ambição e alinhamento com a área. Evite respostas genéricas. Ex: 'Em 5 anos, me vejo como um especialista em [sua área de interesse, ex: arquitetura de software/data science], liderando projetos e contribuindo ativamente para o crescimento da empresa, talvez mentorando novos talentos. Busco um lugar onde eu possa continuar aprendendo e me desafiando.'"
    },
    {
        question: "Qual sua maior fraqueza?",
        answer: "Escolha uma fraqueza real, mas que você esteja trabalhando para melhorar, e mostre como. Ex: 'Antigamente, eu tinha dificuldade em delegar tarefas por querer controlar tudo. Mas estou ativamente melhorando isso, confiando mais na equipe e usando ferramentas de gestão de projetos para otimizar o fluxo de trabalho.'"
    },
    {
        question: "Descreva uma situação em que você cometeu um erro e como lidou com ela.",
        answer: "Use o método STAR (Situação, Tarefa, Ação, Resultado). Foco na aprendizagem e resolução. Ex: 'Uma vez, cometi um erro em um código que atrasou uma funcionalidade (Situação). Minha tarefa era corrigir e evitar que acontecesse novamente (Tarefa). Imediatamente, comuniquei o erro à equipe, revisei o código com um colega para identificar a causa e implementamos um processo de revisão de pares (Ação). Como resultado, corrigimos a falha rapidamente e melhoramos nossa qualidade de código, reduzindo erros futuros (Resultado).'"
    },
    {
        question: "Como você lida com feedback negativo?",
        answer: "Mostre maturidade e abertura ao aprendizado. Ex: 'Considero o feedback, mesmo que negativo, uma oportunidade valiosa de crescimento. Sou grato por ele, pois me ajuda a identificar pontos cegos. Sempre busco entender a perspectiva, pedir exemplos se necessário, e criar um plano de ação para aplicar as melhorias.'"
    },
    {
        question: "Qual sua expectativa salarial?",
        answer: "Pesquise a média de mercado para a posição e seu nível de experiência. Apresente uma faixa. Ex: 'Minha expectativa está na faixa de R$X.XXX a R$Y.YYY, que considero compatível com minhas qualificações e com a média do mercado para essa posição e nível de experiência. Mas estou aberto a negociar com base no pacote total de benefícios.'"
    },
    {
        question: "Você tem alguma pergunta para nós?",
        answer: "Sempre faça perguntas! Demonstra interesse. Pergunte sobre a cultura da equipe, os desafios da posição, o processo de onboarding, ou oportunidades de desenvolvimento. Ex: 'Qual é o maior desafio que a equipe enfrenta atualmente?' ou 'Como a empresa apoia o desenvolvimento profissional dos seus colaboradores?'"
    }
];

let currentFlashcardIndex = 0;

const flashcardQuestionEl = document.getElementById('flashcardQuestion');
const flashcardAnswerEl = document.getElementById('flashcardAnswer');
const revealAnswerBtn = document.getElementById('revealAnswerBtn');
const prevFlashcardBtn = document.getElementById('prevFlashcardBtn');
const nextFlashcardBtn = document.getElementById('nextFlashcardBtn');
const currentFlashcardIndexDisplay = document.getElementById('currentFlashcardIndex');
const totalFlashcardsDisplay = document.getElementById('totalFlashcards');

function loadFlashcard(index) {
    const flashcard = flashcardQuestions[index];
    flashcardQuestionEl.textContent = flashcard.question;
    flashcardAnswerEl.textContent = flashcard.answer;
    flashcardAnswerEl.style.display = 'none'; // Hide answer initially
    revealAnswerBtn.style.display = 'block'; // Show reveal button

    // Update index display
    currentFlashcardIndexDisplay.textContent = index + 1;

    // Enable/disable navigation buttons
    prevFlashcardBtn.disabled = index === 0;
    nextFlashcardBtn.disabled = index === flashcardQuestions.length - 1;
}

function revealAnswer() {
    flashcardAnswerEl.style.display = 'block';
    revealAnswerBtn.style.display = 'none';
}

// Event Listeners for Flashcards
revealAnswerBtn.addEventListener('click', revealAnswer);

prevFlashcardBtn.addEventListener('click', () => {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        loadFlashcard(currentFlashcardIndex);
    }
});

nextFlashcardBtn.addEventListener('click', () => {
    if (currentFlashcardIndex < flashcardQuestions.length - 1) {
        currentFlashcardIndex++;
        loadFlashcard(currentFlashcardIndex);
    }
});

// Initialize flashcards when the accordion item is shown
document.getElementById('collapseBehavioral2').addEventListener('shown.bs.collapse', () => {
    totalFlashcardsDisplay.textContent = flashcardQuestions.length;
    currentFlashcardIndex = 0; // Reset to the first card when accordion opens
    loadFlashcard(currentFlashcardIndex);
});