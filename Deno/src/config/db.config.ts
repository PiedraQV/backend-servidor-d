import { MongoClient } from "../deps.ts";
import { Product } from "../types/product.type.ts";

const client = new MongoClient();

await client.connect(
    "https://data.mongodb-api.com/app/data-eixer/endpoint/data/v1/action/findOne"
  );

const db = client.database('test');


export const products = db.collection<Product>('deno');