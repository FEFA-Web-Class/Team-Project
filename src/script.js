// Toggle mobile menu
  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  }

  // Newsletter message
  function subscribe(event) {
    event.preventDefault();
    alert("Thank you for subscribing!");
    event.target.reset();
  }