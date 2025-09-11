import { Schema, model, Types } from 'mongoose';

export const OrderSchema = new Schema(
  {
    shopId: {
      type: Types.ObjectId,
      ref: 'Shop',
      required: true,
    },
    items: [
      {
        type: {
          type: String,
          enum: ['single', 'bouquet'],
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
    orderedAt: {
      type: Date,
      required: true,
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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Order = model('Order', OrderSchema);

// console.log({
//   tree: OrderSchema.tree,
//   productTypes: OrderSchema.tree.items[0].productType.enum,
// });
