(function () {
  var isModal =
    typeof isNpsSurveyPage === "undefined" || isNpsSurveyPage === null;

  npsSurveyViewModel = {
    IsModal: ko.observable(isModal),

    NpsSurveyId: ko.observable(isModal ? npsSurveyId : npsScoreIdForSurveyPage),
    NpsUniqueId: ko.observable(null),
    MainQuestion: ko.observable(""),
    PromoterFollowUpQuestion: ko.observable(""),
    PassiveFollowUpQuestion: ko.observable(""),
    DetractorFollowUpQuestion: ko.observable(""),
    UseSecondaryLogo: ko.observable(false),
    EmailUrl: ko.observable(isModal ? null : emailUrl),
    UserAgent: ko.observable(isModal ? null : userAgent),

    PromoterThankYouMessage: ko.observable(""),
    PassiveThankYouMessage: ko.observable(""),
    DetractorThankYouMessage: ko.observable(""),

    ActiveNpsScore: ko.observable(isModal ? null : npsScoreForSurveyPage),
    Feedback: ko.observable(null),

    ShowSurvey: ko.observable(true),
    ShowMainQuestion: ko.observable(true),
    ShowPromoterFollowUpQuestion: ko.observable(false),
    ShowPassiveFollowUpQuestion: ko.observable(false),
    ShowDetractorFollowUpQuestion: ko.observable(false),
    ShowFeedback: ko.observable(false),
    ShowThankYou: ko.observable(false),

    ShowError: ko.observable(false),
    ErrorMessage: ko.observable(""),

    IsLoadingNpsSurvey: ko.observable(false),

    GetNpsSurveyFormData: function () {
      npsSurveyViewModel.IsLoadingNpsSurvey(true);

      $.ajax({
        url: getNpsSurveyFormDataUrl,
        type: "GET",
        data: {
          npsScoreId: npsSurveyViewModel.NpsSurveyId(),
        },
        success: function (nps) {
          if (nps) {
            npsSurveyViewModel.NpsUniqueId(nps.UniqueID);
            npsSurveyViewModel.MainQuestion(nps.MainQuestion);
            npsSurveyViewModel.PromoterFollowUpQuestion(
              nps.PromoterFollowUpQuestion
            );
            npsSurveyViewModel.PassiveFollowUpQuestion(
              nps.PassiveFollowUpQuestion
            );
            npsSurveyViewModel.DetractorFollowUpQuestion(
              nps.DetractorFollowUpQuestion
            );
            npsSurveyViewModel.PromoterThankYouMessage(
              nps.PromoterPostSurveyMessage
            );
            npsSurveyViewModel.PassiveThankYouMessage(
              nps.PassivePostSurveyMessage
            );
            npsSurveyViewModel.DetractorThankYouMessage(
              nps.DetractorPostSurveyMessage
            );
            npsSurveyViewModel.UseSecondaryLogo(nps.UseSecondaryLogo);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          npsSurveyViewModel.ShowSurvey(false);
          npsSurveyViewModel.ShowThankYou(false);

          var errorMessage =
            "An unexpected error occurred while requesting NPS Survey: ";

          if (
            jqXHR.status == 404 ||
            jqXHR.responseText.includes("NPS Survey was not found.")
          ) {
            errorMessage += "\n" + "NPS Survey was not found.";
          } else {
            if (jqXHR.responseText) {
              errorMessage += "\n" + jqXHR.responseText;
            } else {
              errorMessage += "\nError details could not be parsed.";
            }
          }

          npsSurveyViewModel.ErrorMessage(errorMessage);
          npsSurveyViewModel.ShowError(true);
        },
      }).always(function () {
        npsSurveyViewModel.IsLoadingNpsSurvey(false);
      });
    },

    AnswerNpsSurvey: function (newNpsScore) {
      npsSurveyViewModel.ActiveNpsScore(newNpsScore);
      npsSurveyViewModel.ShowMainQuestion(false);
      npsSurveyViewModel.ShowFeedback(true);

      updateQuestionVisibilityBasedOnScore();

      if (npsSurveyViewModel.ActiveNpsScore() >= 9) {
        npsSurveyViewModel.ShowPromoterFollowUpQuestion(true);
        npsSurveyViewModel.ShowPassiveFollowUpQuestion(false);
        npsSurveyViewModel.ShowDetractorFollowUpQuestion(false);
      } else if (
        npsSurveyViewModel.ActiveNpsScore() >= 7 &&
        npsSurveyViewModel.ActiveNpsScore() < 9
      ) {
        npsSurveyViewModel.ShowPromoterFollowUpQuestion(false);
        npsSurveyViewModel.ShowPassiveFollowUpQuestion(true);
        npsSurveyViewModel.ShowDetractorFollowUpQuestion(false);
      } else {
        npsSurveyViewModel.ShowPromoterFollowUpQuestion(false);
        npsSurveyViewModel.ShowPassiveFollowUpQuestion(false);
        npsSurveyViewModel.ShowDetractorFollowUpQuestion(true);
      }
    },

    SubmitNpsSurvey: function () {
      npsSurveyViewModel.ShowSurvey(false);
      npsSurveyViewModel.ShowThankYou(true);

      if (
        npsSurveyViewModel.ActiveNpsScore() != null &&
        npsSurveyViewModel.NpsUniqueId() != null
      ) {
        $.ajax({
          url: answerNpsSurveyUrl,
          type: "POST",
          data: {
            uniqueID: npsSurveyViewModel.NpsUniqueId(),
            score: npsSurveyViewModel.ActiveNpsScore(),
            feedback: npsSurveyViewModel.Feedback(),
            emailUrl: npsSurveyViewModel.EmailUrl(),
            userAgent: npsSurveyViewModel.UserAgent(),
          },
        });
      }
    },

    SkipNpsSurvey: function () {
      // If a score has not been set, then truly set the survey to skipped.
      if (
        npsSurveyViewModel.ActiveNpsScore() == null &&
        npsSurveyViewModel.NpsUniqueId() != null
      ) {
        $.ajax({
          url: skipNpsSurveyUrl,
          type: "POST",
          data: {
            uniqueID: npsSurveyViewModel.NpsUniqueId(),
          },
          error: function (jqXHR, textStatus, errorThrown) {
            ShowCustomAlert(
              "You are impersonating a user.  For security reasons, you cannot perform this action."
            );
          },
        }).always(function () {
          $("#novi-pop-up").modal("hide");
        });
      } else {
        $("#novi-pop-up").modal("hide");
      }
    },

    SnoozeNpsSurvey: function () {
      $("#novi-pop-up").modal("hide");
      // If a score has not been set, then truly snooze the survey.
      if (
        npsSurveyViewModel.ActiveNpsScore() == null &&
        npsSurveyViewModel.NpsSurveyId() != null
      ) {
        $.ajax({
          url: snoozeNpsSurveyUrl,
          type: "POST",
          data: {
            id: npsSurveyViewModel.NpsSurveyId(),
          },
        });
      }
    },

    ThankYouCloseNpsSurvey: function () {
      $("#novi-pop-up").modal("hide");
    },
  };

  npsSurveyViewModel.ThankYouMessage = ko.computed(function () {
    const score = this.ActiveNpsScore();
    if (
      score <= 6 &&
      this.DetractorThankYouMessage() != null &&
      this.DetractorThankYouMessage() !== ""
    ) {
      return this.DetractorThankYouMessage();
    } else if (
      score <= 8 &&
      this.PassiveThankYouMessage() != null &&
      this.PassiveThankYouMessage() !== ""
    ) {
      return this.PassiveThankYouMessage();
    } else if (
      score <= 10 &&
      this.PromoterThankYouMessage() != null &&
      this.PromoterThankYouMessage() !== ""
    ) {
      return this.PromoterThankYouMessage();
    }
    return "Thank You!";
  }, npsSurveyViewModel);
})();

$(document).ready(function () {
  var elementToBind = document.getElementById("nps-survey");

  if (elementToBind) {
    ko.cleanNode(elementToBind);
    ko.applyBindings(npsSurveyViewModel, elementToBind);

    npsSurveyViewModel.GetNpsSurveyFormData();

    if (
      npsSurveyViewModel.ActiveNpsScore() != null &&
      !npsSurveyViewModel.IsModal()
    ) {
      npsSurveyViewModel.ShowMainQuestion(false); // aleady answered
      updateQuestionVisibilityBasedOnScore();
      npsSurveyViewModel.ShowFeedback(true);
    }
  }
});

function updateQuestionVisibilityBasedOnScore() {
  var score = npsSurveyViewModel.ActiveNpsScore();
  npsSurveyViewModel.ShowPromoterFollowUpQuestion(score >= 9);
  npsSurveyViewModel.ShowPassiveFollowUpQuestion(score >= 7 && score < 9);
  npsSurveyViewModel.ShowDetractorFollowUpQuestion(score < 7);
}
