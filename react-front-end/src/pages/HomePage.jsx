import React from 'react';
import CouponList from '../components/CouponList';
import CouponForm from '../components/CouponForm';

function HomePage() {
  const handleCouponCreated = (newCoupon) => {
    // Handle coupon creation logic here
    console.log('New coupon created:', newCoupon);
  };

  const handleDeleteCoupon = (couponId) => {
    // Handle coupon deletion logic here
    console.log('Delete coupon with ID:', couponId);
  };

  return (
    <div>
      <h2>Home Page</h2>
      <CouponForm onCouponCreated={handleCouponCreated} />
      <CouponList onDeleteCoupon={handleDeleteCoupon} />
    </div>
  );
}

export default HomePage;
