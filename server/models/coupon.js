import { Schema, model } from 'mongoose';

const couponSchema = new Schema({
  code: {
    type: String,
    unique: true,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
});

const Coupon = model('Coupon', couponSchema);

export default Coupon;
