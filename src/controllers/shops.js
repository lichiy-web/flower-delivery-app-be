import { fetchAllShopsService } from '../services/shops.js';

export const getAllShopsController = async (req, res) => {
  const shops = await fetchAllShopsService();
  res.status(200).json({
    status: 200,
    shops,
  });
};
