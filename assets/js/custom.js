jQuery(document).ready(function () {
  jQuery('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('open');
    $('body').toggleClass('navbar_open');
  });

    //get the video src url
    var youTubeUrl = $('#video').attr('src');

    //the play / start button
    $('#play-video').on('click', function(e) {
        //the video id
        $('#video')[0].src += "?&autoplay=1";
        e.preventDefault();
        $('.play_icon').addClass('d-none');
        $('.stop_icon').removeClass('d-none');
    });
  //the stop / close button
	$( '#stop-video' ).on( 'click', function(e) {
		e.preventDefault();
		//Then assign the src to null, this then stops the video been playing
		$('#video').attr('src', '');

		// Finally you reasign the URL back to your iframe, so when you hide and load it again you still have the link
		$('#video').attr('src', youTubeUrl);
    $('.stop_icon').addClass('d-none');
    $('.play_icon').removeClass('d-none');

	} );

  jQuery('.navbar .navbar-nav .nav-item > a').mouseenter(function(){
    $this = jQuery(this);
    $this.parent('.nav-item').find('.mega_menu').addClass('mega_menu_opened');
    $this.parent('.nav-item').addClass('active_link');
    $this.addClass('active_link');
  });

  jQuery('.navbar .navbar-nav .nav-item > a').mouseleave(function(e){
    $this = jQuery(this);
  });

  jQuery('.navbar-nav li.active_link').mousemove(function(e){
    window.x = e.pageX;
    window.y = e.pageY;
    $this = jQuery(this);
    jQuery('.mega_menu').removeClass('mega_menu_opened');
    $this.find('.mega_menu').addClass('mega_menu_opened');
    const mouse_position = jQuery(this).position();
  });

  jQuery('.navbar-nav li').mouseleave(function(e){
    window.x = e.pageX;
    window.y = e.pageY;
    $this = jQuery(this);
    $this.find('.mega_menu').removeClass('mega_menu_opened');
    const mouse_position = jQuery(this).position();
    $this.removeClass('active_link');
    $this.children('a').removeClass('active_link');
  });
  // Navbar Hover Starts

  // const submenu_position = jQuery('.nav-item.submenu').position();
  // const submenu_padding_top = jQuery('.nav-item.submenu').css('padding-top').replace('px','');
  // const_submenu_from_top = parseFloat(submenu_position.top)+parseFloat(submenu_padding_top);
  // Navbar Hover Ends
  // menu toggle
  // Back to Top Button
  var btn = $('#back_to_top_scroll');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
  // Form validation
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()
  // $(function () {
  //     $('.scroll_point').on('click', function (e) {
  //         e.preventDefault();
  //         $('html, body').animate({
  //             scrollTop: $($(this).attr('href')).offset().top
  //         }, 500, 'linear');
  //     });
  // });
  /// new scroll and redirect link js
  jQuery('.scroll_point[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = jQuery(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = jQuery(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  /// End new scroll and redirect link js

  // !!! custom reponsive menu !!!
  jQuery(function ($) {
    $(".navbar-nav").addClass("responsive-menu");
    $(window).resize(function () {
      if (window.innerWidth > 991) {
        $(".navbar-nav, nav .submenu_menu").removeAttr("style");
        $(".responsive-menu > .nav-item").removeClass("menu-open");
      }
    });
    $(".submenu").click(function (event) {
      if (event.target !== this)
        return;
      $(this).children().siblings(".submenu_menu").slideToggle(function () {
        $(this).parent().toggleClass("menu-open");
      });
    });
  });
  //
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
      $('.navbar').addClass('fixed_sticky');
    } else {
      $('.navbar').removeClass('fixed_sticky');
    }
  });
});

