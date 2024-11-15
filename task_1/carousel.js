document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const items = document.querySelectorAll('.carousel-item');
  const interval = 2500; 

  function showNext() {
      try {
          items[index].classList.remove('active');
          index = (index + 1) % items.length;
          items[index].classList.add('active');
      } catch (error) {
          console.error("Ошибка в работе карусели:", error);
      }
  }

  if (items.length > 0) {
      items[index].classList.add('active');
      setInterval(showNext, interval);
  } else {
      console.warn("Элементы для карусели не найдены.");
  }
});
