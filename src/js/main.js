document.addEventListener("DOMContentLoaded", function () {
  var dropdowns = document.querySelectorAll(".nav-item.dropdown");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      var dropdownMenu = this.querySelector(".dropdown-menu");
      dropdownMenu.classList.add("show");
    });

    dropdown.addEventListener("mouseleave", function () {
      var dropdownMenu = this.querySelector(".dropdown-menu");
      dropdownMenu.classList.remove("show");
    });
  });
});