jQuery("input[name='phone']").on('keyup',function(){
  let phone = jQuery(this).val();
  let filter_phone = phone.replace(/\D/gi,'');
  jQuery(this).val(filter_phone.slice(0,10));
})
jQuery(document).ready(function () {
  jQuery('input[type="tel"]').keydown(function(a) {
    if(k = a.which,
    k >= 48 && k <= 57 || k >= 96 && k <= 105 || k == 8) {
        if(jQuery(this).val().length == 15)
            return k == 8 ? !0 : (a.preventDefault(),
            !1)
    }else
        return a.preventDefault(),
        !1
  });

  // <!-- Initialize Swiper -->
    var swiper = new Swiper(".recognizable_alumni_swiper", {
      slidesPerView: "auto",
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          spaceBetween: 20,
        },
        768: {
          spaceBetween: 37,
        },
      },
    });
  // <!-- Initialize Swiper -->
  var swiper = new Swiper(".testimonials_swiper", {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials_swiper_next",
      prevEl: ".testimonials_swiper_prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 22,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 44,
        },
      },
    });
    // <!-- Initialize Swiper -->
    var swiper = new Swiper(".podcast_music_thumbs_swiper", {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".podcast_music_thumbs_next",
        prevEl: ".podcast_music_thumbs_prev",
      },
      breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 23,
          },
        },
    });
    var swiper2 = new Swiper(".podcast_music_swiper", {
      spaceBetween: 50,
      navigation: {
        nextEl: ".podcast_music_next",
        prevEl: ".podcast_music_prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

    swiper2.on('slideChange', function (e) {
      console.log('*** mySwiper.activeIndex', swiper2.activeIndex);
      stop_all_songs();
    });
  });

  jQuery(document).ready(function(){
    if(jQuery('.podcast_play_music_card').length > 0)
    {         

      jQuery('.podcast_music_play_stop').click(function(){
        let song = jQuery(this).data('song');
        stop_all_songs(song);
        jQuery(this).toggleClass('play');
        setTimeout(() => {
          if(!jQuery(`.${song}`).hasClass('pause'))
          {
            jQuery(`.${song}`).trigger('click');
          }
          else
          {
            jQuery(`.${song}`).trigger('click');
          }              
        }, 500); 
      });
      jQuery('.podcast_play_music_card').each(function(){
        let audioPlayer = jQuery(this);
        let song = jQuery(this).find('source').attr('src');
        let real_audio = jQuery(this).find('audio');
        let audio = new Audio(song);            
        let playBtn = jQuery(this).find('.song_play_pause');
        let playBtnWrapper = jQuery(this).find('.podcast_play_music_title');
        let playImg = jQuery(this).find('.podcast_play_music_title img.podcast_play_btn');
        let pauseImg = jQuery(this).find('.podcast_play_music_title img.podcast_pause_btn');

        let timeline = jQuery(this).find('.podcast_play_music_surfing');
        let song_target = jQuery(this).find('.song_play_pause').data('target');
        console.log('song_target',song_target);
        timeline.click(function(e){
          $this = jQuery(this);
          const timelineWidth = jQuery(timeline).css('width');
          const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
          audio.currentTime = timeToSeek;
        })
        
        
        audio.addEventListener(
          "loadeddata",
          () => {                
            audioPlayer.find('.total_timer').text(getTimeCodeFromNum(
              audio.duration
            ));                
          },
          false
        );

        audio.addEventListener('ended', function() {
            console.log('ended');
            this.currentTime = 0;
            //this.play();
            jQuery(`div[data-song=${song_target}] .podcast_play_btn`).removeClass('d-none');
            jQuery(`div[data-song=${song_target}] .podcast_pause_btn`).addClass('d-none');
            playBtn.addClass("play");
            playBtn.removeClass("pause");
            playImg.removeClass('d-none');
            pauseImg.addClass('d-none');
        }, false);
        
        playBtn.click(function(){
          let songid = jQuery(this).data('target');
          if (audio.paused) {
              playBtn.removeClass("play");
              playBtn.addClass("pause");
              audio.play();
              playImg.addClass('d-none');
              pauseImg.removeClass('d-none');
              jQuery(`div[data-song=${songid}] .podcast_play_btn`).addClass('d-none');
              jQuery(`div[data-song=${songid}] .podcast_pause_btn`).removeClass('d-none');
            } else {
              playImg.removeClass('d-none');
              pauseImg.addClass('d-none');
              playBtn.removeClass("pause");
              playBtn.addClass("play");
              audio.pause();
              jQuery(`div[data-song=${songid}] .podcast_play_btn`).removeClass('d-none');
              jQuery(`div[data-song=${songid}] .podcast_pause_btn`).addClass('d-none');

            }
        });

        setInterval(() => {              
           audioPlayer.find('.music_surfing_active').css('width',audio.currentTime / audio.duration * 100 + "%");
            audioPlayer.find('.play_time').text(getTimeCodeFromNum(
              audio.currentTime
            ));
        }, 500);                        
      });
    }
  });

  // Stoping all songs;
  function stop_all_songs(ignore = '')
  {     
    if(ignore != '') 
    {
      jQuery('div.song_play_pause').each(function(){
        let target = jQuery(this).data('target');
        if(target != ignore && jQuery(this).hasClass('pause'))
        {
          jQuery(this).trigger('click');
        }
      });
    }
    else
    {
      jQuery('div.song_play_pause').each(function(){
        let target = jQuery(this).data('target');
        if(jQuery(this).hasClass('pause'))
        {
          jQuery(this).trigger('click');
        }
      });
    }
  }

  //turn 128 seconds into 2:08
  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= (minutes * 60).toFixed(2);
    const hours = parseInt(minutes / 60);
    minutes -= (hours * 60);
    // if (hours === 0) return `${hours}:${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }

