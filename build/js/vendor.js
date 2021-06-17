/*eslint-disable*/

if (jQuery(window).width() < 1000) {
  (function () {
  var acc = document.getElementsByClassName('accordion');
  var i;
  var allo = document.getElementsByClassName('allo');
  var a;

  for(a = 0; a < allo.length; a++) {
    allo[a].classList.add('nonactive');
    allo[a].style.display = 'none';
    console.log('olo123');
  }

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
      for (let j = 0; j < acc.length; j++) {
        if(j !== i) {
          acc[j].nextElementSibling.style.display === 'none';
          acc[j].nextElementSibling.style.maxHeight === '0';
        }
      }
    });
  }
})();
}


/*eslint-disable*/

(function() {
  $('.questions-form__mask').mask('+7(999)999-99-99');
  $('.form__popup__mask').mask('+7(999)999-99-99');
})();

/*eslint-disable*/

(function() {
  function resizeBlock(){
    if(window.matchMedia("screen and (max-width: 1023px)").matches) {
       $('.footer-top__left').append($('#1999'));
     }
     else if (window.matchMedia("screen and (min-width: 1023px)").matches){
       $('#1999').appendTo($('#copy'));
     }
   }
   
   $(window).resize(function() {
        resizeBlock();
   });
   
   $(document).ready(function(){
       resizeBlock();
    });
})();