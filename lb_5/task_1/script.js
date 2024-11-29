const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('#menu-list li');

// Обработчик фильтрации
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        menuItems.forEach(item => {
            if (category === 'все' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
