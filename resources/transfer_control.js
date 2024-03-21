/*
Paystack API - Transfer Control
*/

var root = "/transfer";

module.exports = {
  /*
  Check Balance
  */
  balance: {
    method: "get",
    endpoint: "/balance"
  },

  /*
  Resend OTP
  */
  resendOTP: {
    method: "post",
    endpoint: `${root}/resend_otp`,
    params: ["transfer_code*", "reason*"]
  },

  /*
  Disable OTP
  */
  disableOTP: {
    method: "post",
    endpoint: `${root}/disable_otp`
  },

  /*
  Finalize Disabling of OTP
  */
  finalizeDisableOTP: {
    method: "post",
    endpoint: `${root}/disable_otp_finalize`,
    params: ["otp*"]
  },

  /*
  Enable OTP
  */
  enableOTP: {
    method: "post",
    endpoint: `${root}/enable_otp`
  }
};