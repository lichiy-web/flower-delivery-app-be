import { Types } from 'mongoose';
import { Flower } from '../db/models/Flower.js';
import { Shop } from '../db/models/Shop.js';
import { RES_MSG } from '../constants/res-msg.js';
import createHttpError from 'http-errors';

export const fetchAllFlowersByShopId = async ({ shopId }) => {
  const shop = await Shop.findOne({ _id: new Types.ObjectId(shopId) });
  if (!shop) {
    throw createHttpError(404, RES_MSG[404].noEntity('Shop', shopId));
  }

  const flowers = await Flower.find({ shopId: new Types.ObjectId(shopId) });
  return flowers;
};
