document.getElementById('paypal').addEventListener('click', () => {
    // Add your PayPal payment processing code here
    alert('PayPal selected');
});

document.getElementById('mercadopago').addEventListener('click', () => {
    // Add your MercadoPago payment processing code here
    alert('MercadoPago selected');
});

document.getElementById('creditDebit').addEventListener('click', () => {
    // Add your credit/debit card payment processing code here
    alert('Credit/Debit Card selected');
});

const processBtn = document.querySelector('.process-btn');

processBtn.addEventListener('click', () => {
  // Aquí puedes agregar el código JavaScript que quieres ejecutar al hacer clic en el botón
  console.log('Botón "Procesar" presionado');
});