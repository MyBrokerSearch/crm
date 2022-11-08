function editor(element) {
  var content = document.getElementById(element.className);
  var hidden = document.getElementsByClassName("editor_block");
  for (const el of hidden) {
    el.style.display = "none";
  }
  content.style.display = "flex";
}

function cancelsave(element) {
  var content = document.getElementById(element.className);
  var hidden = document.getElementsByClassName("editor_block");
  for (const el of hidden) {
    el.style.display = "none";
  }
}
function savechanges(element) {
  let elementId = element.className.split(" ")[1];
  let textinput = document.getElementById(elementId).value;
  let infoDiv = document.getElementById("div_" + elementId);
  let input = document.getElementById(elementId);
  let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var content = document.getElementById(element.className);
  var hidden = document.getElementsByClassName("editor_block");

  if (testEmail.test(input.value) && elementId == "input_email") {
    infoDiv.textContent = textinput;
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_phone" && !input.value.includes("_")) {
    $(".desc_phone").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (
    $("#input_password").val() == $("#conf").val() &&
    $("#input_password").val() !== " " &&
    $(".password_length").hasClass("complete") &&
    $(".password_uppercase").hasClass("complete") &&
    $(".password_number").hasClass("complete") &&
    $(".password_match").hasClass("complete")
  ) {
    $(".password_settings > input").val($("#input_password").val());
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_name" && !input.value == "") {
    $(".info_fullname").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_username" && !input.value == "") {
    $(".info_username").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_facebook" && !input.value == "") {
    $(".info_facebook").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_messenger" && !input.value == "") {
    $(".info_messenger").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_instagram" && !input.value == "") {
    $(".info_instagram").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_twitter" && !input.value == "") {
    $(".info_twitter").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_linkedin" && !input.value == "") {
    $(".info_linkedin").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_tiktok" && !input.value == "") {
    $(".info_tiktok").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_youtube" && !input.value == "") {
    $(".info_youtube").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_digital" && !input.value == "") {
    $(".info_digital").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_website" && !input.value == "") {
    $(".info_website").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
  if (elementId == "input_zillow" && !input.value == "") {
    $(".info_zillow").text(input.value);
    for (const el of hidden) {
      el.style.display = "none";
    }
  }
}

////PHONE
window.onload = (function () {
  MaskedInput({
    elm: document.getElementById("input_phone"),
    format: "+1 (___) ___-____",
    separator: "+1 (   )-",
  });
})(
  (function (a) {
    a.MaskedInput = function (f) {
      if (!f || !f.elm || !f.format) {
        return null;
      }
      if (!(this instanceof a.MaskedInput)) {
        return new a.MaskedInput(f);
      }
      var o = this,
        d = f.elm,
        s = f.format,
        i = f.allowed || "0123456789",
        h =
          f.allowedfx ||
          function () {
            return true;
          },
        p = f.separator || "/:-",
        n = f.typeon || "_YMDhms",
        c = f.onbadkey || function () {},
        q = f.onfilled || function () {},
        w = f.badkeywait || 0,
        A = f.hasOwnProperty("preserve") ? !!f.preserve : true,
        l = true,
        y = false,
        t = s,
        j = (function () {
          if (window.addEventListener) {
            return function (E, C, D, B) {
              E.addEventListener(C, D, B === undefined ? false : B);
            };
          }
          if (window.attachEvent) {
            return function (D, B, C) {
              D.attachEvent("on" + B, C);
            };
          }
          return function (D, B, C) {
            D["on" + B] = C;
          };
        })(),
        u = function () {
          for (var B = d.value.length - 1; B >= 0; B--) {
            for (var D = 0, C = n.length; D < C; D++) {
              if (d.value[B] === n[D]) {
                return false;
              }
            }
          }
          return true;
        },
        x = function (C) {
          try {
            C.focus();
            if (C.selectionStart >= 0) {
              return C.selectionStart;
            }
            if (document.selection) {
              var B = document.selection.createRange();
              return -B.moveStart("character", -C.value.length);
            }
            return -1;
          } catch (D) {
            return -1;
          }
        },
        b = function (C, E) {
          try {
            if (C.selectionStart) {
              C.focus();
              C.setSelectionRange(E, E);
            } else {
              if (C.createTextRange) {
                var B = C.createTextRange();
                B.move("character", E);
                B.select();
              }
            }
          } catch (D) {
            return false;
          }
          return true;
        },
        m = function (D) {
          D = D || window.event;
          var C = "",
            E = D.which,
            B = D.type;
          if (E === undefined || E === null) {
            E = D.keyCode;
          }
          if (E === undefined || E === null) {
            return "";
          }
          switch (E) {
            case 8:
              C = "bksp";
              break;
            case 46:
              C = B === "keydown" ? "del" : ".";
              break;
            case 16:
              C = "shift";
              break;
            case 0:
            case 9:
            case 13:
              C = "etc";
              break;
            case 37:
            case 38:
            case 39:
            case 40:
              C =
                !D.shiftKey && D.charCode !== 39 && D.charCode !== undefined
                  ? "etc"
                  : String.fromCharCode(E);
              break;
            default:
              C = String.fromCharCode(E);
              break;
          }
          return C;
        },
        v = function (B, C) {
          if (B.preventDefault) {
            B.preventDefault();
          }
          B.returnValue = C || false;
        },
        k = function (B) {
          var D = x(d),
            F = d.value,
            E = "",
            C = true;
          switch (C) {
            case i.indexOf(B) !== -1:
              D = D + 1;
              if (D > s.length) {
                return false;
              }
              while (p.indexOf(F.charAt(D - 1)) !== -1 && D <= s.length) {
                D = D + 1;
              }
              if (!h(B, D)) {
                c(B);
                return false;
              }
              E = F.substr(0, D - 1) + B + F.substr(D);
              if (
                i.indexOf(F.charAt(D)) === -1 &&
                n.indexOf(F.charAt(D)) === -1
              ) {
                D = D + 1;
              }
              break;
            case B === "bksp":
              D = D - 1;
              if (D < 0) {
                return false;
              }
              while (
                i.indexOf(F.charAt(D)) === -1 &&
                n.indexOf(F.charAt(D)) === -1 &&
                D > 1
              ) {
                D = D - 1;
              }
              E = F.substr(0, D) + s.substr(D, 1) + F.substr(D + 1);
              break;
            case B === "del":
              if (D >= F.length) {
                return false;
              }
              while (p.indexOf(F.charAt(D)) !== -1 && F.charAt(D) !== "") {
                D = D + 1;
              }
              E = F.substr(0, D) + s.substr(D, 1) + F.substr(D + 1);
              D = D + 1;
              break;
            case B === "etc":
              return true;
            default:
              return false;
          }
          d.value = "";
          d.value = E;
          b(d, D);
          return false;
        },
        g = function (B) {
          if (
            i.indexOf(B) === -1 &&
            B !== "bksp" &&
            B !== "del" &&
            B !== "etc"
          ) {
            var C = x(d);
            y = true;
            c(B);
            setTimeout(function () {
              y = false;
              b(d, C);
            }, w);
            return false;
          }
          return true;
        },
        z = function (C) {
          if (!l) {
            return true;
          }
          C = C || event;
          if (y) {
            v(C);
            return false;
          }
          var B = m(C);
          if ((C.metaKey || C.ctrlKey) && (B === "X" || B === "V")) {
            v(C);
            return false;
          }
          if (C.metaKey || C.ctrlKey) {
            return true;
          }
          if (d.value === "") {
            d.value = s;
            b(d, 0);
          }
          if (B === "bksp" || B === "del") {
            k(B);
            v(C);
            return false;
          }
          return true;
        },
        e = function (C) {
          if (!l) {
            return true;
          }
          C = C || event;
          if (y) {
            v(C);
            return false;
          }
          var B = m(C);
          if (B === "etc" || C.metaKey || C.ctrlKey || C.altKey) {
            return true;
          }
          if (B !== "bksp" && B !== "del" && B !== "shift") {
            if (!g(B)) {
              v(C);
              return false;
            }
            if (k(B)) {
              if (u()) {
                q();
              }
              v(C, true);
              return true;
            }
            if (u()) {
              q();
            }
            v(C);
            return false;
          }
          return false;
        },
        r = function () {
          if (
            !d.tagName ||
            (d.tagName.toUpperCase() !== "INPUT" &&
              d.tagName.toUpperCase() !== "TEXTAREA")
          ) {
            return null;
          }
          if (!A || d.value === "") {
            d.value = s;
          }
          j(d, "keydown", function (B) {
            z(B);
          });
          j(d, "keypress", function (B) {
            e(B);
          });
          j(d, "focus", function () {
            t = d.value;
          });
          j(d, "blur", function () {
            if (d.value !== t && d.onchange) {
              d.onchange();
            }
          });
          return o;
        };
      o.resetField = function () {
        d.value = s;
      };
      o.setAllowed = function (B) {
        i = B;
        o.resetField();
      };
      o.setFormat = function (B) {
        s = B;
        o.resetField();
      };
      o.setSeparator = function (B) {
        p = B;
        o.resetField();
      };
      o.setTypeon = function (B) {
        n = B;
        o.resetField();
      };
      o.setEnabled = function (B) {
        l = B;
      };
      return r();
    };
  })(window)
);
///END

///PASSWORD
var validateInput = $("input.validate");
$(document).ready(function () {
  $(".username_nospaces").keyup(function () {
    this.value = this.value.replace(/\s/g, "");
  });
  $(".validate").keyup(function () {
    this.value = this.value.replace(/\s/g, "");
  });
  var validateInput = $("input.validate");

  function validateInputs() {
    var password = $("#input_password").val(),
      conf = $("#conf").val(),
      all_pass = true;

    var uppercase = password.match(/[A-Z]/),
      number = password.match(/[0-9]/);

    if (password.length < 8) {
      $(".password_length").removeClass("complete");
      all_pass = false;
    } else $(".password_length").addClass("complete");

    if (uppercase) $(".password_uppercase").addClass("complete");
    else {
      $(".password_uppercase").removeClass("complete");
      all_pass = false;
    }

    if (number) $(".password_number").addClass("complete");
    else {
      $(".password_number").removeClass("complete");
      all_pass = false;
    }

    if (password == conf && password != "")
      $(".password_match").addClass("complete");
    else {
      $(".password_match").removeClass("complete");
      all_pass = false;
    }
  }
  validateInput.each(validateInputs).on("keyup", validateInputs);

  function showPassword() {
    if (validateInput.attr("type") === "password") {
      validateInput.attr("type", "text");
    } else if (validateInput.attr("type") === "text") {
      validateInput.attr("type", "password");
    }
  }
  $(".togglePassword").on("click", showPassword);
});
///END

// FULLNAME
const alphaOnlyInput = document.getElementById("input_name"),
  alphaOnlyPattern = new RegExp("^[a-zA-Z ]+$");
let previousValue = "";
alphaOnlyInput.addEventListener("input", (e) => {
  let currentValue = alphaOnlyInput.value;
  if (e.inputType.includes("delete") || alphaOnlyPattern.test(currentValue)) {
    previousValue = currentValue;
  }

  alphaOnlyInput.value = previousValue;
});
// END
$(function () {
  $("#header").load("header.html");
});
