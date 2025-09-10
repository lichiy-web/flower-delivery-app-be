import { closeMongoConnection, initMongoDB } from '../src/db/initMongoDB.js';
import { Flower } from '../src/db/models/Flower.js';

initMongoDB();
await Flower.updateMany({}, [
  {
    $set: {
      categories: '$category',
    },
  },
  { $unset: 'category' },
]);
closeMongoConnection();
