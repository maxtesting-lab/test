document.addEventListener('DOMContentLoaded', () => {
    const order = {
        orderId: 746223,
        price: 799,
        shipping: 50,
        taxes: 0.18,
        discount: 0,
    };
    const taxes = order.price * order.taxes;
    let total = order.price + order.shipping + taxes;
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).replace(' ', ', ');
    const applyButton = document.querySelector('#coupon .btn');
    const couponInput = document.getElementById('code');
    const validCoupons = "discount20";

    document.getElementById('order-id').textContent = "#" + order.orderId;
    document.getElementById('today-date').textContent = formattedDate;
    document.getElementById('subtotal').textContent = "$" + order.price;
    document.getElementById('shipping').textContent = "$" + order.shipping;
    document.getElementById('taxes').textContent = "$" + taxes.toFixed(2);
    document.getElementById('discount').textContent = "$" + order.discount;
    document.getElementById('total').textContent = "$" + total.toFixed(2);
    document.getElementById('pay-now').addEventListener('click', () => {
        window.location.href = "thank-you.html"; // redirect to thank-you page
    });


    applyButton.addEventListener('click', () => {
        const enteredCode = couponInput.value.trim(); // remove extra spaces

        if (enteredCode === validCoupons) {
            const discountPrice = document.getElementById('discount');
            const discountLabel = document.getElementById('discount-label');
            const discountLabelContent = document.createElement('p');
            discountLabelContent.textContent = "-20%";
            discountPrice.classList.add('success');
            order.discount = total * 0.2;
            total = total * 0.8;
            discountPrice.textContent = "-$" + order.discount.toFixed(2);
            discountLabel.classList.add('success-label');
            discountLabel.appendChild(discountLabelContent);
            document.getElementById('total').textContent = "$" + total.toFixed(2);
        } else {
            alert('Invalid coupon code.');
        }
    });

});
