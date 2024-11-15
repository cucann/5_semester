document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    let flippedCards = [];
    let lockBoard = false;

    function flipCard() {
        if (lockBoard || flippedCards.includes(this)) return;

        this.classList.add("flipped");
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }

    function checkForMatch() {
        lockBoard = true;
        const [firstCard, secondCard] = flippedCards;

        if (firstCard.dataset.name === secondCard.dataset.name) {
            flippedCards = [];
            lockBoard = false;
        } else {
            setTimeout(() => {
                try {
                    firstCard.classList.remove("flipped");
                    secondCard.classList.remove("flipped");
                    flippedCards = [];
                    lockBoard = false;
                } catch (error) {
                    console.error("Ошибка при обработке карточек:", error);
                }
            }, 1000);
        }
    }

    cards.forEach(card => card.addEventListener("click", flipCard));
});
