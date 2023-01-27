    const contacts =  document.getElementById("contacts"); //div donde vamos a pintar los contactos
    const templateContact = document.getElementById("templateContact").innerHTML;
    var websocket;

    $(document).ready(function(){
        //Open a WebSocket connection.
        websocket = new WebSocket("ws://localhost:9000/");
        
        //Connected to server
        websocket.onopen = function(ev) {
            console.log('Connected to server ');
        }
        
        //Connection close
        websocket.onclose = function(ev) { 
            console.log('Disconnected');
        };
        websocket.onmessage = function(evt) { 
            var response 		= JSON.parse(evt.data); //PHP sends Json data
            //hacer lo que corresponda con response
        };
         
        //Error
        websocket.onerror = function(ev) { 
            console.log('Error '+ev.data);
        };
        
    });
    

    // $('#sendMessage').keypress(function (e) {
    //     if (e.which == 13) {
    //         // Enviar mensaje a la BDD
    //         $.ajax({
    //             type: "POST",
    //             url: "http://127.0.0.1/phpmyadmin/whatsapp",
    //             data: { id: "" },
    //             success: function(data) {

    //             }
    //         }); 
    //     } 
    // }) 

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
})

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Initialize and Configure Magnific Popup Lightbox Plugin
$('.popup-gallery').magnificPopup({
    delegate: '.gallery',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
});

//add of active class for table link which is clicked(index-body)
  $('.link').click(function(){
    $('.table td a.active').removeClass('active');
    $(this).addClass('active');
  })

//Activation of the tooltip
$(function(){
    $('[data-toggle="tooltip"]').tooltip()
})

// Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });

    function createDOMContact(m){
        var el = document.createElement('span');
        el.innerHTML = templateContact;
        el.getElementsByClassName("contact.userName")[0].innerHTML = m.userName;
        el.getElementsByClassName("contact")[0].setAttribute("data-id", m.id);
        el.getElementsByClassName("contact.info")[0].innerHTML = m.info;
        contacts.appendChild(el);
        //Ya solo te falta añadir los eventos clic
      }
    
    //   Los métodos debo de mantenerlos? Ninguno funciona
    // Como funciona data-id?