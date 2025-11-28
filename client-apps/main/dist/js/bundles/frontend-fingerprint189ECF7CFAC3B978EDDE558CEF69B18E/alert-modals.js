function ShowConfirmationModal(
  message,
  callback,
  typedConfirmMessage,
  showTypedMessage,
  additionalModalId,
  confirmText,
  dismissText,
  dismissCallback,
  style
) {
  style = style || "warning";

  var iconClass1 = style == "info" ? "icon guidance" : "icon";
  var iconClass2 =
    style == "info" ? "fa-solid fa-info" : "novicon novicon-exclamation";

  var modalID = "confirm-modal" + additionalModalId;
  var deleteModal = parent.$("#" + modalID);
  if (deleteModal.length === 0) {
    parent
      .$("body")
      .append(
        '<div class="modal fade no-header alert-modal" id="' +
          modalID +
          '" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog" style="' +
          style +
          '"><div class="modal-content"><div class="modal-body"></div></div></div></div>'
      );
    deleteModal = parent.$("#" + modalID);
  }
  if (parent.$(".modal:visible").length > 0) {
    deleteModal.css(
      "z-index",
      parseInt(parent.$(".modal:visible").css("z-index")) + 2
    );
  }
  var modalBody = deleteModal.find(".modal-body");

  if (!confirmText || confirmText.length == 0) confirmText = "Yes";

  if (!dismissText || dismissText.length == 0) dismissText = "No";

  if (typedConfirmMessage) {
    var htmlText = [
      '<div class="message-container">',
      `   <span class="${iconClass1}"><span class="${iconClass2}" role="img" aria-label="warning"></span></span>`,
      '   <div class="message" style="padding-bottom: 5px;">',
      "       <p>",
      message,
      "       </p>" + "       <p>",
      "           <em>",
      showTypedMessage === true ? typedConfirmMessage : "",
      "</em>",
      "       </p>",
      "   </div>",
      '   <div class="form-group">',
      '       <textarea class="form-control" id="confirm-text"></textarea>',
      "   </div>",
      "</div>",
    ].join("");
    var buttonText = [
      '<div class="buttons clearfix">',
      '   <a href="javascript:void(0);" class="btn btn-default" data-dismiss="modal" id="do-dismissed-action">' +
        dismissText +
        "</a>",
      '   <a href="javascript:void(0);" class="btn btn-primary" id="do-confirmed-action">' +
        confirmText +
        "</a>",
      "</div>",
    ].join("");
    modalBody.html(htmlText);
    modalBody.append(buttonText);
  } else {
    modalBody.html(
      `<div class="message-container"><span class="${iconClass1}"><span class="${iconClass2}"></span></span><div class="message one-line">${message}</div></div>`
    );
    modalBody.append(
      '<div class="buttons clearfix"><a href="javascript:void(0);" class="btn btn-default" data-dismiss="modal" id="do-dismissed-action">' +
        dismissText +
        '</a><a href="javascript:void(0);" class="btn btn-primary" data-dismiss="modal" id="do-confirmed-action">' +
        confirmText +
        "</a></div>"
    );
  }

  deleteModal.modal({
    backdrop: "static",
    keyboard: false,
  });

  if (typedConfirmMessage) {
    $(modalBody).find("#do-confirmed-action").attr("disabled", true);

    $(modalBody)
      .find("#confirm-text")
      .on("keyup", function (evt) {
        var typedText = $(evt.target)[0].value;

        if (
          typedText.trim().toLowerCase() === typedConfirmMessage.toLowerCase()
        ) {
          $(modalBody).find("#do-confirmed-action").attr("disabled", false);
        } else {
          $(modalBody).find("#do-confirmed-action").attr("disabled", true);
        }
      });
  }

  // YES click event
  $(modalBody)
    .find("#do-confirmed-action")
    .click(function (evt) {
      var typedText;

      // If we require a typed confirmation message then we need to validate that the user has correctly typed it
      if (typedConfirmMessage) {
        // Get the text that the user typed
        typedText = $(modalBody).find("#confirm-text")[0].value;

        // See if it matches the required confirmation message
        if (
          typedText.trim().toLowerCase() ===
            typedConfirmMessage.toLowerCase() &&
          callback
        ) {
          deleteModal.modal("hide");
          callback();
        }
      } else if (callback) {
        deleteModal.modal("hide");
        callback();
      }
    });

  // NO click event
  $(modalBody)
    .find("#do-dismissed-action")
    .click(function (evt) {
      if (dismissCallback) {
        deleteModal.modal("hide");
        dismissCallback();
      }
    });

  deleteModal.modal();

  if (parent.$(".modal:visible").length > 0) {
    deleteModal.css(
      "z-index",
      parseInt(parent.$(".modal:visible").css("z-index")) + 2
    );
    parent
      .$(".modal-backdrop:last")
      .css("z-index", parseInt(parent.$(".modal:visible").css("z-index")) + 1);
  }

  return false;
}

function ShowCustomAlertWithReturnTargetFocus(message, target) {
  ShowCustomAlert(message, function () {
    $($(target)).focus();
  });
}

