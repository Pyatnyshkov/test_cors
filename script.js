$(document).ready(function() {
  $("button").on("click", function() {
    const impaya_url = "https://api-stage.impaya.ru/session";
    const key = "wb3.guru_3ds_qiwicontact";
    const terminal_password = "4uePoHGELqp8Gzck#IMv";
    const merchant_name = "IPKuchmistiy";
    const merchant_password = "4uePoHGELqp8Gzck#IMv";
    const params = {
      successUrl: "https://wb3.guru/kurs/",
      failUrl: "https://wb3.guru/error",
      Email: 'qwe@qwe.ru',
    };
    const register = {
      key,
      terminal_password,
      merchant_order_id: new Date().getTime(),
      amount: 33 * 100,
      type: "pay",
      payment_type: "OneStep",
      lifetime: 10000,
      credential: {
        login: "",
        password: "",
        merchant_name,
        merchant_password,
        terminal_password,
      },
      custom_params_raw: Object.keys(params)
        .map((param) => `${param}=${params[param]}`)
        .join(";"),
      card_uid: "",
      action: "",
      recurrent: true,
    };
    $.ajax({
      url: impaya_url,
      type: "POST",
      data: JSON.stringify(register),
      dataType: "json",
      contentType: "application/json",
      success: function(data) {
        if (data.Success) {
          window.location = impaya_url + "session-id=" + data.SessionGUID;
        }
      },
      error: function() {
        window.location = params.failUrl;
      },
    });
  });
});
