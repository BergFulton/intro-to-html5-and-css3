$(document).ready(function() {
  $(".border-radius").on("change", "input", function() {
    var parent     = $(this).parents(".border-radius"),
        example    = parent.find(".example"),
        inputs     = parent.find("input"),
        index      = inputs.index($(this)),
        new_value  = $(this).val(),
        setting    = "";

    parent.find("pre .border-radius-value").children().eq(index).text(new_value);
    parent.find("p .border-radius-value").eq(index).text(new_value);

    inputs.each(function() {
      setting += $(this).val() + "px ";
    });

    example.css("border-radius", setting);
  });
});