import { Schema, model } from 'mongoose';

const ShopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      maxlength: 250,
    },
    address: {
      type: String,
      maxlength: 120,
    },
    phone: {
      type: String,
    },
    logoUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Shop = model('Shop', ShopSchema);
