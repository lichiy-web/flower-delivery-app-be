import { fetchAllFlowersByShopId } from '../services/flowers.js';

export const getFlowersController = async (req, res) => {
  const { shopId } = req.params;
  console.log({ shopId });
  const flowers = await fetchAllFlowersByShopId({ shopId });

  res.status(200).json({
    status: 200,
    flowers,
  });
};
