document.addEventListener("DOMContentLoaded", function () {
  $(".c-event-date-stub__event-wrapper a").each(function () {
    var e = $(this);
    if ("none" !== e.css("display") && 0 != e.height() && 0 != e.width()) {
      var a = e.data("aria-label");
      e.attr("aria-label", a);
    } else e.removeAttr("aria-label");
  });
});
//# sourceMappingURL=accessibility-home-page.js.map
