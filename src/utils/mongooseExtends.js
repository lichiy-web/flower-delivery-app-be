import { Types } from 'mongoose';

export class MongooseStaticMethods {
  static async findWithMeta(ids) {
    const objectIds = ids.map(id => new Types.ObjectId(id));
    const docs = await this.find({ _id: { $in: objectIds } });

    const foundSet = new Set(docs.map(doc => doc._id.toString()));
    const missing = ids.filter(id => !foundSet.has(id));

    return {
      found: docs,
      missing,
      totalRequested: ids.length,
      totalFound: docs.length,
      totalMissing: ids.length - docs.length,
    };
  }
}
