import React, { useState } from 'react';
import { applyCoupon } from '../api/couponApi';

function CheckoutPage() {
  const [couponCode, setCouponCode] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleApplyCoupon = async (e) => {
    e.preventDefault();

    try {
      const response = await applyCoupon(couponCode);
      setDiscountedPrice(response.discountedPrice);
      setErrorMessage('');
    } catch (error) {
      setDiscountedPrice('');
      setErrorMessage('Invalid coupon code. Please try again.');
    }
  };

  return (
    <div>
      <h2>Checkout Page</h2>
      <form onSubmit={handleApplyCoupon}>
        <label>
          Coupon Code:
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            required
          />
        </label>
        <button type="submit">Apply Coupon</button>
      </form>
      {discountedPrice ? (
        <p>Discounted Price: {discountedPrice}</p>
      ) : (
        <p>No coupon applied.</p>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default CheckoutPage;
