import { Schema, model, Types } from 'mongoose';

const OrderSchema = new Schema(
  {
    shopId: {
      type: Types.ObjectId,
      ref: 'Shop',
      required: true,
    },
    items: [
      {
        productType: {
          type: String,
          enum: ['flower', 'bouquet'],
          required: true,
        },
        productId: {
          type: Types.ObjectId,
          required: true,
        },
        name: {
          type: String,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'delivering', 'completed', 'canceled'],
      default: 'pending',
    },
    deliveryTo: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Order = model('Order', OrderSchema);
