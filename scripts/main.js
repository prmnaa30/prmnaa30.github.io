    /** Types.js */
function typedjs() { 
  var typed = new Typed('#typed', {
      strings: ['College Student.', '^1000Beginner FE Developer.', '^1000'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
      backDelay: 2000,
  });
}
typedjs()

    /** ISOTOPE FILTERING */
$(window).on('load', function () {
    let $filContainer = $(".project-container").isotope({
        itemSelector: '.project-item',
        layoutMode: 'fitRows',
        stagger: 20
    });

    $("#project-filter li").click(function (e) { 
        e.preventDefault();
        $.each($("#project-filter li"), function () { 
            $(this).removeClass('filter-active')
        });
        $(this).addClass('filter-active');

        $filContainer.isotope({
            filter: this.getAttribute('data-filter')
        })
    });
});

    /** form submit to gforms */
function postToGoogle() {
    var field1 = $("#name").val();
    var field2 = $("#email").val();
    var field3 = $("#subject").val();
    var field4 = $("#message").val();

    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdUP7ibTJSM_aAsS7VxgUmlNfWRk9zDc1heL6BoN5mXCeY1Fg/formResponse",
        
      //add your google form generated numbers below which are also the 'names' of your inputs     
      data: {
        "entry.2005620554": field1,
        "entry.1045781291": field2,
        "entry.1065046570": field3,
        "entry.1166974658": field4
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {
        $('#contact-form').trigger('reset');
      },
      error: function (x, y, z) {
        $('#contact-form').trigger('reset');
      }
    });
    return false;
}

    /** Nav and scroll-to-top active */
const navActivate = () => {
  if (window.scrollY > 100) {
    $("#navbar").addClass("nav-active");
    $("#navbar").css("position", "fixed");
    $(".back-to-top").addClass("active");
  } else {
    $("#navbar").removeClass("nav-active");
    $("#navbar").css("position", "absolute");
    $(".back-to-top").removeClass("active");
  }
};
$(window).on('load', navActivate);
$(document).on('scroll', navActivate);

  /** Scroll to top */
$(".back-to-top").click(function () { 
  $(window).scrollTop(0);
});

  /** AOS */
$(window).on('load', function () {
  AOS.refresh();
});