import { Schema, model, Types } from 'mongoose';

const BouquetSchema = new Schema(
  {
    shopId: {
      type: Types.ObjectId,
      ref: 'Shop',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    colors: {
      type: [
        {
          type: String,
          enum: ['red', 'pink', 'white-pink', 'yellow', 'coral', 'peach', 'white', 'blue', 'black'],
        },
      ],
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    photoUrl: String,
    isActive: {
      type: Boolean,
      default: true,
    },
    flowers: {
      type: [
        {
          flowerId: {
            type: Types.ObjectId,
            ref: 'Flower',
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
      required: false,
      default: undefined,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Bouquet = model('Bouquet', BouquetSchema);
