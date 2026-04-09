document.addEventListener('DOMContentLoaded', function() {
            // Script para o pop-up de entrevistas
            const interviewPopup = document.getElementById('interviewPopup');
            const closePopupBtn = document.getElementById('closePopupBtn');
            const popupInterviewName = document.getElementById('popupInterviewName');
            const popupInterviewContent = document.getElementById('popupInterviewContent');
            const openPopupButtons = document.querySelectorAll('.open-interview-popup');

            openPopupButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const name = this.getAttribute('data-name');
                    const interviewHtml = this.getAttribute('data-interview');

                    popupInterviewName.textContent = name;
                    popupInterviewContent.innerHTML = interviewHtml;
                    interviewPopup.classList.add('active');
                });
            });

            closePopupBtn.addEventListener('click', function() {
                interviewPopup.classList.remove('active');
            });

            interviewPopup.addEventListener('click', function(event) {
                if (event.target === interviewPopup) {
                    interviewPopup.classList.remove('active');
                }
            });
        });