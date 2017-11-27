$(
  function() {
    var panel = $("#panel");

    $("#block").click(function() {
      panel.css("display", "block");
      panel.css("visibility", "visible");
    });

    $("#inline").click(function() {
      panel.css("display", "inline");
      panel.css("visibility", "visible");
    });

    $("#inlineblock").click(function() {
      panel.css("display", "inline-block");
      panel.css("visibility", "visible");
    });

    $("#none").click(function() {
      panel.css("display", "none");
      panel.css("visibility", "visible");
    });

    $("#visibility").click(function() {
      panel.css("display", "block");
      panel.css("visibility", "hidden");
    });
  }
);