function ShowCustomAlert(
  message,
  callback,
  customButtonHtml,
  icon,
  iconContainerClass
) {
  if (parent.jQuery) {
    var modalID = "custom-alert";
    var alertModal = parent.$("#" + modalID);
    if (alertModal.length == 0) {
      parent
        .$("body")
        .append(
          '<div class="modal fade no-header alert-modal" id="' +
            modalID +
            '" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div></div></div></div>'
        );
      alertModal = parent.$("#" + modalID);
    }
    var inAnotherModal = parent.$(".modal:visible").length > 0;
    var otherModalZIndex = 0;
    if (inAnotherModal) {
      otherModalZIndex = parseInt(parent.$(".modal:visible").css("z-index"));
      alertModal.css("z-index", otherModalZIndex + 2);
    }

    icon = icon || "novicon novicon-exclamation";

    if (
      typeof iconContainerClass == "undefined" ||
      iconContainerClass == null
    ) {
      iconContainerClass = "";
    }

    var modalBody = alertModal.find(".modal-body");
    modalBody.html(
      '<div class="message-container"><span class="icon ' +
        iconContainerClass +
        '"><span class="' +
        icon +
        '" role="img" aria-label="warning"></span></span><div class="message">' +
        message +
        "</div></div>"
    );
    modalBody.append(
      '<div class="buttons clearfix"><a href="javascript:void(0);" class="btn btn-default" data-dismiss="modal">OK</a></div>'
    );

    if (customButtonHtml) {
      modalBody.find(".buttons").prepend(customButtonHtml);
    }

    alertModal.on("hidden.bs.modal", function (e) {
      if (typeof callback === "function") callback();
    });
    alertModal.modal({
      backdrop: "static",
      keyboard: false,
    });
    if (inAnotherModal) {
      parent.$(".modal-backdrop:last").css("z-index", otherModalZIndex + 1);
    }
    return false;
  }
}

function ShowRenameModal(fileName, callback) {
  var iconClass1 = "icon";
  var iconClass2 = "novicon novicon-exclamation";

  var modalID = "confirm-modal";
  var deleteModal = parent.$("#" + modalID);
  if (deleteModal.length === 0) {
    parent
      .$("body")
      .append(
        '<div class="modal fade no-header alert-modal" id="' +
          modalID +
          '" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"></div></div></div></div>'
      );
    deleteModal = parent.$("#" + modalID);
  }
  if (parent.$(".modal:visible").length > 0) {
    deleteModal.css(
      "z-index",
      parseInt(parent.$(".modal:visible").css("z-index")) + 2
    );
  }
  var modalBody = deleteModal.find(".modal-body");

  var confirmText = "Rename";
  var dismissText = "Cancel";
  var message = `Rename ${fileName}`;

  var fileType = fileName.split(".").pop();

  var htmlText = [
    '<div class="message-container">',
    `   <span class="${iconClass1}"><span class="${iconClass2}" role="img" aria-label="warning"></span></span>`,
    '   <div class="message" style="padding-bottom: 5px;">',
    '       <p style="margin-top: 8px;">',
    message,
    "       </p>" + "       <p>",
    "           <em>",
    "",
    "</em>",
    "       </p>",
    "   </div>",
    "   <div>",
    `       <span style="display: inline-flex; align-items: center; margin-top: 15px;">
                    <input type="text" class="form-control" id="confirm-text" style="display: inline-block; width: 275px;" maxlength="250" />
                    .${fileType}
                </span>`,
    '       <span style="margin-top: 10px;" class="text-danger error-message"></span>',
    "   </div>",
    "</div>",
  ].join("");
  var buttonText = [
    '<div class="buttons clearfix">',
    '   <a href="javascript:void(0);" class="btn btn-default" data-dismiss="modal" id="do-dismissed-action">' +
      dismissText +
      "</a>",
    '   <a href="javascript:void(0);" class="btn btn-primary" id="do-confirmed-action">' +
      confirmText +
      "</a>",
    "</div>",
  ].join("");
  modalBody.html(htmlText);
  modalBody.append(buttonText);

  deleteModal.modal({
    backdrop: "static",
    keyboard: false,
  });

  $(modalBody)
    .find("#do-confirmed-action")
    .click(function (evt) {
      $(".error-message").text("");
      var typedText;
      typedText = $(modalBody).find("#confirm-text")[0].value;
      if (typedText.length) {
        let specialCharacters = /[<>:"/\\|?*\0]|^\s|\s$|\.$/;
        if (specialCharacters.test(typedText)) {
          $(".error-message").html(
            "<br /> <br />File name contains invalid characters."
          );
        } else {
          deleteModal.modal("hide");
          callback(typedText);
        }
      } else {
        $(".error-message").html(
          "<br /> <br />You must enter a new file name."
        );
      }
    });

  deleteModal.modal();

  if (parent.$(".modal:visible").length > 0) {
    deleteModal.css(
      "z-index",
      parseInt(parent.$(".modal:visible").css("z-index")) + 2
    );
    parent
      .$(".modal-backdrop:last")
      .css("z-index", parseInt(parent.$(".modal:visible").css("z-index")) + 1);
  }

  return false;
}
