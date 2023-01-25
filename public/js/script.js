


// About

// view all

// Responsive nav item
/** code by webdevtrick ( https://webdevtrick.com ) **/

(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery

//sidebar menu hide when click link
let menuLink = document.getElementById("menuLink");
let bars = document.getElementById("bars");
let menuBtn = document.getElementById("menu-btn");

function myFunction() {
  let closeBtn = document.querySelector(".close-btn");
  let SideNavBar = document.getElementById("SideNavBar");
  SideNavBar.classList.remove("active");
}
function BarFunction() {
  let closeBtn = document.querySelector(".close-btn");
  let SideNavBar = document.getElementById("SideNavBar");
  SideNavBar.classList.toggle("active");
}
function CloseFunction() {
  let closeBtn = document.querySelector(".close-btn");
  let SideNavBar = document.getElementById("SideNavBar");
  SideNavBar.classList.remove("active");
}

const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function () {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});
  $(".moreless-button").click(function () {
    $(".moretext").slideToggle();
    if ($(".moreless-button").text() == "View all") {
      $(this).text("Hide");
    } else {
      $(this).text("View all");
    }
  });
  // Get the button
        let mybutton = document.getElementById("myBtn");
        
        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        
        var Tawk_API = Tawk_API || {},
          Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://embed.tawk.to/61ed13dcb9e4e21181bb6736/1fq31b67i";
          s1.charset = "UTF-8";
          s1.setAttribute("crossorigin", "*");
          s0.parentNode.insertBefore(s1, s0);
        })();