(function () {
  var shown = false;
  window.addEventListener("message", function (event) {
    if (shown || event.origin !== "https://tally.so") return;
    if (typeof event.data !== "string" || event.data.indexOf("Tally.FormSubmitted") === -1) return;
    var thanks = document.getElementById("formThanks");
    if (!thanks) return;
    shown = true;
    thanks.hidden = false;
    thanks.classList.add("is-visible");
    thanks.focus();
  });
})();
