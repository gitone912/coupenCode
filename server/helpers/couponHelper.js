// Check if a coupon is valid (not expired)
export function isValidCoupon(coupon) {
    const currentDate = new Date();
    return currentDate <= coupon.expirationDate;
  }
  
  // Apply discount to the total amount based on coupon
  export function   applyDiscount(totalAmount, coupon) {
    if (coupon.discount <= 0) {
      return totalAmount;
    }
  
    const discountAmount = (totalAmount * coupon.discount) / 100;
    return totalAmount - discountAmount;
  }
  