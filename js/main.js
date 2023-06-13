'use strict'

{
    const coupon = document.querySelector('button');

    coupon.addEventListener('click', () => {
        coupon.parentNode.classList.add('coupon-btn');
    });
}