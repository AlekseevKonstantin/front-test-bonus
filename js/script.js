
$(function(){
  var controller = new ScrollMagic.Controller();

    var pinScene = new ScrollMagic.Scene({
      triggerElement: '#banner',
      triggerHook: 0
    })
    .setPin('#banner')
    .addTo(controller);
})

  
