
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

    /** Nav active */
const navActivate = () => {
  if (window.scrollY > 200) {
    $("#navbar").addClass("nav-active");
    $("#navbar").css("position", "fixed");
  } else {
    $("#navbar").removeClass("nav-active");
    $("#navbar").css("position", "absolute");
  }
};
$(window).on('load', navActivate);
$(document).on('scroll', navActivate);