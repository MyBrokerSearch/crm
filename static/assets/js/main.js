function slider(element) {
  let content = document.getElementById(element.className.split(" ")[0]);
  let hidden = document.getElementsByClassName("main_services");

  for (const el of hidden) {
    el.style.display = "none";
  }
  content.style.display = "block";
}

function openHomeBlock(element) {
  let content1 = document.getElementById(element.className);
  let hidden1 = document.getElementsByClassName("home_info_block");
  for (const el of hidden1) {
    el.style.display = "none";
  }
  content1.style.display = "flex";
}

$(".service_list a").click(function (event) {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(".service_list a").removeClass("active");
    $(this).addClass("active");
  }
});

$(".bottom_blocks_buttons a").click(function (event) {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(".bottom_blocks_buttons a").removeClass("active");
    $(this).addClass("active");
  }
});

function popup(element) {
  let hidden1 = document.getElementById("task_popup");
  if (hidden1.style.display === "block") {
    hidden1.style.display = "none";
  } else {
    hidden1.style.display = "block";
  }
}
$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});

$(document).ready(function () {
  $(function () {
    $("#my_date_picker1").datepicker({});
  });

  $(function () {
    $("#my_date_picker2").datepicker({});
  });
  $("#my_date_picker1").change(function () {
    startDate = $(this).datepicker("getDate", "+1d");
    $("#my_date_picker2").datepicker("option", "minDate", startDate);
  });

  $("#my_date_picker2").change(function () {
    endDate = $(this).datepicker("getDate");
    $("#my_date_picker1").datepicker("option", "minDate", endDate);
  });
});
