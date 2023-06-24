const API_URL = '/api'; // Update with your API URL

// Create a new coupon
export const createCoupon = async (couponData) => {
  try {
    const response = await fetch(`${API_URL}/coupons`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(couponData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error creating coupon');
  }
};

// Delete a coupon
export const deleteCoupon = async (couponId) => {
  try {
    await fetch(`${API_URL}/coupons/${couponId}`, {
      method: 'DELETE',
    });
  } catch (error) {
    throw new Error('Error deleting coupon');
  }
};

// Get all coupons
export const getAllCoupons = async () => {
  try {
    const response = await fetch(`${API_URL}/coupons`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error getting coupons');
  }
};
//crreate apply coupon
export const applyCoupon = async (couponData) => {
  try {
    const response = await fetch(`${API_URL}/coupons/apply`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(couponData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error applying coupon');
  }
}
