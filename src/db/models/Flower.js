import { Schema, model, Types } from 'mongoose';

const FlowerSchema = new Schema(
  {
    shopId: {
      type: Types.ObjectId,
      ref: 'Shop',
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      enum: [
        'red',
        'pink',
        'white-pink',
        'yellow',
        'orange',
        'coral',
        'peach',
        'white',
        'blue',
        'purple',
        'black',
      ],
    },
    description: {
      type: String,
      maxlength: 250,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    photoUrl: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Flower = model('Flower', FlowerSchema);
