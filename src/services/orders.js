import { RES_MSG } from '../constants/res-msg.js';
import { Flower } from '../db/models/Flower.js';
import { Order } from '../db/models/Order.js';
import createHttpError from 'http-errors';

export const createOrder = async order => {
  // Doubled productIds are allowed, each item is considered as independent one
  const productIdList = order.items.map(({ productId }) => productId);
  const {
    found: orderedFlowers,
    missing: missingIds,
    totalMissing,
  } = await Flower.findWithMeta(productIdList);
  if (totalMissing > 0) {
    throw createHttpError(404, RES_MSG[404].noProducts(missingIds));
  }

  let totalAmount = 0;
  orderedFlowers.forEach((flower, i) => {
    const item = order.items[i];
    const isFlowerEnough = flower.stock >= item.quantity;
    if (!isFlowerEnough) {
      throw createHttpError(409, RES_MSG[409].insufficientStockOf(flower.name, flower._id));
    }
    totalAmount += flower.price * item.quantity;
    item.name = flower.name;
    item.price = flower.price;
    item.type = flower.type;
  });
  order.totalAmount = totalAmount;

  const newOrder = await Order.create(order);
  return newOrder;
};

export const updateOrderById = async ({ orderId, orderUpdates }) => {
  const order = await fetchOrderById({ orderId });

  if (orderUpdates?.items?.length) {
    const itemIdList = orderUpdates.items.map(({ _id }) => _id);
    const {
      found: orderedFlowers,
      missing: missingIds,
      totalMissing,
    } = await Flower.findWithMeta(productIdList);
    if (totalMissing > 0) {
      throw createHttpError(404, RES_MSG[404].noProducts(missingIds));
    }
  }
};

export const fetchOrderById = async ({ orderId }) => {
  const order = await Order.findOne({ _id: orderId });
  if (!order) {
    throw createHttpError(404, RES_MSG[404].noEntity('Order', orderId));
  }
  return order;
};
