document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const name = item.querySelector('h3').textContent;
            const price = item.querySelector('p').textContent;

            cartItems.push({ name, price });
            alert(`${name} has been added to your cart.`);
        });
    });
});
