'use strict'

{
    const coupon = document.querySelector('button');
    const overlay = document.querySelector('.coupon-btn-overlay');

    coupon.addEventListener('click', () => {
        // coupon.parentNode.classList.add('coupon-btn');
        overlay.classList.add('show');
    });
}