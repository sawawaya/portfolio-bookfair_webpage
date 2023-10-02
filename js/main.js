'use strict'

{
    const coupon = document.querySelector('button');
    const overlay = document.querySelector('.coupon-btn-overlay');

    coupon.addEventListener('click', () => {
        // coupon.parentNode.classList.add('coupon-btn');
        coupon.style.backgroundImage = 'none';
        coupon.style.boxShadow = '0px 0px';
        overlay.classList.add('show');
    });
}