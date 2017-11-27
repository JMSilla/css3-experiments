$(
  function() {
    var element = $("#element");

    element.css("top", 0);
    element.css("left", 0);

    $("#static").click(function() {
      element.css("position", "static");
      element.text("Position: static (default)");
    });

    $("#relative").click(function() {
      element.css("position", "relative");
      element.text("Position: relative (to normal position)");
    });

    $("#absolute").click(function() {
      element.css("position", "absolute");
      element.text("Position: absolute (to first non-static ancestor)");
    });

    $("#fixed").click(function() {
      element.css("position", "fixed");
      element.text("Position: fixed (to viewport)");
    });

    $("#top").change(function() {
      element.css("top", parseInt($(this).val()));
    });

    $("#left").change(function() {
      element.css("left", parseInt($(this).val()));
    });
  }
);
