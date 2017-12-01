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

    $("#outlineWidth").change(function() {
      box.css("outline-width", parseInt($(this).val()));
    });

    $("#outlineStyle").change(function() {
      box.css("outline-style", $(this).val());
    });

    $("#outlineColor").change(function() {
      box.css("outline-color", $(this).val());
    });

    $("#outlineOffset").change(function() {
      box.css("outline-offset", parseInt($(this).val()));
    });

    $("#backgroundColor").change(function() {
      box.css("background-color", $("#backgroundColor").val());
    });

    $("#applyBackgroundColor").click(function() {
      box.css("background", "");
      box.css("background-color", $("#backgroundColor").val());
    });

    $("#backgroundImage").click(function() {
      box.css("background", "");
      box.css("background-image", "url(" + $("#backgroundImage").val() + ")");
    });

    $("#applyBackgroundImage").click(function() {
      box.css("background-image", "url(" + $("#backgroundImage").val() + ")");
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

    $("#applyBackgroundLinearGradient").click(function() {
      box.css("background", "linear-gradient("
        + $("#linearGradientAngle").val() + "deg,"
        + $("#linearGradientStartColor").val() + ","
        + $("#linearGradientEndColor").val() + ")");
    });

    $("#applyBackgroundRadialGradient").click(function() {
      box.css("background", "radial-gradient("
        + $("#radialGradientShape").val() + ","
        + $("#radialGradientStartColor").val() + ","
        + $("#radialGradientEndColor").val() + ")");
    });

    $("#resize").change(function() {
      box.css("resize", $(this).val());
    });

    $("#overflowX").change(function() {
      box.css("overflow-x", $(this).val());
    });

    $("#overflowY").change(function() {
      box.css("overflow-y", $(this).val());
    });
  }
);
