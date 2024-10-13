// Функция для замены изображения лапы на новую при наведении
function changeImage(button) {
    const img = button.querySelector('.paw-icon'); // Находим изображение внутри кнопки
    img.src = './img/Group 29.png'; // Меняем изображение на лапу при наведении
}

// Функция для восстановления исходного изображения
function resetImage(button) {
    const img = button.querySelector('.paw-icon'); // Находим изображение внутри кнопки
    img.src = './img/Group 28.png'; // Возвращаем изображение лапы на оригинал
}


// Добавляем события наведения на все кнопки
document.querySelectorAll('.paw-button').forEach(button => {
    button.addEventListener('mouseover', function() {
        changeImage(this);
    });

    button.addEventListener('mouseout', function() {
        resetImage(this);
    });
});



function toggleFaq(faqElement) {
    // Ищем родительский элемент faq
    var faq = faqElement.parentElement;
    
    // Открываем/закрываем ответ
    var answer = faq.querySelector('.faq-answer');
    
    if (faq.classList.contains('open')) {
        // Если открыт, закрываем
        answer.style.display = 'none';
        faq.classList.remove('open');
        faqElement.querySelector('.icon').textContent = '+';
    } else {
        // Если закрыт, открываем
        answer.style.display = 'block';
        faq.classList.add('open');
        faqElement.querySelector('.icon').textContent = '-';
    }
}
