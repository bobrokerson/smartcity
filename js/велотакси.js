"use strict";

 $(window).load(function () {
	//------------------------------------------------------------------------
	//						PRELOADER SCRIPT
	//------------------------------------------------------------------------
	$("#preloader").delay(400).fadeOut("slow"); // will fade out the white DIV that covers the website.
	$("#preloader .clock").fadeOut(); // will first fade out the loading animation
});

document.addEventListener('DOMContentLoaded', function() {


//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------
$('#header-form-slogan-form').validate({
    onfocusout: false,
    onkeyup: false,
    rules: {
        name: "required",
        message: "required",
        email: {
            required: true,
            email: true
        },
        type: "required",
        check: "required",
        radio: "required"
    },
    errorPlacement: function (error, element) {

        if ((element.attr("type") == "radio") || (element.attr("type") == "checkbox")) {
            error.appendTo($(element).parents("div").eq(0));
        } else if (element.is("select")) {
            error.appendTo($(element).parents("div").eq(1));
        } else {
            error.insertAfter(element);
        }
    },
    messages: {
        name: "What's your name?",
        message: "Type your message",
        email: {
            required: "What's your email?",
            email: "Please, enter a valid email"
        },
        type: "Please enter car type",
        check: "Please check box",
        radio: "Please choose radio button"
    }
});

//------------------------------------------------------------------------------------
//								CONTACT FORM SCRIPT
//------------------------------------------------------------------------------------

$('#header-form-slogan-form').submit(function () {
    var _this = this;
    // submit the form
    if ($(this).valid()) {
        $(this).find('[type=submit]').button('loading');
        var action = $(this).attr('action');
        $.ajax({
            url: action,
            type: 'POST',
            data: {
                contactname: $(this).find('.contact_name').val(),
                contactemail: $(this).find('.contact_email').val(),
                contactmessage: $(this).find('.contact_message').val(),
                id: this.id
            },
            success: function () {
		$('#header-form-slogan-form').find('[type=submit]').button('complete');
		//Use modal popups to display messages
		$(document).find('#header-form-slogan-success').modal('show');
	},
            error: function () {
		$('#header-form-slogan-form').find('[type=submit]').button('reset');
		//Use modal popups to display messages
		$(document).find('#header-form-slogan-error').modal('show');
	}
        });
    } else {
        //if data was invalidated
    }
    return false;
});



//------------------------------------------------------------------------
//                    MAGNIFIC POPUP(LIGHTBOX) SETTINGS
//------------------------------------------------------------------------

$('.single-iframe-popup').magnificPopup({
	type: 'iframe'

});


$('#agreement-show').click(function(){
    	$(document).find('#header-form-agreement').modal('show');
})

//------------------------------------------------------------------------
//						OWL CAROUSEL OPTIONS
//------------------------------------------------------------------------

$('.carousel-5item-nav').owlCarousel({
    loop: false,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['', ''],
    rewind: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1300: {
            items: 5
        }
    }

});


});


