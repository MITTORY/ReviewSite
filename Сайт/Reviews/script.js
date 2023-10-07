// Создаем объект для хранения количества отзывов по оценкам
const ratingsCount = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
};

const reviewForm = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');

reviewForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const reviewText = document.getElementById('reviewText').value;
    const rating = parseInt(document.getElementById('rating').value); // Получаем оценку и преобразуем в число
    const statusPay = document.getElementById('statusPay').value; // Получаем статус оплаты

    // Предположим, что вы будете сохранять отзывы на сервере.
    // Здесь добавьте код для отправки отзыва на сервер.

    // После успешной отправки отзыва, добавьте его на страницу.
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
        <strong>${name}</strong> (${email})<br>
        Оценка: ${rating}<br>
        Статус оплаты: ${statusPay === '1' ? 'Оплачено' : 'Не оплачено'}<br>
        ${reviewText}
    `;
    reviewsList.appendChild(reviewElement);

    // Увеличиваем счетчик отзывов для данной оценки
    ratingsCount[rating]++;

    // Обновляем счетчики для каждой оценки
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`rating${i}`).textContent = ratingsCount[i];
    }

    // Сброс формы
    reviewForm.reset();
});