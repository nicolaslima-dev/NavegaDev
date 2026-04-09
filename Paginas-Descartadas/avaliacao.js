// Lógica para o Formulário de Avaliação Detalhada
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('detailedFeedbackForm');
            const feedbackMessageDiv = document.getElementById('feedbackMessage');
            const satisfacaoGeral = document.getElementById('satisfacaoGeral');
            const encontrou = document.getElementById('encontrou');

            form.addEventListener('submit', function(event) {
                // Previne o envio padrão do formulário
                event.preventDefault();

                // Limpa mensagens anteriores
                feedbackMessageDiv.innerHTML = '';
                feedbackMessageDiv.className = 'mt-3'; // Remove classes de estilo anteriores

                let isValid = true;
                let errorMessage = '';

                // Validação para 'satisfacaoGeral'
                if (satisfacaoGeral.value === "") {
                    isValid = false;
                    errorMessage += 'Por favor, selecione sua satisfação geral com o site.<br>';
                    satisfacaoGeral.classList.add('is-invalid'); // Adiciona classe de erro do Bootstrap
                } else {
                    satisfacaoGeral.classList.remove('is-invalid');
                }

                // Validação para 'encontrou'
                if (encontrou.value === "") {
                    isValid = false;
                    errorMessage += 'Por favor, informe se você encontrou o que procurava.<br>';
                    encontrou.classList.add('is-invalid');
                } else {
                    encontrou.classList.remove('is-invalid');
                }

                if (isValid) {
                    // Se tudo estiver válido
                    feedbackMessageDiv.classList.add('feedback-message', 'success');
                    feedbackMessageDiv.innerHTML = 'Obrigado! Sua avaliação foi enviada com sucesso!';
                    form.reset(); // Limpa o formulário após o envio
                    // Você pode adicionar aqui a lógica para enviar os dados para um servidor,
                    // por exemplo, usando fetch() ou XMLHttpRequest.
                    // Ex: setTimeout(() => window.location.href = 'avaliacao.html', 2000);
                } else {
                    // Se houver erros
                    feedbackMessageDiv.classList.add('feedback-message', 'error');
                    feedbackMessageDiv.innerHTML = '<strong>Atenção:</strong><br>' + errorMessage;
                }
            });
        });

        // Lógica para a Avaliação por Estrelas
        document.querySelectorAll('.stars').forEach(starsContainer => {
            const contentId = starsContainer.getAttribute('data-content-id');
            const thankYouMessage = document.getElementById(`thanks-${contentId}`);
            const commentSection = document.getElementById(`comment-${contentId}`);
            let currentRating = 0; // Para armazenar a avaliação atual

            starsContainer.addEventListener('mouseover', function(e) {
                if (e.target.classList.contains('star')) {
                    const value = parseInt(e.target.dataset.value);
                    highlightStars(starsContainer, value);
                }
            });

            starsContainer.addEventListener('mouseout', function(e) {
                highlightStars(starsContainer, currentRating); // Volta para a avaliação atual
            });

            starsContainer.addEventListener('click', function(e) {
                if (e.target.classList.contains('star')) {
                    const rating = parseInt(e.target.dataset.value);
                    currentRating = rating; // Define a avaliação atual
                    highlightStars(starsContainer, rating);

                    console.log(`Avaliação de ${rating} estrelas para ${contentId}`);
                    thankYouMessage.textContent = `Obrigado por sua avaliação de ${rating} estrelas!`;
                    commentSection.style.display = 'block'; // Mostra o campo de comentário opcional

                }
            });

            function highlightStars(container, value) {
                container.querySelectorAll('.star').forEach(star => {
                    if (parseInt(star.dataset.value) <= value) {
                        star.classList.add('filled');
                    } else {
                        star.classList.remove('filled');
                    }
                });
            }
        });

        function submitStarComment(contentId) {
            const commentTextarea = document.getElementById(`comment-text-${contentId}`);
            const commentText = commentTextarea.value;
            const commentFeedbackDiv = document.getElementById(`comment-feedback-${contentId}`);

            // Limpa mensagens anteriores
            commentFeedbackDiv.innerHTML = '';
            commentFeedbackDiv.className = 'comment-feedback-message mt-2'; // Reset classes

            if (commentText.trim() === '') {
                // Se o campo de comentário estiver vazio, exibe uma mensagem de erro
                commentFeedbackDiv.classList.add('error');
                commentFeedbackDiv.innerHTML = 'Por favor, escreva um comentário antes de enviar.';
                commentTextarea.classList.add('is-invalid'); // Adiciona classe de erro do Bootstrap
            } else {
                // Se o comentário for válido
                console.log(`Comentário para ${contentId}: "${commentText}"`);
                commentFeedbackDiv.classList.add('success');
                commentFeedbackDiv.innerHTML = 'Comentário enviado com sucesso! Obrigado pelo seu feedback.';
                commentTextarea.classList.remove('is-invalid'); // Remove classe de erro
                commentTextarea.value = ''; // Limpa o campo
                
            }
        }