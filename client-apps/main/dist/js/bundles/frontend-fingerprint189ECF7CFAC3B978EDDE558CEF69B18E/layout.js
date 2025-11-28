function ShowSavedPopup(entityName, messageEnding) {
  var savePopup = parent.$("#save-slideout");
  if (savePopup.length == 0) {
    parent
      .$("body")
      .append(
        '<div id="save-slideout" class="alert alert-success"><span class="icon"><span class="novicon novicon-check"></span></span><strong></strong></div>'
      );
    savePopup = parent.$("#save-slideout");
  }

  if (messageEnding == null) messageEnding = " saved";
  savePopup.find("strong").html(entityName + messageEnding);

  if (breakpoint().indexOf("mobile") == -1) {
    var popupHeight = savePopup.outerHeight();
    savePopup.stop().css("top", "-" + popupHeight + "px");

    var popupTop = popupHeight + ($("#admin-bar").outerHeight() || 0);
    savePopup.stop().animate({ top: "+=" + popupTop }, 1000);
    setTimeout(function () {
      savePopup.stop().animate({ top: "-=" + popupTop }, 2000);
    }, 5000);
  } else {
    savePopup.stop().fadeIn(500, function () {
      setTimeout(function () {
        savePopup.fadeOut(2000);
      }, 5000);
    });
  }
}
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$("form [maxlength]:not(.numbers-only,.masked,[readonly])").each(function () {
  if (!isNaN(parseInt($(this).prop("maxlength")))) {
    var parentContainer = $(this).parents(".count-container");
    if (parentContainer.length === 0)
      parentContainer = $(this).parents(".form-group");
    if (!parentContainer.hasClass("with-count")) {
      parentContainer.append(
        '<span class="character-count" style="display: none;" role="alert" aria-live="polite"><strong>' +
          0 +
          "</strong> characters remaining</span>"
      );
      parentContainer.addClass("with-count");
    }
  }
});

$("form [maxlength]:not(.numbers-only,.masked,[readonly])")
  .focus(function () {
    TextCounter($(this));
    $(this).parents(".with-count").find(".character-count").stop().fadeIn();
  })
  .blur(function () {
    $(this).parents(".with-count").find(".character-count").stop().fadeOut();
  })
  .bind("keydown keyup", function () {
    TextCounter($(this));
  })
  .bind("cut paste", function () {
    var textField = $(this);
    setTimeout(function () {
      TextCounter(textField);
    }, 100);
  });

function TextCounter(textField) {
  var maxLimit = parseInt(textField.prop("maxlength"));
  var parentContainer = textField.parents(".with-count");
  var charCountElement = parentContainer.find(".character-count");
  var spanCounter = charCountElement.children("strong");
  var numCharLeft = maxLimit - textField.val().length;
  charCountElement.css("right", parentContainer.css("padding-right"));
  spanCounter.html(numCharLeft);
}

