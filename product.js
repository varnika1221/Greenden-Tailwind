// Side Navigation functionality
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closex = document.getElementById("closex");

menuicon.addEventListener("click", function () {
    sidenav.style.right = "0";
});

closex.addEventListener("click", function () {
    sidenav.style.right = "-50%";
});

// Search Functionality
var searchbox = document.getElementById("searchbox");
var productcontainer = document.getElementById("productcontainer");
var productlist = productcontainer.querySelectorAll(".product-card");

searchbox.addEventListener("keyup", function (event) {
    var valueEntered = event.target.value.toUpperCase(); // Get the search input and convert it to uppercase

    // Loop through the product list to check if the entered value matches product names
    for (let count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h1").textContent.toUpperCase();

        if (productname.indexOf(valueEntered) < 0) {
            productlist[count].style.display = "none"; // Hide products that don't match the search input
        } else {
            productlist[count].style.display = "block"; // Show products that match the search input
        }
    }
});
