import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://karnammanohar2405_db_user:man2405@cluster0.efxr4rh.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("Connected");
} catch (err) {
  console.error(err);
}