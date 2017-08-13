(function() {
  console.log("App JS loaded.");

    $(document).ready(function() {
        console.log("Document Ready!");
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('particle', 'js/particlesjs-config.json', function() {
          console.log('callback - particles.js config loaded');
        });


        var typed = new Typed('#anim-text', {
          strings: [
            "Hello World!",
            "I'm Mohammed Sufyan Shaikh"
          ],
          typeSpeed: 70,
          backSpeed: 30,
          loop: true,
          smartBackspace: true,
          cursorChar: '',
          startDelay: 1000,
          backDelay: 500,

        });

        //OwlCarousel
        $('.owl-carousel').owlCarousel({
          // loop:true,
          margin:10,
          // nav:true,
          stagePadding: 50,
          dots: false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      });

    });

    //Working But no customization
    // function startAnimatedText()
    // {
    //   var arr = [
    //     "Hello World!",
    //     "Mohammed Sufyan Welcome's you."
    //   ];
    //
    //   var supIdx = 0;
    //     arr.forEach(function(row1) {
    //
    //       setTimeout(function() {
    //
    //         var idx = 0;
    //         row1.split('').forEach(function(chr) {
    //
    //           setTimeout(function() {
    //             console.log("Char: ",chr);
    //             var old_val = document.getElementById('anim-text').innerHTML;
    //             console.log("OldValue:", old_val);
    //             document.getElementById('anim-text').innerHTML = old_val + chr;
    //           },100 * idx);
    //
    //           idx++;
    //         });
    //
    //
    //       },supIdx * 2000);
    //       supIdx++;
    //     });
    // }
})();
