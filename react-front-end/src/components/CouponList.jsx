import React from 'react';
import CouponItem from './CouponItem';

function CouponList({ coupons, onDeleteCoupon }) {
  return (
    <div>
      <h2>Coupon List</h2>
      {coupons.length === 0 ? (
        <p>No coupons found.</p>
      ) : (
        <ul>
          {coupons.map((coupon) => (
            <CouponItem
              key={coupon._id}
              coupon={coupon}
              onDeleteCoupon={onDeleteCoupon}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CouponList;
