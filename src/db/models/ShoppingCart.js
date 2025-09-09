import { Schema, model, Types } from 'mongoose';

const ShoppingCartSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [
      {
        shopId: {
          type: Types.ObjectId,
          ref: 'Shop',
          required: true,
        },
        productType: {
          type: String,
          enum: ['flower', 'bouquet'],
          required: true,
        },
        productId: {
          type: Types.ObjectId,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ShoppingCart = model('ShoppingCart', ShoppingCartSchema);
