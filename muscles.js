AFRAME.registerComponent('click-handler', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function () {
        // Acciones al hacer clic en el músculo, como mostrar información
        // Por ejemplo: Mostrar información en un panel o cambiar la apariencia del músculo
      });
    }
  });
  
  AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var el = this.el;
      el.addEventListener('mouseenter', function () {
        // Cambiar el color del músculo al pasar el cursor sobre él
        el.setAttribute('material', 'color', 'red');
      });
      el.addEventListener('mouseleave', function () {
        // Restaurar el color original del músculo al salir del cursor
        el.setAttribute('material', 'color', 'white');
      });
    }
  });
    