import { RES_MSG } from '../constants/res-msg.js';
import { createOrder, fetchOrderById, updateOrderById } from '../services/orders.js';
import createHttpError from 'http-errors';

export const createOrderController = async (req, res) => {
  const newOrder = await createOrder(req.body);

  res.status(201).json({
    status: 201,
    order: newOrder,
  });
};

export const patchOrderController = async (req, res) => {
  const { orderId } = req.params;
  const orderUpdates = req.body;
  const updatedOrder = await updateOrderById({ orderId, orderUpdates });
  if (!updatedOrder) {
    throw createHttpError(404, RES_MSG[404].noEntity('Order', orderId));
  }

  res.status(201).json({
    status: 201,
    order: updatedOrder,
  });
};

export const getOrderController = async (req, res) => {
  const { orderId } = req.params;
  const order = await fetchOrderById({ orderId });
  if (!order) {
    throw createHttpError(404, RES_MSG[404].noEntity('Order', orderId));
  }

  res.status(200).json({
    status: 200,
    order,
  });
};
