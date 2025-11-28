var inModal = new URLSearchParams(window.location.search).has("modal");
$(document).ready(function () {
  $("a").filter(function () {
    return (
      this.hostname &&
      this.hostname.replace(/^www\./, "") !==
        location.hostname.replace(/^www\./, "")
    );
  });

  $("footer .scroll-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  if (parent.jQuery) {
    if (
      parent.$("#iframe-modal").length == 0 &&
      $("html").height() < $(window).height()
    ) {
      $(".body-content").css(
        "min-height",
        $(window).height() -
          $(".body-content").offset().top -
          $("footer").height()
      );
    }

    if (parent.$("#iframe-modal").length > 0) {
      $("body").addClass("in-modal");
    }
  }

  SetDynamicElements();
  $(window).on("orientationchange resize", function () {
    SetDynamicElements();
  });

  $(".search-toggle").on("click keydown", function (event) {
    // Check for click event or Enter key down
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.which === 13)
    ) {
      var self = $(this);
      var elementToShow = $(self.attr("href"));
      elementToShow.toggle();
      self.toggleClass("active");
      if (self.hasClass("active")) {
        elementToShow.find(".search-text").focus();
      }

      // Set aria-expanded to true if active, false otherwise
      self.attr("aria-expanded", self.hasClass("active"));

      // Focus on the search text input if panel is shown
      if (self.hasClass("active")) {
        elementToShow.find(".search-text").focus();
      }

      // Find the nearest parent <li> and toggle its aria-hidden attribute
      var parentLi = elementToShow.closest("li");
      if (self.hasClass("active")) {
        parentLi.attr("aria-hidden", "false"); // When the panel is shown
      } else {
        parentLi.attr("aria-hidden", "true"); // When the panel is hidden
      }

      event.stopPropagation();
      event.preventDefault();

      // Setup to hide the element on body click and stop propagation on element click
      $("body")
        .off("click")
        .on("click", function () {
          elementToShow.hide();
          self.removeClass("active");
        });

      elementToShow.off("click").on("click", function (e) {
        e.stopPropagation();
      });

      return false;
    }
  });

  $(".search-text").keydown(function (e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) $(this).parents(".form-group").find(".search-go").click();
  });

  $(".search-go").click(function () {
    var searchText = $(this).parents(".form-group").find(".search-text").val();
    window.location.href =
      $(this).attr("href") +
      (searchText.length > 0 ? "?q=" + encodeURIComponent(searchText) : "");
    return false;
  });

  $("#join-modal").on("shown.bs.modal", function (e) {
    // We need to store the relatedTarget (the triggering element) on the modal so that we can refocus that element if/when the modal is hidden
    e.currentTarget.relatedTarget = e.relatedTarget;

    setJoinModalStyles();
  });

  $("#join-modal").on("hidden.bs.modal", function (e) {
    // Refocus the related element (the triggering element) when the modal is hidden
    if (e.currentTarget.relatedTarget) {
      setTimeout(function () {
        $($(e.currentTarget.relatedTarget)).focus();
      });
    }
  });
  window.addEventListener("resize", function (e) {
    setJoinModalStyles();
  });

  centerPagination();

  $(document).on("click", ".modal-iframe", function (e) {
    var element = $(e.target);
    if (!element.is("[href]")) element = element.closest("[href]"); //catch bubbles

    if (element.prop("href").startsWith("mailto:")) return true;

    e.preventDefault();
    ShowIframeModal(element);
  });
});

/**
 * Creates and returns a new debounced version of the passed function which
 * will postpone its execution until after delay milliseconds have elapsed
 * since the last time it was invoked.
 *
 * @param {Function} func - The function to debounce.
 * @param {Number} delay - The number of milliseconds to delay the function call.
 * @param {Boolean} [immediate=false] - Whether to execute the function immediately and then debounce.
 * @returns {Function} - Returns a new debounced function.
 */
function debounce(func, delay, immediate = false) {
  let timer;
  return function (...args) {
    const context = this;
    const later = () => {
      timer = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timer;
    clearTimeout(timer);
    timer = setTimeout(later, delay);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

function setJoinModalStyles() {
  if ($("#join-modal .btn:visible").length == 0) return;

  $("#join-modal .btn:visible").css("margin-top", "auto");

  if (breakpoint().indexOf("phone") >= 0) {
    $("#join-modal .row").css("display", "flex");
    $("#join-modal .row").css("flex-direction", "column");
  } else {
    $("#join-modal .row").css("display", "flex");
    $("#join-modal .row").css("flex-direction", "row");
  }
}

function centerPagination() {
  var paginationWidth = 0;

  $(".pagination .page-numbers li").each(function () {
    paginationWidth += $(this).outerWidth(true);
  });

  $(".pagination .page-numbers").width(paginationWidth + 1); //1 added for rounding that outerwidth does
}

let debounceCenterPagination = debounce(centerPagination, 300);

function SetDynamicElements(parentElement) {
  if (!parentElement) parentElement = $("body");
  parentElement.find(".max-window-height").each(function () {
    var topOffset = $(this).offset().top;
    var parentElement = $(this).parent();
    while (
      topOffset == 0 &&
      parentElement.length > 0 &&
      parentElement.offset()
    ) {
      topOffset = parentElement.offset().top;
      parentElement = parentElement.parent();
    }
    var heightToSet =
      $(window).height() -
      topOffset -
      ($(this).outerHeight() - $(this).height());
    if (!$(this).hasClass("limit-to-window") && $(this).height() > heightToSet)
      heightToSet = $(this).height();
    $(this).height(heightToSet);
  });

  parentElement.find(".children-same-height").each(function () {
    var children = $(this).children();
    if (children.length <= 1) return;
    var maxHeight = 0;
    var useOuterHeight = $(this).data("outer-height");
    children.each(function () {
      if ($(this).attr("style"))
        $(this).attr(
          "style",
          $(this)
            .attr("style")
            .replace("height: " + $(this).outerHeight() + "px;", "")
        );
      if (
        (useOuterHeight && $(this).outerHeight(true) > maxHeight) ||
        (!useOuterHeight && $(this).height() > maxHeight)
      )
        maxHeight = useOuterHeight
          ? $(this).outerHeight(true)
          : $(this).height();
    });
    children.height(maxHeight);
  });

  if (breakpoint().indexOf("mobile") >= 0) {
    var titleElement = $(".header-ribbon:visible");
    if (titleElement.length == 0) {
      titleElement = $(".body-content > .section > .background .title");
    }
    $("h1")
      .toggleClass("really-long", $("h1").text().length >= 45)
      .toggleClass("long", $("h1").text().length >= 30);
    $(".body-content > .section > .background").css(
      "min-height",
      titleElement.outerHeight()
    );
    if (
      titleElement.parents(".container.moved-up").length > 0 &&
      parent.jQuery &&
      parent.$("#iframe-modal .modal-body").length == 0
    ) {
      $(".container.moved-up").css("margin-top", -titleElement.outerHeight());
    }
  } else {
    $(".body-content > .section > .background").css("min-height", "");
    $(".container.moved-up").css("margin-top", "");
  }
}

function breakpoint() {
  var types = [];
  if ($(window).width() < 992) types.push("mobile");
  types.push(
    $(window).width() < 768
      ? "phone"
      : $(window).width() < 992
      ? "tablet"
      : $(window).width() < 1200
      ? "desktop"
      : "large"
  );
  return types;
}

function isIpad() {
  return navigator.userAgent.match(/iPad/i) != null;
}

if (window.location.hash == "#_=_")
  history.replaceState
    ? history.replaceState(null, null, window.location.href.split("#")[0])
    : (window.location.hash = "");

function ShowIframeModal(element, url) {
  var modalID = "iframe-modal";
  var iframeModal = parent.jQuery ? parent.$("#" + modalID) : "";
  if (iframeModal.length == 0 && parent.jQuery) {
    parent
      .$("body")
      .append(
        '<div class="modal fade sliced-corner" id="' +
          modalID +
          '" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><a href="javascript:void(0);" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></a><h4 class="modal-title" role="heading" aria-level="2"></h4></div><div class="modal-body"></div></div></div></div>'
      );
    iframeModal = parent.$("#" + modalID);
    iframeModal.on("hidden.bs.modal", function () {
      iframeModal.find("iframe").prop("src", "");
      iframeModal.find("iframe").html("");
    });
  }
  var defaultHeight = Math.min($(parent).height() * 0.8 - 30, 700);
  var defaultWidth = Math.min(
    Math.max($(parent).width() - 20, $(parent).width() * 0.8),
    1100
  );
  var height =
    element && element.data("modal-height")
      ? element.data("modal-height")
      : defaultHeight;
  var width =
    element && element.data("modal-width")
      ? element.data("modal-width")
      : defaultWidth;
  if (width > defaultWidth) width = defaultWidth;
  if (height > defaultHeight) height = defaultHeight;
  if (parent.jQuery && parent.$(".modal:visible").length > 0)
    iframeModal.css(
      "z-index",
      parseInt(parent.$(".modal:visible").css("z-index")) + 1
    );
  var modalBody = iframeModal.find(".modal-body");
  iframeModal.find(".modal-dialog").css("margin-top", "5%");
  var finalUrl = url ? url : element.prop("href");
  modalBody.html(
    '<iframe frameborder="0" src="' +
      finalUrl +
      (finalUrl.indexOf("?") >= 0 ? "&" : "?") +
      'modal=1" width="' +
      width +
      '" height="' +
      height +
      '"></iframe>'
  );
  modalBody.append(
    '<div class="loading" role="alert" aria-live="polite" aria-atomic="true"><div class="loading-indicator"><span class="novicon novicon-spinner novicon-spin"></span>Loading...</div></div>'
  );
  iframeModal
    .find(".modal-dialog,.modal-body,.modal-content")
    .width(width + modalBody.outerWidth() - modalBody.width())
    .height(height);
  iframeModal.modal();
  return false;
}
