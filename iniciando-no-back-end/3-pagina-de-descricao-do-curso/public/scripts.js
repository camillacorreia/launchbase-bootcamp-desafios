const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', (event) => {
    const cardId = event.target.dataset.id;
    window.location.href = `/courses/${cardId}`;
  });
}