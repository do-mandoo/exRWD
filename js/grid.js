(function(){
  'use strict';
  var gridToggleClass = function(e){
    var gridSystem = document.querySelector('.gridSystem');
    if (e.keyCode === 27){
      gridSystem.classList.toggle('isActive');
    }
  };
  window.addEventListener('keyup', gridToggleClass);
})(window);
// 이벤트 바인딩을 윈도우에 할당.