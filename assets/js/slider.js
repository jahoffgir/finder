if (navigator.msMaxTouchPoints) {
          $('#slider').addClass('ms-touch');

          $('#slider').on('scroll', function() {
            $('.slide-image').css('transform','translate3d(-' + (100-$(this).scrollLeft()/6) + 'px,0,0)');
          });

        } else {
            var slider = {

            el: {
                slider: $("#slider"),
                holder: $(".holder"),
                imgSlide: $(".slide-image")
            },

            slideWidth: $('#slider').width(),
            touchstartx: undefined,
            touchmovex: undefined,
            movex: undefined,
            index: 1,
            longTouch: undefined,

            init: function() {
                this.bindUIEvents();
            },

            bindUIEvents: function() {

            this.el.holder.on("touchstart", function(event) {
                slider.start(event);
            });

            this.el.holder.on("touchmove", function(event) {
                slider.move(event);
            });

            this.el.holder.on("touchend", function(event) {
                slider.end(event);
            });

            },

            start: function(event) {
                
                // Test for flick.
                this.longTouch = false;
                setTimeout(function() {
                    window.slider.longTouch = true;
                }, 250);

                // Get the original touch position.
                this.touchstartx =  event.originalEvent.touches[0].pageX;

                // The movement gets all janky if there's a transition on the elements.
                $('.animate').removeClass('animate');
            },

            move: function(event) {
//                document.getElementsByClassName("slide-wrapper")[0].style.display = "block";
              // Continuously return touch position.
              this.touchmovex =  event.originalEvent.touches[0].pageX;
              // Calculate distance to translate holder.
              this.movex = this.index*this.slideWidth + (this.touchstartx - this.touchmovex);
              // Defines the speed the images should move at.
              var panx = 100-this.movex/6;
              if (this.movex < 1000) { // Makes the holder stop moving when there is no more content.
                this.el.holder.css('transform','translate3d(-' + this.movex + 'px,0,0)');
              }
              if (panx < 100) { // Corrects an edge-case problem where the background image moves without the container moving.
                this.el.imgSlide.css('transform','translate3d(-' + panx + 'px,0,0)');
              }
                document.getElementsByClassName("slide-wrapper")[0].style.display = "block";
                
            },

            end: function(event) {
                
                // Calculate the distance swiped.
                var absMove = Math.abs(this.index*this.slideWidth - this.movex);
                // Calculate the index. All other calculations are based on the index.
                if (absMove > this.slideWidth/2 || this.longTouch === false) {
                    if (this.movex > this.index*this.slideWidth && this.index < 2) {
                        this.index++; 
                    } else if (this.movex < this.index*this.slideWidth && this.index > 0) {
                        this.index--;
                    }
                }      
                // Move and animate the elements.
                this.el.holder.addClass('animate').css('transform', 'translate3d(-' + this.index*this.slideWidth + 'px,0,0)');
                this.el.imgSlide.addClass('animate').css('transform', 'translate3d(-' + 100-this.index*50 + 'px,0,0)');
                this.index = 1;
                var i;
                var myNode = document.getElementsByClassName('slide-image');
                
                for (i = 0; i < document.getElementsByClassName('slide-image').length; i++) {
                    document.getElementsByClassName('slide-image')[i].parentNode.removeChild(myNode[i]);
                }
                if (document.getElementsByClassName('slide-image').length) {
                    document.getElementsByClassName('slide-image')[0].parentNode.removeChild(myNode[0]);
                }
                
                for (i = 0; i < 3; i++) {
                    var el = document.createElement("img");
                    el.setAttribute("class", "slide-image");
                    el.setAttribute("src", " ");
                    document.getElementsByClassName('slide')[0].parentNode.appendChild(el);
                }
                
                
                indx = sessionStorage.getItem("curser");
                arr = sessionStorage.getItem("restaurants");
                // Adds a different restaurant pic
                document.getElementsByClassName('slide-image')[1].setAttribute("src", arr[indx].featured_image  );
                sessionStorage.setItem("curser", indx + 1);
                // timeout for the image replacement
                window.setTimeout(function() {
                    location.reload(slider.js);
                }, 700)
                
            }

            };
            document.getElementsByClassName("slide-wrapper")[0].style.display = "none";
            slider.init();
        }