$(document).ready(function () {
  if (ShouldShowOneTimeAlert()) {
    showAlert();
    $(".c-alert-one-time__btn").click(Acknowledge);
  }

  var noviSessionCookie = readCookie("NoviSession");
  if (!noviSessionCookie) {
    createCookie("NoviSession", generateUUID());
  }

  if (getUrlParameter("joinModal") == "show") {
    $("#join-modal").modal("show");
  }

  $(document).on("keydown", ".numbers-only", function (e) {
    var key = e.charCode || e.keyCode || 0;
    var ctrlDown = e.ctrlKey || e.metaKey;
    return (
      key == 8 ||
      key == 9 ||
      key == 13 ||
      key == 46 ||
      (key >= 37 && key <= 40) ||
      (key >= 48 && key <= 57) ||
      (key >= 96 && key <= 105) ||
      key == 109 ||
      key == 110 ||
      key == 189 ||
      key == 190 ||
      (ctrlDown && (key == 86 || key == 67))
    );
  });

  if ($.validator) {
    $.validator.addMethod(
      "integer",
      function (value, element) {
        return this.optional(element) || /^-?\d+$/.test(value);
      },
      "Please enter a whole number."
    );

    $.validator.unobtrusive.adapters.addBool("integer");

    $("form").unbind("invalid-form.validate"); // remove old handler!!!!
    $("form").bind("invalid-form.validate", function (form, validator) {
      var errors = validator.numberOfInvalids();
      if (errors) {
        if ($(validator.errorList[0].element).is(":visible"))
          validator.errorList[0].element.focus();
        else
          $(validator.errorList[0].element)
            .parents(".form-group")
            .find("input:visible,textarea:visible,select:visible")
            .focus();
      }
    });
  }

  let carousels = $("#top-featured-carousel, #callouts, #partners");
  carousels.each((i, el) => {
    $(el).on("init afterChange", () => {
      setTimeout(() => {
        $(el).find(".slick-track").attr("role", "list");
        $(el).find(".slick-slide").attr("role", "listitem");
      }, 100);
    });
  });

  if (isAuthenticated && allowMultipleAccounts) {
    PopulateLinkedCustomers(0, true, profileViewModel);
  }

  PopulateCartItemQuantity();

  if (attendeeStartTimes && attendeeStartTimes.length > 0) {
    setInterval(function () {
      var eventStartingSoon = attendeeStartTimes.filter(function (i, e) {
        return (
          new Date(i.StartingTime) > new Date() &&
          new Date(i.StartingTime) <
            new Date(Date.now() + i.JoinWindowMinutes * 60000)
        );
      });

      if (eventStartingSoon.length > 0) {
        // We can only show 1 so pick first
        ShowEventStartingPopup(eventStartingSoon[0]);

        $.ajax({
          url: attendeeEventStartingReadUrl,
          type: "POST",
          dataType: "json",
          data: {
            eventId: eventStartingSoon[0].EventID,
          },
          success: function (data) {
            if (data.Status == "OK") {
              attendeeStartTimes = JSON.parse(data.Result);
            }
          },
        });
      }
    }, 60 * 1000);
  }
});

$("form input[name*='Email'][type=text]").on(
  "keyup blur change paste input",
  function () {
    this.value = this.value.replace(/\s/g, "");
  }
);

