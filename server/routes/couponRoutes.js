import { Router } from 'express';
const router = Router();
import { createCoupon, updateCoupon, deleteCoupon, getAllCoupons } from '../controllers/couponController.js';

// Create a new coupon
router.post('/coupons', createCoupon);

// Update an existing coupon
router.put('/coupons/:couponId', updateCoupon);

// Delete a coupon
router.delete('/coupons/:couponId', deleteCoupon);

// Get all coupons
router.get('/coupons', getAllCoupons);

export default router;
