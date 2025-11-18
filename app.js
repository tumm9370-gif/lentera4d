document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let cart = [];
    let total = 0;

    // Trigger animasi saat scroll atau load
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animation = entry.target.dataset.animation;
                entry.target.style.animation = `${animation} 1s ease-in`;
            }
        });
    });

    products.forEach(product => observer.observe(product));

    // Tambah ke keranjang
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const product = e.target.parentElement;
            const name = product.querySelector('h3').textContent;
            const price = parseInt(product.querySelector('p').textContent.replace('Rp ', '').replace('.', ''));
            cart.push({ name, price });
            total += price;
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = cart.map(item => `<p>${item.name} - Rp ${item.price}</p>`).join('');
        totalElement.textContent = total;
    }
});