function ShowEventStartingPopup(event) {
  var html = `<div class="modal fade" tabindex="-1" role="dialog" id="event-starting-modal">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h1>[EVENT NAME]</h1>
                                <hr>
                                <div class="event-starting-content">
                                    <h2>Your Virtual Event is Starting at [TIME OF DAY] ([TIMEZONE])</h2>
                                    <a href="[JOIN LINK]" class="btn btn-default join-link">JOIN EVENT</a>
                                    <a href="[VIEW EVENT]" class="view-event-link">View Event Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

  const timeOfDay = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(event.StartingTime));
  html = html.replace("[EVENT NAME]", event.EventName);
  html = html.replace("[TIME OF DAY]", timeOfDay);
  html = html.replace("[TIMEZONE]", event.TimeZone);
  html = html.replace("[JOIN LINK]", event.JoinUrl);
  html = html.replace("[VIEW EVENT]", event.EventDetailsUrl);
  $("body").append(html);

  $("#event-starting-modal").modal("show");
}

function ValidateSelect(event) {
  var select = $(event.target);
  if (select) {
    var selectId = select.attr("id");
    var validator = select.closest("form").validate();
    if (validator) {
      validator.element("#" + selectId); // Runs validation against a single element, our select
    }
  }
}

function ShouldShowOneTimeAlert() {
  if (typeof hashedAlertText === "undefined") return;

  var cookieVal = readCookie("OneTimeAlert");
  return cookieVal === null || cookieVal !== hashedAlertText;
}

function Acknowledge() {
  if (isAuthenticated) {
    createCookie("OneTimeAlert", hashedAlertText, 31536000);
  } else {
    createCookie("OneTimeAlert", hashedAlertText);
  }
  hideAlert();
}

function showAlert() {
  $(".c-alert-one-time").removeClass("hidden");
}

function hideAlert() {
  $(".c-alert-one-time").addClass("hidden");
}

var TogglePanelToggled = function (element, shown) {
  //callback function to be overwritten on individual pages
};

$(document).on("click", ".toggle", function (e) {
  var element = $(e.target);
  if (!element.is("[href]")) element = element.closest("[href]"); //catch bubbles
  var elementToShow = $(element.attr("href"));
  elementToShow.toggleClass("hide");
  element.toggleClass("active");
  if (element.data("overlay")) {
    if (element.hasClass("active")) {
      $('<div class="body-overlay"></div>').appendTo("body");
      TogglePanelToggled(element, true);
    } else {
      $("body .body-overlay").remove();
      TogglePanelToggled(element, false);
    }
  }

  $("body").click(function (e) {
    var eTarget = $(e.target);
    if (!eTarget.is("[href]")) eTarget = eTarget.closest("[href]");
    if (
      eTarget.is(element) ||
      eTarget.parents("[data-dont-dismiss]").length > 0
    )
      return;
    elementToShow.addClass("hide");
    element.removeClass("active");
    $("body .body-overlay").remove();
    TogglePanelToggled(element, false);
  });

  elementToShow.find("a").click(function () {
    if ($(this).parents("[data-dont-dismiss]").length == 0) {
      elementToShow.addClass("hide");
      element.removeClass("active");
      $("body .body-overlay").remove();
      TogglePanelToggled(element, false);
    }
  });

  elementToShow.click(function (e) {
    if (!$(e.target).is("a") && !$(e.target).parent().is("a"))
      e.stopPropagation();
  });
  e.preventDefault();
});

function PopulateLinkedCustomers(id, currentUser, modelToUse) {
  $.ajax({
    url: getLinkedCustomerAccountsUrl,
    type: "GET",
    dataType: "json",
    data: {
      customerID: id,
      currentUser: currentUser,
    },
    success: function (data) {
      if (data.Status == "OK") {
        data.LinkedRecords.forEach((item) =>
          modelToUse.LinkedCustomers.push(new linkedRecordModel(item))
        );
      } else {
        ShowCustomAlert(data.Error);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("There was an issue while fetching linked accounts");
    },
  });
}

function UpdateCartItemQuantity(data) {
  if (!isAuthenticated) {
    sessionStorage.setItem("cartItemQuantity", data);
  }
  profileViewModel.CartItemQuantity(data);
}

function PopulateCartItemQuantity() {
  if (isAuthenticated) {
    profileViewModel.CartItemQuantity(cartItemQuantity);
    sessionStorage.removeItem("cartItemQuantity");
  } else {
    var cartQuantity =
      parseInt(sessionStorage.getItem("cartItemQuantity"), 10) || 0;
    profileViewModel.CartItemQuantity(cartQuantity);
  }
}

var profileViewModel = {
  LinkedCustomers: ko.observableArray([]),
  CartItemQuantity: ko.observable(0),
};

profileViewModel.CartItemQuantityLabel = ko.computed(function () {
  return profileViewModel.CartItemQuantity() > 1 ? "Items" : "Item";
});

var linkedRecordModel = function (item) {
  $.extend(this, item);
  this.Default = ko.observable(item.Default);

  this.SwitchCustomerRecord = function () {
    var self = this;

    if (self.Default()) {
      return false;
    }

    $.ajax({
      url: switchCustomerRecordUrl,
      type: "POST",
      dataType: "json",
      data: {
        customerID: self.ID,
      },
      success: function (data) {
        if (data.Status == "OK") {
          window.location.reload();
        } else {
          ShowCustomAlert(data.Error);
        }
      },
    });
  };
};

function redirectToMemberCompass() {
  window.location.href = "/member-compass";
}

function applyBindingsSafely(viewModel, elementId) {
  var element = document.getElementById(elementId);
  if (element && !ko.dataFor(element)) {
    ko.applyBindings(viewModel, element);
  }
}

// Borrowed from https://stackoverflow.com/a/2117523/215141
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function listToSentence(items, conjunction = "and", useSerialComma = true) {
  if (!items || items.length === 0) {
    return "";
  }

  const count = items.length;
  if (count === 1) {
    return items[0];
  }

  const allButLast = items.slice(0, count - 1).join(", ");
  const last = items[count - 1];

  return useSerialComma && count > 2
    ? `${allButLast}, ${conjunction} ${last}`
    : `${allButLast} ${conjunction} ${last}`;
}

applyBindingsSafely(profileViewModel, "profile-actions");
applyBindingsSafely(profileViewModel, "profile-actions-mobile");
applyBindingsSafely(profileViewModel, "nav-shopping-cart");
applyBindingsSafely(profileViewModel, "cart-items-link");
applyBindingsSafely(profileViewModel, "cart-items-link-mobile");
