$(document).ready(function() {
  $("button").on("click", function() {
    var settings = {
      url: "https://api.impaya.ru/session",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        key: "wb3.guru_3ds_qiwicontact",
        terminal_password: "4uePoHGELqp8Gzck#IMv",
        merchant_order_id: "TestOrder123",
        amount: 300,
        type: "pay",
        payment_type: "OneStep",
        lifetime: 10000,
        credential: {
          login: "",
          password: "",
          merchant_name: "IPKuchmistiy",
          merchant_password: "4uePoHGELqp8Gzck#IMv",
          terminal_password: "4uePoHGELqp8Gzck#IMv",
        },
        custom_params_raw:
          "successUrl=https://impaya.ru;failUrl=https://impaya.ru;Email=user@example.com;PayButtonCustomText=Оформить товар",
        card_uid: "",
        action: "",
        recurrent: true,
      }),
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
    });
  });
});
