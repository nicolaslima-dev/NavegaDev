// Adiciona um listener para o evento 'submit' do formulário
        document.getElementById('duvidaForm').addEventListener('submit', function(event) {
            // Previne o envio padrão do formulário para que possamos fazer a validação
            event.preventDefault(); 

            const emailInput = document.getElementById('emailDuvidaInput');
            const textoDuvidaTextarea = document.getElementById('textoDuvidaTextarea');
            const mensagemFeedbackSpan = document.getElementById('mensagem-feedback');

            let isValid = true; // Flag para controlar se o formulário é válido

            // --- Função auxiliar para mostrar/esconder feedback ---
            function showFeedback(element, messageElement, isFieldValid) {
                if (isFieldValid) {
                    element.classList.remove('is-invalid');
                    element.classList.add('is-valid'); // Opcional: Adicionar classe de sucesso
                    messageElement.textContent = ''; // Limpa a mensagem de erro
                } else {
                    element.classList.add('is-invalid');
                    element.classList.remove('is-valid');
                    // Define a mensagem de erro com base no data attribute
                    messageElement.textContent = messageElement.dataset.errorMessage; 
                }
            }

            // --- Limpa feedback anterior antes de revalidar ---
            mensagemFeedbackSpan.style.display = "none";
            mensagemFeedbackSpan.className = "fw-bold"; // Limpa classes de cor

            // --- Validação do campo de E-mail ---
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex simples para email
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
                showFeedback(emailInput, document.getElementById('emailDuvidaFeedback'), false);
                isValid = false;
            } else {
                showFeedback(emailInput, document.getElementById('emailDuvidaFeedback'), true);
            }

            // --- Validação do campo de Dúvida (textarea) ---
            if (textoDuvidaTextarea.value.trim() === '') {
                showFeedback(textoDuvidaTextarea, document.getElementById('textoDuvidaFeedback'), false);
                isValid = false;
            } else {
                showFeedback(textoDuvidaTextarea, document.getElementById('textoDuvidaFeedback'), true);
            }

            // --- Lógica final de feedback e envio ---
            if (isValid) {
                // Se tudo estiver válido, exibe a mensagem de sucesso
                mensagemFeedbackSpan.textContent = "Dúvida enviada com sucesso! Em breve, entraremos em contato.";
                mensagemFeedbackSpan.classList.add('text-success'); // Adiciona cor verde
                mensagemFeedbackSpan.style.display = "inline";

                // Opcional: Limpa os campos após o envio bem-sucedido
                emailInput.value = "";
                textoDuvidaTextarea.value = "";

                // (Opcional) Esconde a mensagem após 5 segundos
                setTimeout(() => {
                    mensagemFeedbackSpan.style.display = "none";
                }, 5000);

            } else {
                // Se houver algum erro, exibe uma mensagem geral de erro (se desejar)
                // ou simplesmente permite que as mensagens de feedback de campo apareçam.
                // Como as mensagens de feedback de campo já são visíveis, esta linha abaixo
                // pode ser omitida ou usada para um feedback mais genérico se preferir.
                // mensagemFeedbackSpan.textContent = "Por favor, corrija os erros no formulário.";
                // mensagemFeedbackSpan.classList.add('text-danger');
                // mensagemFeedbackSpan.style.display = "inline";
            }
        });

        // --- Define as mensagens de erro personalizadas usando data attributes ---
        // Isso facilita a manutenção das mensagens de erro.
        document.getElementById('emailDuvidaFeedback').dataset.errorMessage = 'Por favor, insira um e-mail válido (ex: seuemail@dominio.com).';
        document.getElementById('textoDuvidaFeedback').dataset.errorMessage = 'Por favor, descreva sua dúvida.';