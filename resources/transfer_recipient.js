/*
Paystack API - Transfer Recipient
*/

var root = "/transferrecipient";

module.exports = {
  /*
  Create Transfer Recipient
  */
  create: {
    method: "post",
    endpoint: root,
    params: ["type*", "name*", "account_number*", "bank_code*"] // ...
  },

  /*
  List Transfer Recipients
  */
  list: {
    method: "get",
    endpoint: root,
    args: ["perPage", "page"]
  },

  /**
   * Update Transfer Recipient
   */

   update: {
     method: 'put',
     endpoint: [root, "/{recipient_code}"].join(""),
     params: ["name*", "email*"]
   },

   /**
    * Delete Transfer Recipient
    */

    remove: {
      method: 'delete',
      endpoint: [root, "/{recipient_code}"].join(""),
    }

};