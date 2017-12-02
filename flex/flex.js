$(
  function() {
    var box = $("#flexbox");

    $("#wrap").change(function() {
      box.css("flex-wrap", $(this).val());
    });

    $("#direction").change(function() {
      box.css("flex-direction", $(this).val());
    });

    $("#justify").change(function() {
      box.css("justify-content", $(this).val());
    });

    $("#align").change(function() {
      box.css("align-items", $(this).val());
    });

    $("#alignContent").change(function() {
      box.css("align-content", $(this).val());
    });
  }
);
