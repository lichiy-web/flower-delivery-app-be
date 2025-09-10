import { Types } from 'mongoose';
import { Flower } from '../db/models/Flower.js';

export const fetchAllFlowersByShopId = async ({ shopId }) => {
  const flowers = await Flower.find({ shopId: new Types.ObjectId(shopId) });

  return flowers;
};
