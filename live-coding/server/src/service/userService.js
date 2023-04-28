import { fetchCollection } from "../database/krakenMongoClient.js";

async function getProfileDetails(username) {
  const critera = { username };

  return await fetchCollection("profileDetails").findOne(critera);
}

async function updateProfileDetails(username, profileDetails) {
  if(profileDetails.balance != undefined) {
    console.log("Warning, can't update balance with a $set operator");
    return false;
  }

  const critera = { username };
  const data = { $set: profileDetails};

  return await fetchCollection("profileDetails").updateOne(critera, data, {upsert: true});
}

async function updateProfileBalance(username, balance) {
  const critera = { username };
  const data = { $inc: balance };

  return await fetchCollection("profileDetails").updateOne(critera, data, {upsert: true});
}

export default { getProfileDetails, updateProfileBalance, updateProfileDetails };