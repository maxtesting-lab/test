function updateOrderInfo() {
  const orderDiv = document.getElementById('order');

  const orderId = orderDiv.getAttribute('data-order-id');
  const product = orderDiv.getAttribute('data-product');
  const price = orderDiv.getAttribute('data-price');
  const shipping = orderDiv.getAttribute('data-shipping');



  document.getElementById('order-id-display').textContent = orderId;
  document.getElementById('order-product-display').textContent = product;
  document.getElementById('order-price-display').textContent = price;
  document.getElementById('order-shipping-display').textContent = shipping;
  document.getElementById('order-total-display').textContent = Number(shipping) + Number(price);
}

updateOrderInfo();
