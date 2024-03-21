/*
Paystack API - Transfers
*/

var root = "/transfer";

module.exports = {
  /*
  Initiate Transfer
  */
  create: {
    method: "post",
    endpoint: root,
    params: ["source*", "amount*", "recipient*"] // ...
  },

  /*
  List Transfers
  */
  list: {
    method: "get",
    endpoint: root,
    args: ["perPage", "page"]
  },

  /*
  Get Transfer
  */
  get: {
    method: "get",
    endpoint: `${root}/{id}`
  },

  /*
  Finalize Transfer
  */
 finalize: {
    method: "post",
    endpoint: root,
    params: ["transfer_code*", "otp*"] // ...
  },

  /*
  Bulk Transfer
  */
 bulkTransfer: {
    method: "post",
    endpoint: `${root}/bulk`
  },

  /*
  Verify Transfer
  */
 verify: {
    method: "get",
    endpoint: `${root}/verify/{reference}`
  }
};