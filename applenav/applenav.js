$(document).ready(function () {
              $(".navbar-toggle").on("click", function () {
                    $(this).toggleClass("active");
                  $(".navbar-inverse").toggleClass("active");
                  $("body").toggleClass("noscroll");
                  $("html").toggleClass("noscroll");
              });
        });
