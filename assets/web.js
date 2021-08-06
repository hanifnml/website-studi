function myFunction() {
    document.getElementById("Dropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var Dropdown = document.getElementById("Dropdown");
      if (Dropdown.classList.contains('down')) {
        Dropdown.classList.remove('down');
      }
    }
  }