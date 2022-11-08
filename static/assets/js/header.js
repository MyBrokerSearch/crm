function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function helpSupportBack() {
  if ($(".help_block").hasClass("help_active")) {
    document.getElementById("help_style").classList.remove("help_active");
    document.getElementById("myDropdown").classList.toggle("show");
  }
}
function helpSupport() {
  document.getElementById("help_style").classList.toggle("help_active");
  document.getElementById("myDropdown").classList.toggle("show");
}
function openPopup(element) {
  var content = document.getElementById(element.className);
  var hidden = document.getElementsByClassName("popup_block");
  for (const el of hidden) {
    el.style.display = "none";
  }
  content.style.display = "flex";
}
function closePopup(element) {
  var content = document.getElementById(element.className);
  var hidden = document.getElementsByClassName("popup_block");
  for (const el of hidden) {
    el.style.display = "none";
  }
}

window.onclick = function (event) {
  var input = document.getElementById("subject_email");
  var textarea = document.getElementById("textarea");
  var callInput = document.getElementById("call_request_input");
  $(".dropdown_menu").click(function (event) {
    event.stopPropagation();
  });

  $(".report_problem_popup").click(function (event) {
    event.stopPropagation();
  });
  $(".call_request_popup").click(function (event) {
    event.stopPropagation();
  });

  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
  if (!event.target.matches(".help_button")) {
    var helpContent = document.getElementsByClassName("help_block");
    var i;
    for (i = 0; i < helpContent.length; i++) {
      var openHelpContent = helpContent[i];
      if (openHelpContent.classList.contains("help_active")) {
        openHelpContent.classList.remove("help_active");
      }
    }
  }
  if (input.value == "" && textarea.value == "") {
    $(".popup_block").css("display", "none");
  }
};
