function updateQuestionVisibilityBasedOnScore() {
  var e = npsSurveyViewModel.ActiveNpsScore();
  npsSurveyViewModel.ShowPromoterFollowUpQuestion(e >= 9),
    npsSurveyViewModel.ShowPassiveFollowUpQuestion(e >= 7 && e < 9),
    npsSurveyViewModel.ShowDetractorFollowUpQuestion(e < 7);
}
!(function () {
  var e = "undefined" == typeof isNpsSurveyPage || null === isNpsSurveyPage;
  (npsSurveyViewModel = {
    IsModal: ko.observable(e),
    NpsSurveyId: ko.observable(e ? npsSurveyId : npsScoreIdForSurveyPage),
    NpsUniqueId: ko.observable(null),
    MainQuestion: ko.observable(""),
    PromoterFollowUpQuestion: ko.observable(""),
    PassiveFollowUpQuestion: ko.observable(""),
    DetractorFollowUpQuestion: ko.observable(""),
    UseSecondaryLogo: ko.observable(!1),
    EmailUrl: ko.observable(e ? null : emailUrl),
    UserAgent: ko.observable(e ? null : userAgent),
    PromoterThankYouMessage: ko.observable(""),
    PassiveThankYouMessage: ko.observable(""),
    DetractorThankYouMessage: ko.observable(""),
    ActiveNpsScore: ko.observable(e ? null : npsScoreForSurveyPage),
    Feedback: ko.observable(null),
    ShowSurvey: ko.observable(!0),
    ShowMainQuestion: ko.observable(!0),
    ShowPromoterFollowUpQuestion: ko.observable(!1),
    ShowPassiveFollowUpQuestion: ko.observable(!1),
    ShowDetractorFollowUpQuestion: ko.observable(!1),
    ShowFeedback: ko.observable(!1),
    ShowThankYou: ko.observable(!1),
    ShowError: ko.observable(!1),
    ErrorMessage: ko.observable(""),
    IsLoadingNpsSurvey: ko.observable(!1),
    GetNpsSurveyFormData: function () {
      npsSurveyViewModel.IsLoadingNpsSurvey(!0),
        $.ajax({
          url: getNpsSurveyFormDataUrl,
          type: "GET",
          data: { npsScoreId: npsSurveyViewModel.NpsSurveyId() },
          success: function (e) {
            e &&
              (npsSurveyViewModel.NpsUniqueId(e.UniqueID),
              npsSurveyViewModel.MainQuestion(e.MainQuestion),
              npsSurveyViewModel.PromoterFollowUpQuestion(
                e.PromoterFollowUpQuestion
              ),
              npsSurveyViewModel.PassiveFollowUpQuestion(
                e.PassiveFollowUpQuestion
              ),
              npsSurveyViewModel.DetractorFollowUpQuestion(
                e.DetractorFollowUpQuestion
              ),
              npsSurveyViewModel.PromoterThankYouMessage(
                e.PromoterPostSurveyMessage
              ),
              npsSurveyViewModel.PassiveThankYouMessage(
                e.PassivePostSurveyMessage
              ),
              npsSurveyViewModel.DetractorThankYouMessage(
                e.DetractorPostSurveyMessage
              ),
              npsSurveyViewModel.UseSecondaryLogo(e.UseSecondaryLogo));
          },
          error: function (e, o, s) {
            npsSurveyViewModel.ShowSurvey(!1),
              npsSurveyViewModel.ShowThankYou(!1);
            var r =
              "An unexpected error occurred while requesting NPS Survey: ";
            404 == e.status ||
            e.responseText.includes("NPS Survey was not found.")
              ? (r += "\nNPS Survey was not found.")
              : e.responseText
              ? (r += "\n" + e.responseText)
              : (r += "\nError details could not be parsed."),
              npsSurveyViewModel.ErrorMessage(r),
              npsSurveyViewModel.ShowError(!0);
          },
        }).always(function () {
          npsSurveyViewModel.IsLoadingNpsSurvey(!1);
        });
    },
    AnswerNpsSurvey: function (e) {
      npsSurveyViewModel.ActiveNpsScore(e),
        npsSurveyViewModel.ShowMainQuestion(!1),
        npsSurveyViewModel.ShowFeedback(!0),
        updateQuestionVisibilityBasedOnScore(),
        npsSurveyViewModel.ActiveNpsScore() >= 9
          ? (npsSurveyViewModel.ShowPromoterFollowUpQuestion(!0),
            npsSurveyViewModel.ShowPassiveFollowUpQuestion(!1),
            npsSurveyViewModel.ShowDetractorFollowUpQuestion(!1))
          : npsSurveyViewModel.ActiveNpsScore() >= 7 &&
            npsSurveyViewModel.ActiveNpsScore() < 9
          ? (npsSurveyViewModel.ShowPromoterFollowUpQuestion(!1),
            npsSurveyViewModel.ShowPassiveFollowUpQuestion(!0),
            npsSurveyViewModel.ShowDetractorFollowUpQuestion(!1))
          : (npsSurveyViewModel.ShowPromoterFollowUpQuestion(!1),
            npsSurveyViewModel.ShowPassiveFollowUpQuestion(!1),
            npsSurveyViewModel.ShowDetractorFollowUpQuestion(!0));
    },
    SubmitNpsSurvey: function () {
      npsSurveyViewModel.ShowSurvey(!1),
        npsSurveyViewModel.ShowThankYou(!0),
        null != npsSurveyViewModel.ActiveNpsScore() &&
          null != npsSurveyViewModel.NpsUniqueId() &&
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
    },
    SkipNpsSurvey: function () {
      null == npsSurveyViewModel.ActiveNpsScore() &&
      null != npsSurveyViewModel.NpsUniqueId()
        ? $.ajax({
            url: skipNpsSurveyUrl,
            type: "POST",
            data: { uniqueID: npsSurveyViewModel.NpsUniqueId() },
            error: function (e, o, s) {
              ShowCustomAlert(
                "You are impersonating a user.  For security reasons, you cannot perform this action."
              );
            },
          }).always(function () {
            $("#novi-pop-up").modal("hide");
          })
        : $("#novi-pop-up").modal("hide");
    },
    SnoozeNpsSurvey: function () {
      $("#novi-pop-up").modal("hide"),
        null == npsSurveyViewModel.ActiveNpsScore() &&
          null != npsSurveyViewModel.NpsSurveyId() &&
          $.ajax({
            url: snoozeNpsSurveyUrl,
            type: "POST",
            data: { id: npsSurveyViewModel.NpsSurveyId() },
          });
    },
    ThankYouCloseNpsSurvey: function () {
      $("#novi-pop-up").modal("hide");
    },
  }),
    (npsSurveyViewModel.ThankYouMessage = ko.computed(function () {
      const e = this.ActiveNpsScore();
      return e <= 6 &&
        null != this.DetractorThankYouMessage() &&
        "" !== this.DetractorThankYouMessage()
        ? this.DetractorThankYouMessage()
        : e <= 8 &&
          null != this.PassiveThankYouMessage() &&
          "" !== this.PassiveThankYouMessage()
        ? this.PassiveThankYouMessage()
        : e <= 10 &&
          null != this.PromoterThankYouMessage() &&
          "" !== this.PromoterThankYouMessage()
        ? this.PromoterThankYouMessage()
        : "Thank You!";
    }, npsSurveyViewModel));
})(),
  $(document).ready(function () {
    var e = document.getElementById("nps-survey");
    e &&
      (ko.cleanNode(e),
      ko.applyBindings(npsSurveyViewModel, e),
      npsSurveyViewModel.GetNpsSurveyFormData(),
      null == npsSurveyViewModel.ActiveNpsScore() ||
        npsSurveyViewModel.IsModal() ||
        (npsSurveyViewModel.ShowMainQuestion(!1),
        updateQuestionVisibilityBasedOnScore(),
        npsSurveyViewModel.ShowFeedback(!0)));
  });
//# sourceMappingURL=nps-survey-bundle.js.map
