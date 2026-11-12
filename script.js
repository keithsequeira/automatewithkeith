(function () {
  var form = document.getElementById("inquiry-form");
  var status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var business = form.business.value.trim();
    var project = form.project.value.trim();
    var lines = ["Name: " + name, "Email: " + email];

    if (business) lines.push("Business: " + business);
    lines.push("", "Project:", project);

    var href =
      "mailto:automatewithkeith@gmail.com?subject=" +
      encodeURIComponent("Automation Project Inquiry") +
      "&body=" +
      encodeURIComponent(lines.join("\n"));

    if (status) {
      status.textContent =
        "Your email app should open with this inquiry. If it does not, email automatewithkeith@gmail.com.";
    }

    window.location.href = href;
  });
})();
