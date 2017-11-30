$(
  function() {
    var box = $("#box");

    $("#boxSizing").change(function() {
      box.css("box-sizing", $(this).val());
    });

    $("#margin").change(function() {
      box.css("margin", parseInt($(this).val()));
    });

    $("#padding").change(function() {
      box.css("padding", parseInt($(this).val()));
    });

    $("#borderWidth").change(function() {
      box.css("border-width", parseInt($(this).val()));
    });

    $("#borderStyle").change(function() {
      box.css("border-style", $(this).val());
    });

    $("#borderColor").change(function() {
      box.css("border-color", $(this).val());
    });

    $("#borderRadius").change(function() {
      box.css("border-radius", parseInt($(this).val()));
    });

    $("#backgroundColor").change(function() {
      box.css("background-color", $(this).val());
    });

    $("#backgroundImage").change(function() {
      box.css("background-image", "url(" + $(this).val() + ")");
    });

    $("#backgroundSizeWidth").change(function() {
      box.css("background-size", $(this).val()
        + "px " + $("#backgroundSizeHeight").val() + "px");
    });

    $("#backgroundSizeHeight").change(function() {
      box.css("background-size", $("#backgroundSizeWidth").val()
        + "px " + $(this).val() + "px");
    });

    $("#backgroundPositionX").change(function() {
      box.css("background-position", $(this).val()
        + "px " + $("#backgroundPositionY").val() + "px");
    });

    $("#backgroundPositionY").change(function() {
      box.css("background-position", $("#backgroundPositionX").val()
        + "px " + $(this).val() + "px");
    });

    $("#backgroundOrigin").change(function() {
      box.css("background-origin", $(this).val());
    });

    $("#backgroundRepeat").change(function() {
      box.css("background-repeat", $(this).val());
    });

    $("#backgroundAttachment").change(function() {
      box.css("background-attachment", $(this).val());
    });
  }
);
