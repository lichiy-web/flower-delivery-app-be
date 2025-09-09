export const createOrderController = async (req, res) => {
  res.status(201).json({
    status: 201,
    order: { order: 'test created order' },
  });
};

export const updateOrderController = async (req, res) => {
  res.status(201).json({
    status: 201,
    order: { order: 'test updated order' },
  });
};

export const getOrderController = async (req, res) => {
  res.status(200).json({
    status: 200,
    order: { order: 'test existed order' },
  });
};

export const getAllOrdersController = async (req, res) => {
  res.status(200).json({
    status: 200,
    orders: [
      { order: 'test order1' },
      { order: 'test order2' },
      { order: 'test order3' },
      { order: 'test order4' },
    ],
  });
};
