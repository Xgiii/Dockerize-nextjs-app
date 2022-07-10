// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from 'mongodb';

const DATABASE = 'mongodb://mongo:27017/bookstore';

export default async function handler(req, res) {
  const client = await MongoClient.connect(DATABASE);

  const books = await client.db().collection('books').find({}).toArray();

  res.status(200).json({ message: 'success', books });
  client.close();
}
