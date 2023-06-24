import React, { useState } from 'react';
import { createCoupon } from '../api/couponApi';

function CouponForm({ onCouponCreated }) {
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const couponData = {
      code,
      discount,
      expirationDate,
    };

    try {
      const newCoupon = await createCoupon(couponData);
      onCouponCreated(newCoupon);
      setCode('');
      setDiscount('');
      setExpirationDate('');
    } catch (error) {
      console.error('Error creating coupon:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Coupon</h2>
      <label>
        Code:
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </label>
      <label>
        Discount (%):
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          required
        />
      </label>
      <label>
        Expiration Date:
        <input
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default CouponForm;
