const allJobs = [
            {
                id: 1,
                title: "Desenvolvedor(a) Front-end Pleno",
                company: "VAAS",
                location: "Santa Catarina",
                level: "Pleno",
                regime: "CLT",
                description: "Buscamos um(a) Desenvolvedor(a) Front-end Pleno apaixonado(a) por criar interfaces de usuário intuitivas e responsivas. Você trabalhará em uma equipe ágil, colaborando desde a concepção até a entrega de novas funcionalidades para nossos produtos web. Valorizamos a proatividade e o gosto por desafios.",
                requirements: [
                    "Experiência comprovada com React.js ou Angular (preferencialmente React).",
                    "Domínio de HTML5, CSS3 (com pré-processadores como Sass/Less) e JavaScript (ES6+).",
                    "Conhecimento de ferramentas de versionamento como Git e plataformas como GitHub/GitLab.",
                    "Familiaridade com consumo de APIs RESTful e GraphQL.",
                    "Experiência com design responsivo e otimização de performance front-end."
                ],
                responsibilities: [
                    "Desenvolver, testar e manter componentes de interface de usuário reutilizáveis e escaláveis.",
                    "Colaborar ativamente com a equipe de Back-end para integração de APIs.",
                    "Otimizar aplicações para máxima velocidade, escalabilidade e compatibilidade entre navegadores.",
                    "Participar de code reviews, contribuindo para a qualidade e boas práticas do código.",
                    "Traduzir designs e wireframes em código de alta qualidade e interfaces funcionais."
                ],
                link: "https://www.linkedin.com/jobs/view/4257184825"
            },
            {
                id: 2,
                title: "Engenheiro(a) de Dados Sênior",
                company: "Stealth Healthcare AI Startup",
                location: "Remoto",
                level: "Sênior",
                regime: "CLT",
                description: "Procuramos um(a) Engenheiro(a) de Dados Sênior para projetar, construir e otimizar nossos pipelines de dados complexos. Você será fundamental para a arquitetura de dados, big data e soluções de análise, garantindo que nossos cientistas e analistas tenham acesso a dados confiáveis e em tempo real.",
                requirements: [
                    "Experiência sólida com Python e SQL avançado (incluindo otimização de queries).",
                    "Conhecimento profundo em plataformas de Big Data como Apache Spark, Hadoop e Kafka.",
                    "Experiência robusta com computação em nuvem (AWS, GCP ou Azure) e ferramentas específicas de dados como Data Factory, Glue, BigQuery, S3.",
                    "Forte experiência em modelagem de dados para Data Warehouses e Data Lakes.",
                    "Habilidade para trabalhar com dados não estruturados e semi-estruturados."
                ],
                responsibilities: [
                    "Construir, gerenciar e otimizar pipelines ETL/ELT robustos e escaláveis.",
                    "Garantir a qualidade, segurança, governança e escalabilidade dos dados.",
                    "Colaborar ativamente com Cientistas de Dados e Analistas para entender as necessidades e disponibilizar dados para modelos e relatórios.",
                    "Propor e implementar melhorias contínuas na arquitetura de dados e nas ferramentas utilizadas.",
                    "Monitorar o desempenho dos pipelines e sistemas de dados, implementando otimizações quando necessário."
                ],
                link: "https://www.linkedin.com/jobs/view/4252697178"
            },
            {
                id: 3,
                title: "Analista de Cibersegurança Júnior",
                company: "SPX",
                location: "Rio de Janeiro",
                level: "Júnior",
                regime: "CLT",
                description: "Vaga para Analista de Cibersegurança Júnior para atuar na prevenção e resposta a incidentes de segurança. Ótima oportunidade para quem busca iniciar carreira na área, com mentoria e aprendizado contínuo em um ambiente desafiador.",
                requirements: [
                    "Conhecimento básico a intermediário de redes TCP/IP e protocolos de segurança.",
                    "Noções de sistemas operacionais (Linux, Windows Server) e seus principais serviços.",
                    "Grande interesse em segurança da informação, vulnerabilidades e ética hacker.",
                    "Certificações básicas da indústria (CompTIA Security+, CCNA Security, Google Cybersecurity) são um diferencial.",
                    "Capacidade de análise lógica e resolução de problemas."
                ],
                responsibilities: [
                    "Monitorar eventos de segurança e alertas em sistemas SIEM (Security Information and Event Management).",
                    "Auxiliar na análise de vulnerabilidades, realizando varreduras e gerando relatórios.",
                    "Participar da resposta a incidentes de segurança, seguindo procedimentos pré-definidos.",
                    "Manter-se atualizado sobre novas ameaças, tendências de ataque e melhores práticas de segurança.",
                    "Colaborar com a equipe para implementar e manter políticas de segurança da informação."
                ],
                link: "https://www.linkedin.com/jobs/view/4255362344"
            },
            {
                id: 4,
                title: "Engenheiro(a) DevOps Pleno",
                company: "Stefanini",
                location: "São Paulo",
                level: "Pleno",
                regime: "PJ",
                description: "Buscamos um(a) Engenheiro(a) DevOps Pleno para otimizar nossos processos de CI/CD e gerenciar a infraestrutura em nuvem, garantindo a entrega rápida e eficiente de software com alta disponibilidade e escalabilidade. Ambiente de trabalho dinâmico e colaborativo.",
                requirements: [
                    "Experiência comprovada com Docker e Kubernetes para orquestração de containers.",
                    "Conhecimento sólido de ferramentas de CI/CD (Jenkins, GitLab CI, Azure DevOps).",
                    "Experiência com provedores de nuvem (preferencialmente Azure, AWS ou GCP).",
                    "Habilidade em scripting com Shell, Python ou Go Lang.",
                    "Familiaridade com ferramentas de Infrastructure as Code (Terraform, Ansible)."
                ],
                responsibilities: [
                    "Automatizar a integração contínua (CI) e a entrega contínua (CD) de aplicações.",
                    "Gerenciar e monitorar ambientes de produção e não produção em nuvem.",
                    "Implementar e manter práticas de infraestrutura como código (IaC).",
                    "Apoiar equipes de desenvolvimento na implantação e operação de aplicações.",
                    "Otimizar a performance e a segurança da infraestrutura."
                ],
                link: "https://www.linkedin.com/jobs/view/4255783815"
            },
            {
                id: 5,
                title: "Desenvolvedor(a) Back-end Sênior",
                company: "BRQ",
                location: "Remoto",
                level: "Sênior",
                regime: "CLT",
                description: "Vaga para Desenvolvedor(a) Back-end Sênior com expertise em sistemas distribuídos e alta performance. Atuará no desenvolvimento de APIs e microsserviços críticos para o setor financeiro, garantindo robustez e segurança.",
                requirements: [
                    "Proficiência comprovada em Java (Spring Boot) ou Go Lang.",
                    "Experiência profunda com bancos de dados relacionais (PostgreSQL, MySQL) e NoSQL (MongoDB, Cassandra).",
                    "Conhecimento sólido de arquiteturas de microsserviços e mensageria (Kafka, RabbitMQ, SQS).",
                    "Experiência com testes unitários, integração e TDD/BDD.",
                    "Familiaridade com computação em nuvem (AWS, Azure) e conceitos de resiliência."
                ],
                responsibilities: [
                    "Projetar, desenvolver e testar APIs escaláveis e de alta disponibilidade.",
                    "Liderar a evolução da arquitetura de Back-end, propondo soluções inovadoras.",
                    "Garantir a segurança, performance e observabilidade dos sistemas.",
                    "Mentorar desenvolvedores juniores e plenos, promovendo boas práticas de código.",
                    "Colaborar com equipes de produto e front-end para entregar soluções completas."
                ],
                link: "https://www.linkedin.com/jobs/view/4202888264"
            },
            {
                id: 6,
                title: "Arquiteto de Solução",
                company: "Ocyan",
                location: "Remoto",
                level: "Sênior",
                regime: "PJ",
                description: "Buscamos Arquiteto(a) de Soluções Cloud para desenhar e implementar arquiteturas robustas e escaláveis em ambientes de nuvem pública. Você será o(a) responsável por guiar a estratégia de adoção de cloud e garantir a otimização de recursos.",
                requirements: [
                    "Experiência comprovada com AWS, Azure ou GCP (conhecimento em múltiplas clouds é um grande diferencial).",
                    "Profundo conhecimento em containers, serverless, microservices e suas aplicações.",
                    "Domínio de padrões de arquitetura de software e design de sistemas distribuídos.",
                    "Certificações em cloud (AWS Certified Solutions Architect, Azure Solutions Architect Expert) são altamente desejáveis.",
                    "Habilidade em comunicação e liderança técnica."
                ],
                responsibilities: [
                    "Desenhar e propor soluções de infraestrutura e aplicação na nuvem que atendam aos requisitos de negócio e técnicos.",
                    "Fornecer orientação técnica e mentoria para equipes de desenvolvimento e operações na implementação das soluções.",
                    "Realizar otimização de custos e performance em ambientes cloud, identificando oportunidades de melhoria.",
                    "Manter-se atualizado com as últimas tendências e serviços de cloud computing.",
                    "Criar documentação técnica detalhada das arquiteturas e decisões."
                ],
                link: "https://www.linkedin.com/jobs/view/4255763345"
            },
            {
                id: 7,
                title: "Analista de Qualidade de Software (QA)",
                company: "GazinTech",
                location: "Paraná",
                level: "Pleno",
                regime: "CLT",
                description: "Procuramos um Analista de QA para garantir a qualidade dos nossos produtos de software, realizando testes manuais e automatizados. Você será parte crucial do ciclo de desenvolvimento, assegurando a entrega de soluções livres de bugs e com excelente experiência do usuário.",
                requirements: [
                    "Experiência com testes manuais, criação de planos de teste e casos de teste.",
                    "Conhecimento em ferramentas de automação de testes (Selenium, Cypress, Playwright ou similar).",
                    "Familiaridade com metodologias ágeis (Scrum, Kanban) e ciclo de vida de desenvolvimento de software (SDLC).",
                    "Habilidade para identificar, reportar e acompanhar bugs de forma eficaz.",
                    "Conhecimento básico em SQL para validação de dados em banco de dados."
                ],
                responsibilities: [
                    "Elaborar e executar casos de teste funcionais e não funcionais.",
                    "Desenvolver e manter scripts de automação de testes para regressão.",
                    "Trabalhar em estreita colaboração com desenvolvedores, product owners e designers.",
                    "Participar das reuniões de planejamento e revisão, contribuindo com a perspectiva de qualidade.",
                    "Garantir a entrega de software de alta qualidade e que atenda às expectativas do cliente."
                ],
                link: "https://www.linkedin.com/jobs/view/4174884930"
            },
            {
                id: 8,
                title: "Estágio em Análise de Dados",
                company: "Petlove",
                location: "Remoto",
                level: "Estagiário",
                regime: "CLT",
                description: "Vaga para Análise de Dados Júnior para atuar na coleta, processamento e análise de grandes volumes de dados. Você ajudará a transformar dados em insights acionáveis, auxiliando na tomada de decisões estratégicas para o negócio.",
                requirements: [
                    "Conhecimento em Python (bibliotecas Pandas, NumPy, Scikit-learn) ou R.",
                    "Noções de estatística, probabilidade e álgebra linear.",
                    "Familiaridade com SQL para manipulação de bancos de dados.",
                    "Interesse em Machine Learning e modelagem preditiva.",
                    "Habilidade para comunicar resultados de forma clara."
                ],
                responsibilities: [
                    "Coletar, limpar e pré-processar dados de diversas fontes.",
                    "Realizar análises exploratórias de dados para identificar padrões e tendências.",
                    "Construir e avaliar modelos de Machine Learning simples.",
                    "Criar dashboards e visualizações para apresentar insights.",
                    "Colaborar com outras equipes para entender as necessidades de dados."
                ],
                link: "https://www.linkedin.com/jobs/view/4258590674"
            },
            {
                id: 9,
                title: "Estagiário em Desenvolvimento Java",
                company: "ANBIMA",
                location: "Rio de Janeiro",
                regime: "CLT",
                description: "Buscamos Desenvolvedor(a) Mobile para atuar no desenvolvimento e manutenção de nossos aplicativos nativos para Android e iOS. Você fará parte de uma equipe multidisciplinar, focada em entregar a melhor experiência mobile.",
                requirements: [
                    "Experiência com desenvolvimento Android (Kotlin/Java) ou iOS (Swift/Objective-C).",
                    "Conhecimento de MVVM/MVP ou arquiteturas Clean Architecture.",
                    "Familiaridade com consumo de APIs RESTful.",
                    "Experiência com ferramentas de controle de versão (Git).",
                    "Publicação e manutenção de apps nas stores."
                ],
                responsibilities: [
                    "Desenvolver novas funcionalidades e manter os aplicativos existentes.",
                    "Garantir a performance, segurança e usabilidade dos apps.",
                    "Participar do ciclo de vida completo de desenvolvimento de software.",
                    "Colaborar com designers e equipes de back-end.",
                    "Escrever testes unitários e de integração."
                ],
                link: "https://www.linkedin.com/jobs/view/4259926289"
            }
        ];

        let currentFilteredJobs = [];
        let currentSelectedCard = null; // Para controlar qual card está selecionado

        // Função para exibir a lista de vagas como cards (para a busca principal)
        function displayJobs(jobsToDisplay) {
            const jobResultsDiv = document.getElementById('jobResults');
            jobResultsDiv.innerHTML = ''; // Limpa os resultados anteriores
            
            // Esconde a mensagem de "sem resultados" por padrão, só mostra se necessário
            const noResultsMessageElement = document.getElementById('noResultsMessage');
            if (noResultsMessageElement) {
                noResultsMessageElement.style.display = 'none';
            }


            if (jobsToDisplay.length === 0) {
                // Se não há vagas, exibe a mensagem no centro da coluna
                if (noResultsMessageElement) {
                    noResultsMessageElement.style.display = 'block';
                    noResultsMessageElement.textContent = 'Nenhuma vaga encontrada com os filtros aplicados.';
                } else {
                    // Fallback se o elemento não for encontrado (improvável)
                   jobResultsDiv.innerHTML = '<p class="text-white text-center col-12">Nenhuma vaga encontrada com os filtros aplicados.</p>';

                }
                return;
            }

            jobsToDisplay.forEach(job => {
                const colDiv = document.createElement('div');
                colDiv.classList.add('col'); // Bootstrap column

                const jobCard = createJobCardElement(job); // Reutiliza a função para criar o card
                
                colDiv.appendChild(jobCard);
                jobResultsDiv.appendChild(colDiv);
            });
            currentFilteredJobs = jobsToDisplay; // Atualiza as vagas atualmente filtradas
        }

        // Função auxiliar para criar um elemento de card de vaga
        function createJobCardElement(job) {
            const jobCard = document.createElement('div');
            jobCard.classList.add('card', 'job-card');
            jobCard.setAttribute('data-job-id', job.id); // Armazena o ID da vaga
            
            jobCard.onclick = (event) => {
                // Garante que clicar no botão dentro do card ainda selecione a vaga sem interferir na ação do botão
                // Target the entire card for selection, but allow the button's default action
                if (event.target.tagName !== 'BUTTON' && !event.target.closest('button')) { 
                    selectJob(event, job.id);
                }
            };

            jobCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${job.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${job.company} - ${job.location}</h6>
                    <p class="card-text">${job.description.substring(0, 150)}...</p>
                </div>
                <div class="card-footer">
                    <span class="badge bg-primary me-2">${job.level}</span>
                    <span class="badge bg-secondary me-2">${job.regime}</span>
                    <button class="btn btn-sm btn-outline-info mt-2 mt-md-0" onclick="selectJob(event, ${job.id})">
                        Ver Detalhes <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            `;
            return jobCard;
        }

        // Função para popular o carrossel com vagas em destaque
        function populateCarousel() {
            const carouselInner = document.getElementById('carouselJobs');
            const carouselIndicators = document.querySelector('#featuredJobsCarousel .carousel-indicators');
            carouselInner.innerHTML = ''; // Limpa conteúdo inicial
            carouselIndicators.innerHTML = ''; // Limpa indicadores iniciais

            // Pegar as primeiras 3 vagas para o carrossel (ajuste conforme desejar)
            const featuredJobs = allJobs.slice(0, 3); 

            featuredJobs.forEach((job, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (index === 0) {
                    carouselItem.classList.add('active'); // Primeiro item ativo
                }

                const jobCard = createJobCardElement(job);
                jobCard.classList.add('mb-0'); // Remove margem inferior padrão se o card estiver no carrossel

                const dFlexDiv = document.createElement('div');
                dFlexDiv.classList.add('d-flex', 'justify-content-center');
                dFlexDiv.appendChild(jobCard);
                carouselItem.appendChild(dFlexDiv);
                
                carouselInner.appendChild(carouselItem);

                // Criar indicador do carrossel
                const indicatorButton = document.createElement('button');
                indicatorButton.setAttribute('type', 'button');
                indicatorButton.setAttribute('data-bs-target', '#featuredJobsCarousel');
                indicatorButton.setAttribute('data-bs-slide-to', index);
                indicatorButton.setAttribute('aria-label', `Slide ${index + 1}`);
                if (index === 0) {
                    indicatorButton.classList.add('active');
                    indicatorButton.setAttribute('aria-current', 'true');
                }
                carouselIndicators.appendChild(indicatorButton);
            });
        }

        // Função para filtrar as vagas
        function filterJobs() {
            const keywords = document.getElementById('searchKeywords').value.toLowerCase();
            const location = document.getElementById('filterLocation').value.toLowerCase();

            // Exibe a div de resultados ao iniciar a busca
            document.getElementById('jobResultsContainer').style.display = 'block';

            const filtered = allJobs.filter(job => {
                const matchesKeywords = keywords === '' ||
                    job.title.toLowerCase().includes(keywords) ||
                    job.description.toLowerCase().includes(keywords) ||
                    job.company.toLowerCase().includes(keywords) ||
                    job.level.toLowerCase().includes(keywords) ||
                    job.requirements.some(req => req.toLowerCase().includes(keywords)) ||
                    job.responsibilities.some(resp => resp.toLowerCase().includes(keywords));
                
                const matchesLocation = location === '' || job.location.toLowerCase().includes(location);

                return matchesKeywords && matchesLocation;
            });
            displayJobs(filtered);
            // clearJobDetails(); // Removido, pois os detalhes agora são exibidos no modal
            if (currentSelectedCard) {
                currentSelectedCard.classList.remove('selected-card');
                currentSelectedCard = null;
            }
        }

        // Função para selecionar e exibir os detalhes de uma vaga no modal
        function selectJob(event, jobId) {
            event.preventDefault(); // Impede o comportamento padrão, se houver
            const selectedJob = allJobs.find(job => job.id === jobId);

            // Remove o destaque do card selecionado anteriormente, se houver
            if (currentSelectedCard) {
                currentSelectedCard.classList.remove('selected-card');
            }

            // Encontra o card clicado e adiciona o destaque
            let clickedCard = event.target.closest('.job-card');
            if (clickedCard) {
                clickedCard.classList.add('selected-card');
                currentSelectedCard = clickedCard;
            }

            if (selectedJob) {
                // Popula o conteúdo do modal com os detalhes da vaga
                document.getElementById('modalDetailTitle').textContent = selectedJob.title;
                document.getElementById('modalDetailCompany').textContent = selectedJob.company;
                document.getElementById('modalDetailLocation').textContent = selectedJob.location;
                document.getElementById('modalDetailLevel').textContent = selectedJob.level;
                document.getElementById('modalDetailRegime').textContent = selectedJob.regime;
                document.getElementById('modalDetailDescription').innerHTML = selectedJob.description; // Use innerHTML para formatar quebras de linha se necessário

                // Popula requisitos
                const reqList = document.getElementById('modalDetailRequirements');
                reqList.innerHTML = '';
                selectedJob.requirements.forEach(req => {
                    const li = document.createElement('li');
                    li.textContent = req;
                    reqList.appendChild(li);
                });

                // Popula responsabilidades
                const respList = document.getElementById('modalDetailResponsibilities');
                respList.innerHTML = '';
                selectedJob.responsibilities.forEach(resp => {
                    const li = document.createElement('li');
                    li.textContent = resp;
                    respList.appendChild(li);
                });

                document.getElementById('modalDetailLink').href = selectedJob.link;

                // Exibe o modal
                const jobDetailsModal = new bootstrap.Modal(document.getElementById('jobDetailsModal'));
                jobDetailsModal.show();
            }
        }

        // Função para limpar os detalhes da vaga e mostrar a mensagem de placeholder
        // Esta função não é mais estritamente necessária se os detalhes só forem no modal,
        // mas pode ser mantida para clareza ou uso futuro.
        function clearJobDetails() {
            // Se você tivesse uma seção de detalhes na página principal, ela seria limpa aqui.
            // Como os detalhes agora vão para o modal, essa parte não faz mais nada visível na página.
            if (currentSelectedCard) {
                currentSelectedCard.classList.remove('selected-card');
                currentSelectedCard = null;
            }
        }

        // Ao carregar a página, não exibe as vagas inicialmente
        document.addEventListener('DOMContentLoaded', () => {
            populateCarousel(); // Popula o carrossel
            // A chamada a clearJobDetails() aqui não terá um efeito visual direto na página,
            // mas garante o estado inicial da variável currentSelectedCard.
            clearJobDetails(); 
        });