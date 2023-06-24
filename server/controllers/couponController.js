import Coupon from '../models/coupon.js';

// Create a new coupon
export async function createCoupon(req, res) {
  try {
    const { code, discount, expirationDate } = req.body;
    const coupon = new Coupon({
      code,
      discount,
      expirationDate,
    });
    const newCoupon = await coupon.save();
    res.status(201).json(newCoupon);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Update an existing coupon
export async function updateCoupon(req, res) {
  try {
    const { code, discount, expirationDate } = req.body;
    const { couponId } = req.params;
    const updatedCoupon = await findByIdAndUpdate(
      couponId,
      {
        code,
        discount,
        expirationDate,
      },
      { new: true }
    );
    if (!updatedCoupon) {
      return res.status(404).json({ error: 'Coupon not found' });
    }
    res.json(updatedCoupon);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Delete a coupon
export async function deleteCoupon(req, res) {
  try {
    const { couponId } = req.params;
    const deletedCoupon = await findByIdAndDelete(couponId);
    if (!deletedCoupon) {
      return res.status(404).json({ error: 'Coupon not found' });
    }
    res.json(deletedCoupon);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get all coupons
export async function getAllCoupons(req, res) {
  try {
    const coupons = await find();
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
