
const buyButtons = document.querySelectorAll('.buy-btn');

    // Додаємо обробник події для кожної кнопки
    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Запобігаємо стандартній поведінці посилання
            window.open('index2.html', '_blank'); // Відкриваємо кошик у новій вкладці
        });
    });
    // Функція для додавання товару до кошика
function addToCart(productName, price) {
    // Отримуємо існуючі товари з Local Storage або створюємо порожній масив
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Додаємо новий товар до кошика
    cart.push({ name: productName, price: price });
  
    // Зберігаємо оновлений кошик у Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Оновлюємо відображення кількості товарів у кошику
    updateCartCount();
  }
  
  // Функція для оновлення відображення кількості товарів у кошику
  function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelector('.basket-count').textContent = cart.length;
  }
  
  // Додаємо обробники подій для кнопок "Купити"
  document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const productName = event.target.parentElement.querySelector('h2').textContent;
      const priceText = event.target.parentElement.querySelector('.price').textContent;
      const price = parseFloat(priceText.replace('Ціна: $', '')); // Конвертуємо ціну в число
  
      addToCart(productName, price);
    });
  });
  
  // Оновлюємо кількість товарів у кошику при завантаженні сторінки
  updateCartCount();
  // Функція для підрахунку загальної суми замовлення
function calculateTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((sum, item) => sum + item.price, 0); // Підрахунок загальної суми
    
    // Відображаємо загальну суму на сторінці
    document.querySelector('.prise').textContent = total.toFixed(2); // Відображення суми у форматі 0.00
  }
  
  // Викликаємо функцію для підрахунку суми при завантаженні сторінки
  document.addEventListener('DOMContentLoaded', calculateTotal);
  // Функція для додавання товару до кошика
function addToCart(productName, price) {
    // Отримуємо існуючі товари з Local Storage або створюємо порожній масив
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Додаємо новий товар до кошика
    cart.push({ name: productName, price: price });
  
    // Зберігаємо оновлений кошик у Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Додаємо обробники подій для кнопок "Купити"
  document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const productName = event.target.parentElement.querySelector('h2').textContent;
      const priceText = event.target.parentElement.querySelector('.price').textContent;
      const price = parseFloat(priceText.replace('Ціна: $', '')); // Конвертуємо ціну в число
  
      addToCart(productName, price);
  
      // Перенаправляємо користувача на сторінку кошика після додавання товару
      window.location.href = 'cart.html'; // Замініть 'cart.html' на шлях до вашої сторінки кошика
    });
  });
// Функція для підрахунку загальної суми замовлення
function calculateTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((sum, item) => sum + item.price, 0); // Підрахунок загальної суми
    
    // Відображаємо загальну суму на сторінці
    document.querySelector('.prise').textContent = total.toFixed(2); // Відображення суми у форматі 0.00
  }
  
  // Викликаємо функцію для підрахунку суми при завантаженні сторінки
  document.addEventListener('DOMContentLoaded', calculateTotal);
    document.addEventListener('DOMContentLoaded', () => {
  // Функція для оновлення кошика на сторінці
  function updateCart() {
    // Отримуємо кошик з localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPriceElement = document.querySelector('.prise');
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Оновлюємо суму замовлення на сторінці
    totalPriceElement.textContent = totalPrice;

    // Оновлюємо кількість товарів у кошику
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.basket-count').textContent = cartCount;
  }

  // Ініціалізуємо оновлення кошика при завантаженні сторінки
  updateCart();

  // Обробник події для надсилання форми
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігаємо стандартному відправленню форми

    // Очищаємо кошик у localStorage
    localStorage.removeItem('cart');

    // Оновлюємо відображення на сторінці
    updateCart();

    // Можна також додати повідомлення про успішне надсилання
    alert('Ваше замовлення надіслано!');

    // Очистити форму
    event.target.reset();
  });
});
function addToCart(product) {
    // Отримуємо поточний кошик з localStorage або створюємо новий, якщо він порожній
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Перевірка, чи є товар вже в кошику
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex >= 0) {
        // Якщо товар вже є в кошику, збільшуємо кількість
        cart[existingProductIndex].quantity += 1;
    } else {
        // Якщо товар новий, додаємо його до кошика
        cart.push({ ...product, quantity: 1 });
    }

    // Зберігаємо оновлений кошик у localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Оновлюємо кількість товарів у кошику
    updateCartCount();

    // Сповіщення користувача про успішне додавання
    alert('Товар додано до кошика!');
}
function updateCartTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.querySelector('.basket-total').textContent = `$${total.toFixed(2)}`;
}
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.basket-count').textContent = totalItems;

    // Оновлюємо загальну суму
    updateCartTotal();
}
