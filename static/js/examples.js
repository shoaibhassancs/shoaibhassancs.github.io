// Example expanders: only one open at a time, and the clicked label stays where it is on screen
(function () {
  var items = document.querySelectorAll("details.example");

  items.forEach(function (d) {
    var summary = d.querySelector("summary");

    summary.addEventListener("click", function (e) {
      e.preventDefault();

      // Where the label is on screen before anything changes
      var before = summary.getBoundingClientRect().top;

      if (d.open) {
        d.open = false;
      } else {
        // Close every other expander, then open this one
        items.forEach(function (other) {
          if (other !== d) other.open = false;
        });
        d.open = true;
      }

      // If a block above collapsed, the label moved; scroll by the same amount to put it back
      var delta = summary.getBoundingClientRect().top - before;
      if (delta !== 0) {
        window.scrollBy({ top: delta, left: 0, behavior: "instant" });
      }
    });
  });
})();