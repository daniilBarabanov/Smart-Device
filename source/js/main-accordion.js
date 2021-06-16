/*eslint-disable*/

'use strict';

(function () {
  var acc = document.getElementsByClassName('accordion');
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle('active');
      /* Toggle between hiding and showing the active panel */
      for (let j = 0; j < acc.length; j++) {
        if(j !== i) {
          acc[j].nextElementSibling.style.display === 'none';
        }
      }
      var panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
        evt.preventDefault();
      } else {
        panel.style.display = 'block';
        evt.preventDefault();
      }
    });
  }
})();
