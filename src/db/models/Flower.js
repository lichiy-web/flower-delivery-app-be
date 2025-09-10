import { Schema, model, Types } from 'mongoose';

const FlowerSchema = new Schema(
  {
    shopId: {
      type: Types.ObjectId,
      ref: 'Shop',
      required: true,
    },
    type: {
      type: String,
      enum: ['single', 'bouquet'],
      default: 'single',
    },
    categories: {
      type: [String],
      validate: {
        validator: function (arr) {
          // single flower only requires one category: rose, tulip etc
          if (this.type === 'single') return arr.length === 1;
          // bouquet requires at least 1 category
          if (this.type === 'bouquet') return arr.length >= 1;
        },
        message: function () {
          return this.type === 'single'
            ? 'Flower only requires one category'
            : 'Bouquet requires at least 1 category';
        },
      },
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
      required: true,
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
