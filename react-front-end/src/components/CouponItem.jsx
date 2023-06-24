import React from 'react';

function CouponItem({ coupon, onDeleteCoupon }) {
  const handleDelete = () => {
    onDeleteCoupon(coupon._id);
  };

  return (
    <li>
      <div>
        <strong>Code:</strong> {coupon.code}
      </div>
      <div>
        <strong>Discount:</strong> {coupon.discount}%
      </div>
      <div>
        <strong>Expiration Date:</strong> {coupon.expirationDate}
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default CouponItem;
