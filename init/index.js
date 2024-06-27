const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MongoStore = require('connect-mongo');


// const MONGO_URL = "mongodb://127.0.0.1:27017/passenger";
const ATLAS_URL = process.env.ATLAS_DB_URL;


async function main() {
  await mongoose.connect(ATLAS_URL);
}
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });



const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({...obj, owner: '667a7bca34ad27f020f3d290'}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();