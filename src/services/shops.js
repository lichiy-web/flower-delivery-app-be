import { Shop } from '../db/models/Shop.js';

export const fetchAllShopsService = () => {
  return Shop.find();
};
