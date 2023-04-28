import userService from "../service/userService.js";

async function updateDebitCard(request, response) {
  const username = response.locals.username;
  const debitCard = request.body.debitCard;
  const result = await userService.updateProfileDetails(username, { debitCard });

  response.send("Successfully updated debit card");
}

async function updateAdress(request, response) {
  const username = response.locals.username;
  const address = request.body.address;
  const result = await userService.updateProfileDetails(username, { address });

  response.send("Successfully updated address");
}

async function updateBalance(request, response) {
  const username = response.locals.username;
  const balance = request.body.balance;
  const result = await userService.updateProfileBalance(username, { balance });

  response.send("Successfully updated balance");
}

async function getDebitCard(request, response) {
  const username = response.locals.username;
  const result = await userService.getProfileDetails(username);

  response.send({debitCard: result.debitCard});
}

async function getAddress(request, response) {
  const username = response.locals.username;
  const result = await userService.getProfileDetails(username);

  response.send({address: result.address});
}

async function getBalance(request, response) {
  const username = response.locals.username;
  const result = await userService.getProfileDetails(username);

  response.send({balance: result.balance});
}

export default {
  updateDebitCard, updateAdress, updateBalance, 
  getDebitCard, getAddress, getBalance
}